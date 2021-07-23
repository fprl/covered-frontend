function numberWithSpaces(str) {
  let charsLength = str.length
  let number = []

  for (var i = 0; i < charsLength; i += 3) {
    number.push(str.substring(i, i + 3))
  }

  return number
}

function getFormattedPhoneNumber(str) {
  if (!str) {
    return
  }

  const countryCode = str.slice(0, 2)
  const number = str.slice(2)
  const formattedNumber = numberWithSpaces(number).join(' ')

  const phoneNumber = `(${countryCode}) ${formattedNumber}`

  return phoneNumber
}

export default getFormattedPhoneNumber
