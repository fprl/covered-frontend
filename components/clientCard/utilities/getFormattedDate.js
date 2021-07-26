function getFormattedDate(date) {
  const dateOptions = { day: '2-digit', month: 'short', year: 'numeric' }

  const formattedDate = new Date(date * 1000).toLocaleString('en-US', dateOptions)

  return formattedDate
}

export default getFormattedDate
