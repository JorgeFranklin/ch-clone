const capitalizeFirstLetter = (string: string) => {
  const firstLetterCapitalized = string.charAt(0).toUpperCase()
  const rest = string.slice(1)

  return firstLetterCapitalized + rest
}

export default capitalizeFirstLetter
