import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";
import {api, API_BASE_URL} from "../../config/apiConfig"
export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });
  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;
  try {

    // const { data } = await api.get(
    //   `/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    // );
    const queryParams = [
      colors ? `color=${colors}` : "",
      sizes ? `size=${sizes}` : "",
      minPrice ? `minPrice=${minPrice}` : "",
      maxPrice ? `maxPrice=${maxPrice}` : "",
      minDiscount ? `minDiscount=${minDiscount}` : "",
      category ? `category=${category}` : "",
      stock ? `stock=${stock}` : "",
      sort ? `sort=${sort}` : "",
      pageNumber ? `pageNumber=${pageNumber}` : "",
      pageSize ? `pageSize=${pageSize}` : ""
  ].filter(Boolean).join("&");
    
    const { data } = await api.get(`/api/products?${queryParams}`);
    

    // console.log("product data ", data)
    dispatch({type:FIND_PRODUCTS_SUCCESS, payload:data})
  }
//   catch (error) {
//     console.error("Fetch products error:", error.response?.data || error.message);
//     dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.response?.data?.error || error.message });
//     dispatch({type:FIND_PRODUCTS_FAILURE, payload:error.message})

// }
  catch (error) {
    const errorMessage = error.response?.data?.error || error.message;
    console.error("Fetch products error:", errorMessage);
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: errorMessage });
}

};

export const findProductsById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const {productId} = reqData;
  try {
    const { data } = await api.get(`/api/products/id/${productId}`);
    // console.log("data id is", data)
    
    dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS, payload:data})
  } catch (error) {
    dispatch({type:FIND_PRODUCT_BY_ID_FAILURE, payload:error.message})
  }
};


export const createProduct=(product)=>async(dispatch)=>{
  try{
    dispatch({type:CREATE_PRODUCT_REQUEST})
    const {data}=await api.post(`${API_BASE_URL}/api/admin/products`,product);
    // console.log("created Products ", data)
    dispatch({
      type:CREATE_PRODUCT_SUCCESS,
      payload:data,
    })
  }catch(error){
    console.log("Catch error", error)
    dispatch({type:CREATE_PRODUCT_FAILURE, payload:error.message })
  }
}


// export const deleteProduct = (productId) => async (dispatch) => {
//   try {
//     dispatch({ type: DELETE_PRODUCT_REQUEST });
//     const { data } = await api.delete(`${API_BASE_URL}/api/admin/products/${productId}/delete`);
//     console.log("delete product ", data);
//     dispatch({
//       type: DELETE_PRODUCT_SUCCESS,
//       payload: productId,
//     });
//   } catch (error) {
//     dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
//   }
// };


export const deleteProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });
    const { data } = await api.delete(`${API_BASE_URL}/api/admin/products/${productId}`);
    // console.log("delete product ", data);
    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: productId,
    });
  } catch (error) {
    console.error("Delete product error:", error.response?.data || error.message);
    dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
  }
};
