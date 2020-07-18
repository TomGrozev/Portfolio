import React from 'react'
import NavbarLinks from "../NavbarLinks"
import AnchorLink from "react-anchor-link-smooth-scroll"
import DarkLogo from "../../Logo/dark"

const Navbar = () => {
  return (
    <div className="container mx-auto px-4 flex py-6 items-center justify-between">
      <DarkLogo as={AnchorLink} href="#home" size="10" />
      <NavbarLinks />
    </div>
  )
};

export default Navbar;
