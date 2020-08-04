import React from "react"
import { splitFormProps, useField } from "react-form"

const SelectField = React.forwardRef((props, ref) => {
  const [field, fieldOptions, { options, fieldName, ...rest }] = splitFormProps(props)

  const {
    value = "",
    setValue,
    meta: { error, isTouched }
  } = useField(field, fieldOptions)

  const handleSelectChange = event => {
    setValue(event.target.value)
  }

  return (
    <>
      <div className="w-full">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
               htmlFor={field}>
          {fieldName}
        </label>
        <div className="relative">
          <select {...rest} id={field} value={value} onChange={handleSelectChange}
                  className={
                    "appearance-none block w-full text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white " +
                    (isTouched && error ? "border-red-500" : "border-gray-200 focus:border-gray-500")
                  }>
            <option disabled value=""/>
            {options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
          {isTouched && error ? (
            <em className="text-xs text-red-500">{error}</em>
          ) : null}
        </div>
      </div>
    </>
  )
});

export default SelectField;
