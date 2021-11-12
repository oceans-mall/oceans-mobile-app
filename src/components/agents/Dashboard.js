import React from 'react'
import { View,StyleSheet, Text } from 'react-native'

export const Dashboard = () => {
    return (
        <View style={styles.container}>
            <Text>This is my dashboard</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})