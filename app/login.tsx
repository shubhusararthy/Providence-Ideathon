//Login
import { Image, Button, Text, View, TextInput } from "react-native";
import MyButton from "@/components/MyButton";
import { useRouter } from 'expo-router';



const Login = () => {
    const router= useRouter();
    const onSignUp = () =>
        {
          router.navigate("/signup")
        }
    const onSubmit = () =>
        { 
          router.navigate("/questionnaire")
        }
  return (
    <View 
        style={{
            flex:1,
            backgroundColor:"white",
            alignItems:"center",
        }}>
      <Text style={{fontSize:30, fontWeight: "700", marginTop:100}}>
        LOGIN PAGE
      </Text>
      <Image 
        source={require("@/assets/images/login.jpg")} 
        style={{width: "100%", height: "40%"}}/>
        <View style={{padding: 20}}>
            <TextInput placeholder="Email ID" style={{fontSize:20, marginBottom:20}} />
            <TextInput placeholder="Password" secureTextEntry={true} style={{fontSize:20}} />
        </View>
        <MyButton title={"Submit"} onPress={onSubmit}/>

        <Text style={{marginTop:40}}>Dont have an account?</Text>
      <MyButton title={"SignUp"} onPress={onSignUp}/>
    </View>
  );
};
export default Login;