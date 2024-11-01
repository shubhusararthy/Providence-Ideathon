//Button
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const MyButton = ({title, onPress}:{title: string, onPress: () => void}) => {
  return (
    <View>
        <TouchableOpacity activeOpacity={0.5} 
            style={styles.button}
            onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default MyButton

const styles = StyleSheet.create({
    button:{
        backgroundColor:"lightblue", 
        padding:30, 
        paddingVertical:10, 
        borderRadius:17,
        marginVertical: 10
    }, 
    text:{
        fontFamily:"serif", 
        fontStyle:"italic",
        textAlign:"center"
    }
});

