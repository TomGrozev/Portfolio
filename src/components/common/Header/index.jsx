import React from "react"
import Navbar from "./Navbar"

const Header = ({home}) => {
  return (
    <div className="relative z-30">
      <Navbar home={home} />
    </div>
  )
}

export default Header
