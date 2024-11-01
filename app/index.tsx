import MyButton from "@/components/MyButton";
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

const Index = () => {
  const router= useRouter();
  const onLogin = () =>
  {
    router.navigate("/login")
  }
  const onSignUp = () =>
  {
    router.navigate("/signup")
  }
  const onQuiz = () =>
  {
    router.navigate("/questionnaire")
  }
  
  return (
    <View 
      style={{
        flex:1, 
        justifyContent:"center", 
        alignItems:"center"}}
    >
      <Text style={{fontSize:20, fontWeight: "700"}}>
        Welcome to
      </Text>
      <Text style={{fontSize:40, fontWeight: "700", color:"green"}}>
        LIFEBYTE
      </Text> 
      <Text style={{marginTop:100}}>
        Have an account?
      </Text>
      <MyButton title={"Login"} onPress={onLogin}/>
      <Text style={{marginTop:20}}>
        Want to join our community?
      </Text>
      <MyButton title={"SignUp"} onPress={onSignUp}/>
      <Text style={{marginTop:20}}>
        Not ready for commitment?
      </Text>
      <MyButton title={"Take the quiz"} onPress={onQuiz}/>

    </View>
  );
};
export default Index;