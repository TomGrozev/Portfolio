/**
 * Index component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import Header from "../Header";
import Footer from "../Footer";
import DarkLogo from "../../common/Logo/dark";
import AnchorLink from "react-anchor-link-smooth-scroll";
import LightLogo from "../../common/Logo/light";

function lightOrDark(colour) {
  let r, g, b, hsp;
  if (colour.match(/^rgb/)) {
    colour = colour.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
    );
    r = colour[1];
    g = colour[2];
    b = colour[3];
  } else {
    colour = +(
      "0x" + colour.slice(1).replace(colour.length < 5 && /./g, "$&$&")
    );

    r = colour >> 16;
    g = colour >> 8;
    g = g & 255;
    b = colour & 255;
  }
  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
  return hsp > 127.5 ? "light" : "dark";
}

const ScrollTop = ({ colour, hide }) => {
  return (
    <AnchorLink
      href="#home"
      offset="400"
      className={
        "fall-fade-in fixed bottom-0 right-0 z-40 mr-4 mb-2" +
        (hide ? "" : " show")
      }
      style={{ backgroundImage: "none" }}
    >
      {colour === "light" ? <DarkLogo size="12" /> : <LightLogo size="12" />}
    </AnchorLink>
  );
};

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { colour: "dark", hideScroller: true };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll() {
    if (window.innerHeight + window.scrollY < 1100) {
      this.setState({ hideScroller: true });
      return;
    }

    const x = window.innerWidth - 80,
      y = window.scrollY + window.innerHeight - 65 - window.pageYOffset;
    const elems = document.elementsFromPoint(x, y);
    for (let elem of elems) {
      const colour = window
        .getComputedStyle(elem, null)
        .getPropertyValue("background-color");
      const colorElems = colour.match(
        /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
      );
      if (
        colorElems.length === 4 ||
        (colorElems.length === 5 && colorElems[3] > 0.7)
      ) {
        const temp = lightOrDark(colour);
        this.setState({ colour: temp, hideScroller: false });
        return;
      }
    }
    this.setState({ colour: "light", hideScroller: false });
  }

  render() {
    return (
      <>
        <div className="fixed z-0 top-0 left-0 w-full h-full bg-pattern" />
        <Header home={this.props.home} />
        <main className="relative container px-4 mx-auto z-10">
          {this.props.children}
        </main>
        <Footer home={this.props.home} />

        <ScrollTop colour={this.state.colour} hide={this.state.hideScroller} />
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  home: PropTypes.bool,
};

Layout.defaultProps = {
  home: false,
};

export default Layout;
