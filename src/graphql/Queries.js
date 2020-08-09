import gql from 'graphql-tag'

//Export a new query called Headlines

export const Headlines = gql`
  query TopHeadlines {
    headlines
      @rest(
        type: "HeadlinesPayload"
        path: "top-headlines?country=us&category=technology"
      ) {
      totalResults
      articles @type(name: "ArticlePayload") {
        title
        publishedAt
        url
        urlToImage
        source @type(name: "SourcePayload") {
          name
        }
      }
    }
  }
`