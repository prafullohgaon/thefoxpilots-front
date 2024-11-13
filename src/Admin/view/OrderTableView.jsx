import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmOrder,
  deleteOrder,
  deliveredOrder,
  getOrders,
  shipOrder,
} from "../../State/Admin/Order/Action";
import {
  Avatar,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  CardHeader,
  AvatarGroup,
} from "@mui/material";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const OrdersTable = () => {
  const dispatch = useDispatch([]);
  const { adminOrder } = useSelector((store) => store);
  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index]= event.currentTarget
    setAnchorEl(newAnchorElArray);
    };

  const handleShipedOrder = (orderId) => {
    dispatch(shipOrder(orderId));
    // console.log("handle Shiporder Order ", orderId)
    handleClose();
  };
  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmOrder(orderId));
    // console.log("handle confirmed Order ", orderId)
    handleClose();
  };
  const handleDeliveredOrder = (orderId) => {
    dispatch(deliveredOrder(orderId));
    // console.log("handle Delivered Order ", orderId)
    handleClose();
  };
  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };
  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index]=null
    setAnchorEl(newAnchorElArray);
  };
  useEffect(() => {
    dispatch(getOrders());
  }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.deletedOrder]);
  // console.log("admin orders", adminOrder);
  return (
    <div className="p-10">
      <Card className="mt-2 bg-[#1B1B1B]">
        <CardHeader title="Recent Products" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder?.orders?.slice(0,5).map((item, index) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="" className="border">
                    <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                      {item.orderItems.map((orderItem) => (
                        <Avatar src={orderItem.product.imageUrl}></Avatar>
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="left" scope="row">
                    {item.orderItems.map((orderItem) => (
                      <p>{orderItem.product.title}</p>
                    ))}
                  </TableCell>
                  {/* <TableCell align='left' component="th" scope="row">
                {item.title}
              </TableCell> */}
                  <TableCell align="left">{item._id}</TableCell>
                  <TableCell align="left">{item.totalPrice}</TableCell>
                  <TableCell align="left">
                    <span
                      className={`text-white px-5 py-2 rounded-full
                  ${
                    item.orderStatus === "CONFIRMED"
                      ? "bg-[#369236]"
                      : item.orderStatus === "SHIPPED"
                      ? "bg-[#4141ff]"
                      : item.orderStatus === "PLACED"
                      ? "bg-[#02B290]"
                      : item.orderStatus === "PENDING"
                      ? "bg-[gray]"
                      : "bg-[#025720]"
                  }`}
                    >
                      {item.orderStatus}
                    </span>
                  </TableCell>
            
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrdersTable;
