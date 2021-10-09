const onContentIndexClick = (value) => {
  const element = document.getElementById(value)
  element.scrollIntoView({ behavior: "smooth" })
}

export default onContentIndexClick
