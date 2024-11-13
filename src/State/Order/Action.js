import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType";
import { api } from "../../config/apiConfig";

// export const createOrder = (reqData) => async (dispatch) => {
//     dispatch({ type: CREATE_ORDER_REQUEST });
//     try {
//         const { address } = reqData; // Extract only the address part
//         const { data } = await api.post('/api/orders/', address);

//         if (data._id) {
//             reqData.navigate?.({ search: `step=1&order_id=${data._id}` });
//         }

//         console.log("Created order - ", data);
//         dispatch({
//             type: CREATE_ORDER_SUCCESS,
//             payload: data,
//         });
//     } catch (error) {
//         console.error("Order creation error:", error);
//         const errorMessage = error.response?.data?.message || error.message;
//         dispatch({
//             type: CREATE_ORDER_FAILURE,
//             payload: errorMessage,
//         });
//     }
// };

// ------------------------
export const createOrder = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });
    try {
        const { address } = reqData; // Only extract `address`
        const { data } = await api.post('/api/orders/', address); // Send only address data

        if (data._id) {
            reqData.navigate?.({ search: `step=2&order_id=${data._id}` });
        }

        console.log("Created order - ", data);
        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data,
        });
    } catch (error) {
        console.error("Order creation error:", error); // Detailed error log
        const errorMessage = error.response?.data?.message || error.message;
        dispatch({
            type: CREATE_ORDER_FAILURE,
            payload: errorMessage,
        });
    }
};


// export const getOrderById = (orderId) => async (dispatch) => {
//     dispatch({ type: GET_ORDER_BY_ID_REQUEST });
//     try {
//         // Fetching order by ID
//         const { data } = await api.get(`/api/orders/${orderId}`);

//         console.log("Fetched order by ID", data);
//         dispatch({
//             type: GET_ORDER_BY_ID_SUCCESS,
//             payload: data,
//         });
//     } catch (error) {
//         console.error("Fetch order error: ", error);

//         // Attempt to retrieve a specific error message, if available
//         const errorMessage = error.response?.data?.message || error.message;

//         dispatch({
//             type: GET_ORDER_BY_ID_FAILURE,
//             payload: errorMessage,
//         });
//     }
// };


// export const getOrderById = (orderId) => async (dispatch) => {
//     dispatch({ type: GET_ORDER_BY_ID_REQUEST });
//     try {
//         const { data } = await api.get(`/api/orders/${orderId}`);
//         console.log("order by ID:", data); // Log API response
//         dispatch({
//             type: GET_ORDER_BY_ID_SUCCESS,
//             payload: data,
//         });
//     } catch (error) {
//         console.log("Fetch order error:", error);
//         const errorMessage = error.response?.data?.message || error.message;
//         dispatch({
//             type: GET_ORDER_BY_ID_FAILURE,
//             payload: error.message,
//         });
//     }
// };


export const getOrderById = (orderId) => async (dispatch) => {
    dispatch({ type: GET_ORDER_BY_ID_REQUEST });
    try {
        const { data } = await api.get(`/api/orders/${orderId}`);
        // console.log("order by ID:", data); // Log API response for debugging
        dispatch({
            type: GET_ORDER_BY_ID_SUCCESS,
            payload: data,
        });
    } catch (error) {
        console.log("Fetch order error:", error); // Log detailed error
        // const errorMessage = error.response?.data?.message || error.message;
        dispatch({
            type: GET_ORDER_BY_ID_FAILURE,
            payload: error.message,
        });
    }
};
