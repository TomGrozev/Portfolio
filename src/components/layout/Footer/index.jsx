import React from "react";
import LightLogo from "../../common/Logo/light";
import SocialIcons from "../../common/SocialIcons";
import config from "../../../data/config";

const Footer = ({ home }) => (
  <footer
    className={
      "relative bg-gray-800 px-12 w-full pb-8 " + (home ? "pt-32" : "pt-10")
    }
  >
    <div className="w-full flex flex-col items-center">
      <LightLogo size="20" dark={false} />
      <p className="text-lg font-light tracking-wider text-gray-500 my-6 text-center">
        {config.footer.text}
      </p>

      <SocialIcons icons={config.contact.socials} />
      <small className="text-gray-500 mt-3">Made by me.</small>
    </div>
  </footer>
);

export default Footer;
