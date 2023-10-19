import React from 'react';
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="greeting">
          <span>Hi 👋</span>
          <span>Sarukh</span>
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
