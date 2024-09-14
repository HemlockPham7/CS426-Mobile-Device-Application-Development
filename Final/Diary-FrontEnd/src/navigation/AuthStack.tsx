import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthenticateScreen from "../screens/Login+Signup/AuthenticateScreen";
import ChooseNameScreen from "../screens/Login+Signup/ChooseNameScreen";

const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{
          headerBackTitle: "Back",
          headerTintColor: "black",
          headerTitleStyle: {
              fontFamily: "Poppins-Regular",
              fontSize: 18,
            },
          contentStyle: { backgroundColor: "white" },
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignIn" component={AuthenticateScreen} />
        <Stack.Screen name="ChooseName" component={ChooseNameScreen} />
      </Stack.Navigator>
    );
  }
  
  export default AuthStack;