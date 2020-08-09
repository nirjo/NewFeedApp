import { ApolloClient} from 'apollo-Client'
import { InMemoryCache} from 'apollo-Cache-inmemory'
import { RestLink} from 'apollo-link-rest'

// start by adding a link from the constructor RestLink and pass the API key as field inside headers object

const restLink = new RestLink({
    uri:'http://newsapi.org/v2/',
    header: {
        Authorization: '47e036d83ccc4058b1f85362bc2be1f4'
    }
})

// add the below configuration with the default cache and RestLink to complete the configuration of Apollo Client.

export const client = new ApolloClient({
    link: restLink,
    cache: new InMemoryCache()
  })