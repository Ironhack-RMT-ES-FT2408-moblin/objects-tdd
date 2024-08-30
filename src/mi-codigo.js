function convertirCentsToEuros(cents) {

  if (cents === undefined) {
    return 0
  }

  if (typeof cents !== "number") {
    return undefined
  }

  let euros = cents / 100
  return euros

}