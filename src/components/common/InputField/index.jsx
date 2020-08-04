import React from "react"
import { splitFormProps, useField } from "react-form"

const InputField = React.forwardRef((props, ref) => {
  const [field, fieldOptions, { fieldName, ...rest }] = splitFormProps(props)

  const {
    meta: { error, isTouched },
    getInputProps
  } = useField(field, fieldOptions)

  return (
    <>
      <div className="w-full">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor={field}
        >
          {fieldName}
        </label>
        <input {...getInputProps({ ref, ...rest })}
               className={
                 "appearance-none block w-full text-gray-700 border rounded py-3 px-4 leading-tight shadow-none focus:outline-none focus:bg-white " +
                 (isTouched && error ? "border-red-500" : "border-gray-200 focus:border-gray-500")
               }
               id={field}/>
        {isTouched && error ? (
          <em className="text-xs text-red-500">{error}</em>
        ) : null}
      </div>
    </>
  )
});

export default InputField;
