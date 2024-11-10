import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummery from './OrderSummery';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const querySearch = new URLSearchParams(location.search);

  // Parse the initial step from the URL or default to 0
  const initialStep = Math.max(0, Math.min(parseInt(querySearch.get("step"), 10) || 0, steps.length - 1));
  
  const [activeStep, setActiveStep] = React.useState(initialStep);
  const [isCompleted, setIsCompleted] = React.useState(false); // Add state to track completion

  // Update the URL with the current step when activeStep changes
  React.useEffect(() => {
    querySearch.set("step", activeStep.toString());
    navigate({ search: querySearch.toString() }, { replace: true });
  }, [activeStep, navigate]);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setIsCompleted(true); // Set completion state if it's the last step
    } else {
      setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, steps.length - 1));
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  const handleFinish = () => {
    // Add logic for what happens on finish
    // For example, redirect to a confirmation page or reset the steps
    navigate('/confirmation'); // Redirect to a confirmation page (change this to your desired path)
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
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleFinish} variant="contained">
              Confirm Order
            </Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
      <div>
        {activeStep === 2 ? <DeliveryAddressForm /> : <OrderSummery />}
      </div>
    </div>
  );
}
