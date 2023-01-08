import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../styles/MobileNavbar.css";

function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
    setMenuOpen(true);
  };
  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
    setMenuOpen(false);
  };
  return (
    <div className="mobile-nav">
      <IconButton>
        <MenuIcon
          sx={{ fontSize: "40px", color: "white" }}
          onClick={handleOpenNavMenu}
        />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        open={menuOpen}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <MenuItem>
          <Link to="/" className="mobile-link">
            {" "}
            Home{" "}
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/projects" className="mobile-link">
            {" "}
            Projects{" "}
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/experience" className="mobile-link">
            {" "}
            Experience{" "}
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default MobileNavbar;
