import React from "react"
import PropTypes from "prop-types"
import IconList from "../IconList"
import Image from "../Image"

const PictureCard = ({ image, title, text, tech, indev, link }) => {
  const LinkOrNotTag = typeof link === "undefined" || link === "" ? "div" : "a"

  return (
    <LinkOrNotTag
      className="relative shadow-lg rounded-lg group flex flex-1 justify-center items-center mx-2 my-3 bg-black"
      style={{ minWidth: "320px", maxHeight: "280px" }}
      href={link}
      target="_blank"
    >
      <Image
        src={image}
        classes="rounded-lg h-full w-full absolute z-10 bg-cover bg-center group-hover:opacity-50 transition-all duration-500 ease-in-out pointer-events-none"
      />
      {indev && (
        <span className="uppercase text-white text-xs absolute right-0 top-0 mt-2 mr-2 pointer-events-none">
          In Development
        </span>
      )}
      <div className="w-10/12 absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 ease-in-out z-20 pointer-events-none">
        <h6 className="text-white font-bold text-md text-center mb-2">
          {title}
        </h6>
        <p className="text-white text-center text-sm mb-2">{text}</p>
        <IconList items={tech} />
      </div>
    </LinkOrNotTag>
  )
}

PictureCard.defaultProps = {
  indev: false,
  link: undefined,
}

PictureCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
  indev: PropTypes.bool,
  link: PropTypes.string
}

export default PictureCard
