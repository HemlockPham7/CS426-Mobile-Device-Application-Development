import { View, Text, Button } from "react-native";

function Screen1({navigation}:any) {
  function pressHandler(){
    navigation.navigate("Screen2");
  }


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Screen 1</Text>
      <Button title="Navigate to screen2" onPress={pressHandler}/>
    </View>
  );
}

export default Screen1;