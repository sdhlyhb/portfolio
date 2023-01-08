import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

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
    <div>
      MobileNavbar
      <IconButton>
        <MenuIcon onClick={handleOpenNavMenu} />
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
          <Link to="/"> Home </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/projects"> Projects </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/experience"> Experience </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default MobileNavbar;
