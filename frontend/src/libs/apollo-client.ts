import { ApolloClient, InMemoryCache } from '@apollo/client'
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'

import { SERVER_URL } from './constants/url.constants'

const uploadLink = createUploadLink({
  uri: SERVER_URL,
  credentials: 'include',
})

export const client = new ApolloClient({
  link: uploadLink,
  cache: new InMemoryCache(),
})
