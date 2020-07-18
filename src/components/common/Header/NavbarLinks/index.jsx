import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavbarLinks = () => (
  <div className="hidden md:flex items-center space-x-3">
    <AnchorLink offset="100" href="#about">About</AnchorLink>
    <AnchorLink offset="100" href="#projects">Projects</AnchorLink>
    <AnchorLink offset="100" href="#contact">Contact</AnchorLink>
  </div>
);

export default NavbarLinks;
