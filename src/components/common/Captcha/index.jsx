import React from "react"
import config from "../../../data/config"
import { Recaptcha } from "react-recaptcha"

const verifyCallback = function(response) {
  console.log(response)
}

let recaptchaInstance;

const Captcha = (executeRecaptcha) => {
  if (executeRecaptcha) {
    recaptchaInstance.execute();
  }

  return (
    <Recaptcha
      ref={e => recaptchaInstance = e}
      sitekey={config.captcha.siteKey}
      render="explicit"
      verifyCallback={verifyCallback}
      size="invisible"
    />
  )
}

export default Captcha
