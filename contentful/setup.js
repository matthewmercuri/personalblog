const contentful = require('contentful')
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'rykbp4limxog',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: 'Sx5P_RcU_PX9X1ff_DykJ0vnfE90rN_O5YdEfvo8iNs'
})

export default client
