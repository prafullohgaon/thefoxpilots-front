import React, { useState, useEffect } from 'react';
import { Button, IconButton } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../../State/Cart/Action';
import { debounce } from 'lodash';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    // Local state for quantity
    const [quantity, setQuantity] = useState(item.quantity);

    // Debounced update function
    const debouncedUpdateCartItem = debounce((newQuantity) => {
        const data = { data: { quantity: newQuantity }, cartItemId: item?._id };
        dispatch(updateCartItem(data));
    }, 300);

    // Handle local quantity update and trigger debounced API update
    const handleUpdateCartItem = (num) => {
        const newQuantity = quantity + num;
        if (newQuantity >= 1) {
            setQuantity(newQuantity); // Optimistically update UI
            debouncedUpdateCartItem(newQuantity); // Update server data
        }
    };

    const handleRemoveCartItem = () => {
        dispatch(removeCartItem(item?._id));
    };

    useEffect(() => {
        setQuantity(item.quantity); // Sync local state if item quantity changes from server
    }, [item.quantity]);

    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className="flex items-center">
                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                    <img className='w-full h-full object-cover object-top' src={item.product.imageUrl} alt="" />
                </div>
                <div className="ml-5 space-y-1">
                    <p className="font-semibold">{item.product.title}</p>
                    <p className="opacity-70">Size: {item.size}, White</p>
                    <p className="opacity-70 mt-2">Seller: {item.product.brand}</p>
                    <div className="flex space-x-5 items-center text-gray-900 pt-6">
                        <p className="font-semibold">₹{item.price}</p>
                        <p className="opacity-50 line-through">₹{item.discountedPrice}</p>
                        <p className="text-green-600 font-semibold">{item.product.discountPersent}% off</p>
                    </div>
                </div>
            </div>
            <div className="lg:flex items-center lg:space-x-10 pt4">
                <div className="flex items-center space-x-2">
                    <IconButton onClick={() => handleUpdateCartItem(-1)} disabled={quantity <= 1}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className="py-1 px-7 border rounded-sm">{quantity}</span>
                    <IconButton onClick={() => handleUpdateCartItem(1)} sx={{ color: "RGB(145 85 253" }}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                    <div>
                        <Button onClick={handleRemoveCartItem} sx={{ color: "RGB(145 85 253" }}>remove</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
