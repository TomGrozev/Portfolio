import React from "react"
import PropTypes from "prop-types"
import Icon from "../Icon"
import IconList from "../IconList"

const IconListWrapper = args => (
  <li className="mt-5 mb-1">
    <IconList {...args} />
  </li>
)

const RegularList = ({ items }) =>
  items &&
  items.map((item, index) => (
    <li key={index} className="space-x-3">
      {item.icon && (
        <div className="inline-block align-middle">
          <Icon icon={item.icon} size={1.5} />
        </div>
      )}
      <p className="inline-block align-middle">
        {item.title ? item.title : item}
      </p>
    </li>
  ))

const List = ({ heading, type, items }) => {
  return (
    <div className="my-8">
      <h5 className="mb-4 font-medium">{heading}</h5>
      <ul
        className={
          type !== "icons" && items.length && items[0].icon ? "text-left" : ""
        }
      >
        {type === "icons" ? (
          <IconListWrapper items={items} showText={true} />
        ) : (
          <RegularList items={items} />
        )}
      </ul>
    </div>
  )
}

const Column = ({ column }) => {
  return (
    <div className="flex flex-col items-center justify-around p-5 text-center lg:w-4/12">
      <div className="my-5">
        <Icon icon={column.icon} />
      </div>
      <h4 className="my-4 font-semibold tracking-wide">{column.title}</h4>
      <p className="lg:h-12">{column.description}</p>
      {column.lists &&
        column.lists.map((list, index) => <List key={index} {...list} />)}
    </div>
  )
}

Column.propTypes = {
  column: PropTypes.object.isRequired,
}

export default Column
