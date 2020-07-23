import React from "react"
import LightLogo from "../Logo/light"
import SocialIcons from "../SocialIcons"
import config from "../../../data/config"

const Footer = () => (
  <footer className="relative bg-gray-800 h-64 pt-32 px-12 w-full -mt-16 pb-64">
    <div className="w-full flex flex-col items-center">
      <LightLogo size="20" dark={false} />
      <p className="text-lg font-light tracking-wider text-gray-500 my-6 text-center">
        Something will go here but
        <br /> who knows right now.
      </p>

      <SocialIcons icons={config.contact.socials} />
      <small className="text-gray-500 mt-3">Made with love in Australia.</small>
    </div>
  </footer>
)

export default Footer
