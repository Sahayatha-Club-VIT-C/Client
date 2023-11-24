import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
<nav class="navbar">
  <div class="navbar-left">
    <div class="company-logo">
      <img src="#" alt="Company Logo" />
    </div>
    <div class="company-name">
      Company Name
    </div>
  </div>
  <div class="navbar-right">
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Events</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Contact Us</a></li>
      <li><a href="#">Images</a></li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar