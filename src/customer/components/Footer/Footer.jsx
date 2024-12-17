import React from "react";
import { Grid, Typography, Button, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            FOXPILOTS
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              About Us
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Terms & Conditions
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Return Policy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Privacy Policy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Support
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Let Us Help You
          </Typography>
          <div>
            <Typography className="pb-5" variant="h6">
              Contact Us
            </Typography>
            <Typography variant="body2" gutterBottom>
              Email: <Link href="mailto:foxpilot001@gmail.com" color="inherit">foxpilot001@gmail.com</Link>
            </Typography>
            <Typography variant="body2" gutterBottom>
              Phone: <Link href="tel:9880612997" color="inherit">9880612997</Link>
            </Typography>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              About Us
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Our Story
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Terms
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Follow Us
          </Typography>
          <div>
            <IconButton href="https://www.facebook.com" target="_blank" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton href="https://www.instagram.com/foxpilots.in?utm_source=qr&igsh=NHI1aXJ1emZzYWI2" target="_blank" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton href="https://www.twitter.com" target="_blank" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton href="https://www.youtube.com" target="_blank" color="inherit">
              <YouTube />
            </IconButton>
          </div>
        </Grid>
        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2023 My Company. All Rights Reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made By Prafull Lohgaon
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icons Made By{" "}
            <Link
              href="https://www.freepik.com"
              color="inherit"
              underline="always"
            >
              Freepik
            </Link>{" "}
            from{" "}
            <Link
              href="https://www.flaticon.com/"
              color="inherit"
              underline="always"
            >
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
