import React, { useState, useEffect } from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Button, Menu, MenuItem, Typography, Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { navigation } from "./navigationData";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../../../State/Auth/Action";
import AuthModal from "../../Auth/AuthModal";

export default function Navigation() {
  const [logoText, setLogoText] = useState("fox PILOTS");
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [submenuAnchor, setSubmenuAnchor] = useState(null);
  const [submenuItems, setSubmenuItems] = useState([]);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // For user menu dropdown
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");

  const texts = ["fox PILOTS", "ಫಾಕ್ಸ್ ಪೈಲಟ್ಸ್"];
  let index = 0;

  // Update authentication state
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  // Close modal when user logs in
  useEffect(() => {
    if (auth.user) {
      setOpenAuthModal(false); // Close login modal on successful login
    }
  }, [auth.user]);

  // Change logo text every second
  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setLogoText(texts[index]);
    }, 1000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handleMenuClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleCategoryClick = (event, category) => {
    setSubmenuAnchor(event.currentTarget);
    setSubmenuItems(category.sections);
  };

  const handleSubmenuClose = () => {
    setSubmenuAnchor(null);
  };

  const handleItemClick = (categoryId, sectionId, itemId) => {
    navigate(`/${categoryId}/${sectionId}/${itemId}`);
    handleMenuClose();
    handleSubmenuClose();
  };

  const handleHomeClick = () => {
    navigate("/");
    handleMenuClose();
  };

  const handleUserMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenAuthModal = () => {
    setOpenAuthModal(true);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleUserMenuClose();
  };

  return (
    <header className="bg-white py-4 shadow-md fixed w-full z-10">
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Left: Menu */}
        <div>
          <Button
            startIcon={<MenuIcon />}
            sx={{ textTransform: "none", color: "black" }}
            onClick={handleMenuClick}
          >
            Menu
          </Button>
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleHomeClick}>Home</MenuItem>
            {navigation.categories.map((category) => (
              <MenuItem
                key={category.id}
                onClick={(event) => handleCategoryClick(event, category)}
              >
                {category.name}
              </MenuItem>
            ))}
          </Menu>

          <Menu
            anchorEl={submenuAnchor}
            open={Boolean(submenuAnchor)}
            onClose={handleSubmenuClose}
          >
            {submenuItems.map((section) => (
              <div key={section.id}>
                <Typography
                  variant="subtitle1"
                  sx={{ px: 2, py: 1, fontWeight: "bold" }}
                >
                  {section.name}
                </Typography>
                {section.items.map((item) => (
                  <MenuItem
                    key={item.id}
                    onClick={() =>
                      handleItemClick(
                        submenuItems[0]?.id,
                        section.id,
                        item.id
                      )
                    }
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </div>
            ))}
          </Menu>
        </div>

        {/* Center: Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          {logoText}
        </Typography>

        {/* Right: Authentication & Static Buttons */}
        <div className="flex items-center space-x-4">
          <Button sx={{ textTransform: "none", color: "black" }}>Search</Button>
          <Button sx={{ textTransform: "none", color: "black" }}>Call Us</Button>
          {auth.user ? (
            <>
              <Avatar
                sx={{ bgcolor: deepPurple[500], cursor: "pointer" }}
                onClick={handleUserMenuOpen}
              >
                {auth.user.firstName[0].toUpperCase()}
              </Avatar>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleUserMenuClose}
              >
                <MenuItem onClick={() => navigate("/account")}>
                  Account
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Button
              sx={{ textTransform: "none", color: "black" }}
              onClick={handleOpenAuthModal}
            >
              Sign In
            </Button>
          )}
        </div>
      </nav>
      <AuthModal open={openAuthModal} handleClose={() => setOpenAuthModal(false)} />
    </header>
  );
}
