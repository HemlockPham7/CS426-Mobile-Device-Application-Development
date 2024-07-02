import { View, Text, Button } from "react-native";

function Screen({navigation}:any) {

  function pressHandler(){
    navigation.navigate("Screen1");
  }


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Navigate to screen1" onPress={pressHandler}/>
    </View>
  );
}

export default Screen;