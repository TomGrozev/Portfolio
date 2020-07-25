import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import {Link} from "gatsby"

const LinkOrAnchor = ({element, children, home}) => (
  <>
    {
      home ?
        <AnchorLink offset="100" href={"#"+element}>{children}</AnchorLink>
        :
        <Link to={"/#" + element}>{children}</Link>
    }
  </>
);

const NavbarLinks = ({home}) => (
  <div className="hidden md:flex items-center space-x-3">
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
)

export default NavbarLinks
