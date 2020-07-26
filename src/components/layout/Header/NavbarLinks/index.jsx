import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "gatsby";
import Burger from "../../../common/Burger";

const LinkOrAnchor = ({ element, children, home }) => (
  <>
    {home ? (
      <AnchorLink offset="100" href={"#" + element}>
        {children}
      </AnchorLink>
    ) : (
      <Link to={"/#" + element}>{children}</Link>
    )}
  </>
);

const NavbarLinks = ({ isOpen, onToggle, home }) => (
  <>
    <div
      className={
        "absolute md:hidden top-0 left-0 w-full bg-gray-200 z-0 transition-all ease-in-out duration-200 " +
        (isOpen ? "h-full" : "h-0")
      }
    />
    <div className="block md:hidden z-50">
      <Burger open={isOpen} onToggle={onToggle} />
    </div>
    <div
      className={
        "w-full flex-grow flex-col flex pb-4 md:flex-grow-0 md:w-auto md:pb-0 md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3 z-50" +
        (isOpen ? "" : " hidden md:flex")
      }
    >
      <LinkOrAnchor home={home} element="about">
        About
      </LinkOrAnchor>
      <LinkOrAnchor home={home} element="projects">
        Projects
      </LinkOrAnchor>
      <LinkOrAnchor home={home} element="blog">
        Blog
      </LinkOrAnchor>
      <LinkOrAnchor home={home} element="contact">
        Contact
      </LinkOrAnchor>
    </div>
  </>
);

export default NavbarLinks;
