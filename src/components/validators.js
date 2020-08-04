const emailRe = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

function isRequired(value) {
  if (!value || value.length === 0) return "Field is required"
  return false
}

function validateEmail(value) {
  if (value && emailRe.test(value)) return false
  return "Please enter a valid email address"
}

function allOf(...validators) {
  return (value) => {
    for (const fn of validators) {
      const res = fn(value)
      if (res) return res
    }
    return false
  };
}

export { isRequired, validateEmail, allOf }
