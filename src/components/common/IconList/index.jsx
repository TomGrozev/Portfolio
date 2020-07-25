import Icon from "../Icon"
import PropTypes from "prop-types"
import React from "react"

const IconList = ({ items, showText }) => {
  if (!Array.isArray(items)) return null

  let icons = [],
    titleList = []
  items.forEach(item => {
    if (typeof item === "object") {
      icons.push(item.icon)
      titleList.push(item.title)
    } else {
      icons.push(item)
    }
  })
  titleList = titleList.join(", ")

  return (
    <>
      <ul className="flex flex-wrap justify-center space-x-3 m-0">
        {icons.map((icon, index) => (
          <li className="mb-0" key={index}>
            <Icon icon={icon} size={1.5} />
          </li>
        ))}
      </ul>
      {showText && <p className="mt-3 lg:h-12">{titleList}</p>}
    </>
  )
}

IconList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  ),
  showText: PropTypes.bool,
}

IconList.defaultProps = {
  showText: false,
}

export default IconList
