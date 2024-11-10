import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
        <Grid item xs={6}>
            <div className='flex cursor-pointer'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRfzqJfftVV4FSv13oJI6Me-GW3a3OEHcTz3rN1EeKmA8CASP0SmGxJYMxnUwHIGZ6ncy6Q5Kvtubb8Ih0L66urwb-EKCaQhJFn-WrRO74KrU5noZsJeYlbxw&usqp=CAc" alt="" />
                <div className="ml-5 space-y-2">
                    <p className=''>Men Slim Pant</p>
                    <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                    <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                </div>
            </div>
        </Grid>
        <Grid item xs={2}>
            <p>₹1099</p>
        </Grid>
        <Grid item xs={4}>
            {true && <div>
                <p>
                <AdjustIcon xs={{width:"15px", height:"15px"}} className='text-gray-600 mr-2 text-sm'/>
                <span>
                    Delivered on March 03
                </span>
            </p>
            <p className="text-xs">
                Your item has been delivered
            </p>
            </div> }
            {false &&<p>
                <span>
                    Expected Delivery on March 03
                </span>
            </p>}
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard
