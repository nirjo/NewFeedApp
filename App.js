import React ,{ useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { client } from './src/graphql/Client'
import { Headlines } from './src/graphql/Queries'


const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>News App</Text>
  </View>
)
// Using the query Headlines the result should be fetched from the API whenever the component mounts as well as on the initial render of the app.
// This can be done by using the React Hook useEffect.
function App() {
  useEffect(() => {
    requestHeadlines()
  }, [])

  //Create a handler method requestHeadlines to invoke the query using Apollo Client. Invoking the query is simply done adding a promise.

const requestHeadlines = () => {
  client 
    .query({
      query: Headlines
    })
    .then(response => {
      console.log('RESPONSE ===>', response)
    })
.catch(error => {
  console.log('ERROR ==>', error)
})
}

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C977CC'
  },
  header: {
    marginTop: 50,
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  headerText: {
    marginBottom: 5,
    fontSize: 30,
    fontWeight: 'bold'
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20
  }
})

export default App