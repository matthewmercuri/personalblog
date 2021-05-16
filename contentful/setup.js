const contentful = require('contentful')

// change api key and swawp credential variable when done
const credentials = {
  accessToken: 'Sx5P_RcU_PX9X1ff_DykJ0vnfE90rN_O5YdEfvo8iNs',
  space: 'rykbp4limxog'
}
// const credentials = {
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
//   space: process.env.CONTENTFUL_SPACE_ID
// }
const client = contentful.createClient(credentials)

// export default client

export async function fetchEntries () {
  const entries = await client.getEntries()

  if (entries.items) return entries.items
  console.log('Error getting Entries')
}

export default { fetchEntries }
