import slugify from 'slugify'

export default text =>
  slugify(text, {
    remove: /[*+~.()'"!:@—]/g, // regex to remove characters
    lower: true, // result in lower case
  })
