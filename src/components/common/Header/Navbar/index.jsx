import React from "react"
import NavbarLinks from "../NavbarLinks"
import DarkLogo from "../../Logo/dark"
import { Link } from "gatsby"

const Navbar = ({home}) => {
  return (
    <div className={"container mx-auto px-4 flex py-6 items-center justify-between" + (!home ? " border-b-2 border-gray-200" : "")}>
      <Link to="/" className="clear-link"><DarkLogo size="10"/></Link>
      <NavbarLinks home={home} />
    </div>
  )
}

export default Navbar
