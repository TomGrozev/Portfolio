import React, { useState } from "react"
import Layout from "../components/layout/Layout"
import { useForm } from "react-form"
import Loading from "../components/common/Loading"
import InputField from "../components/common/InputField"
import SelectField from "../components/common/SelectField"
import TextArea from "../components/common/TextArea"
import { allOf, isRequired, validateEmail } from "../components/validators"
import config from "../data/config"
import SEO from "../components/common/SEO"

const StartAProject = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const { Form, meta: { isSubmitting, canSubmit } } = useForm({
    onSubmit: async (values, instance) => {
      try {
        const response = await fetch(`${config.form.url}`, {
          method: 'POST',
          body: JSON.stringify(values)
        });

        setSubmitted(response.status === 200 && response.ok === true);
        setSubmitError(!submitted);
      } catch (e) {
        setSubmitError(false);
      }
    }
  })

  return (
    <Layout>
      <SEO title="Start a Project" />
      <div className="container relative my-16 px-16">
        <h2 className="text-4xl tracking-tighter font-light text-center leading-normal">
          {config.form.title}
        </h2>

        <Form className="w-11/12 md:w-8/12 mx-auto mt-10">
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <InputField
                field="name"
                fieldName="Name"
                type="text"
                placeholder="John"
                validate={isRequired}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <InputField
                field="email"
                fieldName="Email"
                type="email"
                placeholder="johndoe@gmail.com"
                validate={allOf(isRequired, validateEmail)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <SelectField
                field="type"
                fieldName="Project Type"
                options={["Web App", "REST/GraphQL API", "Mobile App", "Multilevel platform"]}
                validate={isRequired}/>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <SelectField
                field="budget"
                fieldName="Approximate Budget"
                options={["Less than $5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000+"]}
                validate={isRequired}/>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <TextArea
                field="description"
                fieldName="Brief Project Description"
                validate={isRequired}
              />
            </div>
          </div>
          <div className="flex justify-center my-6">
            <button className="button-darker" type="submit" disabled={!canSubmit}>
              {
                isSubmitting ? (
                  <Loading size={40} />
                ) :
                  "Submit"
              }
            </button>
          </div>
        </Form>

        {(submitted && !submitError) && <p className="text-center">Thank you. I have received your post</p>}
        {submitError && <p className="text-center text-red-500">There was an error, please contact me directly at <a href="mailto:enquire@tomgrozev.com" className="text-gray-800">enquire@tomgrozev.com</a></p>}
      </div>
    </Layout>
  )
}

export default StartAProject
