import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import Header from './src/components/Header'
import Post from './src/components/Post'

function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Header />
			<Post image={require('./assets/imgs/fence.jpg')} />
		</SafeAreaView>
	)
}

export default App