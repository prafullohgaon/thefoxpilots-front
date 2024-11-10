import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummery';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize activeStep based on the `step` query parameter in the URL
  const querySearch = new URLSearchParams(location.search);
  const initialStep = Math.max(0, Math.min(parseInt(querySearch.get("step"), 10) || 0, steps.length - 1));
  const [activeStep, setActiveStep] = React.useState(initialStep);
  const [isCompleted, setIsCompleted] = React.useState(false);

  // Update activeStep whenever the step query parameter changes
  React.useEffect(() => {
    const step = parseInt(new URLSearchParams(location.search).get("step"), 10) || 0;
    setActiveStep(step);
  }, [location.search]);

  const handleFinish = () => {
    navigate('/confirmation'); // Adjust this path as needed
  };

  return (
    <div className="px-10 lg:px-20">
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {isCompleted ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you're finished
            </Typography>
            <Button onClick={handleFinish} variant="contained">
              Confirm Order
            </Button>
          </React.Fragment>
        ) : null}
      </Box>
      <div className="mt-10">
        {/* Conditionally render based on active step */}
        {activeStep === 1 ? <DeliveryAddressForm /> : null}
        {activeStep === 2 ? <OrderSummary /> : null}
        {/* Additional steps can be added here as needed */}
      </div>
    </div>
  );
}
