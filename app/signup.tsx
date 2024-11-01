//SignUp
import { Image, TextInput, Button, View, Text } from 'react-native'
import React from 'react'
import MyButton from '@/components/MyButton'
import { useRouter } from 'expo-router';

const SignUp = () => {
    const router= useRouter();
    const onSubmit = () =>
        { 
          router.navigate("/questionnaire")
        }
  return (
    <View
        style={{
            flex:1,
            alignItems:"center",
            backgroundColor: "white"
    }}>
      <Text style={{fontSize:30, fontWeight: "700", marginTop:100}}>
        SIGNUP PAGE
      </Text>
      <Image 
        source={require("@/assets/images/signup.jpg")} 
        style={{width: "100%", height: "50%"}}/>
        <View style={{padding: 20}}>
            <TextInput placeholder="Email ID" style={{fontSize:20, marginBottom:20}} />
            <TextInput placeholder="Password" secureTextEntry={true} style={{fontSize:20, marginBottom:20}} />
        </View>
        <MyButton title={"Submit"} onPress={onSubmit}/>
    </View>
  )
}

export default SignUp