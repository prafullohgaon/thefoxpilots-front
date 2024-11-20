import React, { useState, useEffect } from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { navigation } from "./navigationData"; // Import navigation data
import { useNavigate } from "react-router-dom"; // For routing

export default function Navigation() {
  const [logoText, setLogoText] = useState("fox PILOTS");
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [submenuAnchor, setSubmenuAnchor] = useState(null);
  const [submenuItems, setSubmenuItems] = useState([]);
  const navigate = useNavigate();
  const texts = ["fox PILOTS", "ಫಾಕ್ಸ್ ಪೈಲಟ್ಸ್"];
  let index = 0;

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
    setSubmenuItems(category.sections); // Load submenu items
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
            {/* Home Option */}
            <MenuItem onClick={handleHomeClick}>Home</MenuItem>

            {/* Dynamic Categories */}
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
                        submenuItems[0]?.id, // Pass category ID dynamically
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

        {/* Right: Static Buttons */}
        <div className="flex items-center space-x-4">
          <Button sx={{ textTransform: "none", color: "black" }}>Search</Button>
          <Button sx={{ textTransform: "none", color: "black" }}>Call Us</Button>
          <Button sx={{ textTransform: "none", color: "black" }}>Account</Button>
        </div>
      </nav>
    </header>
  );
}
