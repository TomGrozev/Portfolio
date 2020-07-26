import React, { useRef, useState } from "react";
import NavbarLinks from "../NavbarLinks";
import DarkLogo from "../../../common/Logo/dark";
import { Link } from "gatsby";
import { useOnClickOutside } from "../../../../hooks";

const Navbar = ({ home }) => {
  const [isOpen, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div
      ref={node}
      className={
        "container mx-auto px-4 flex flex-wrap py-6 items-center justify-between" +
        (!home ? " border-b-2 border-gray-200" : "")
      }
    >
      <Link to="/" className="clear-link z-50">
        <DarkLogo size="10" />
      </Link>
      <NavbarLinks
        home={home}
        isOpen={isOpen}
        onToggle={() => setOpen(!isOpen)}
      />
    </div>
  );
};

export default Navbar;
