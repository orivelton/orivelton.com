import { ApolloClient, InMemoryCache } from '@apollo/client';

const Request = new ApolloClient({
  uri: 'https://my-blog-site-api.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

export default Request;
