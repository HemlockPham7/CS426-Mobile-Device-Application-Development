import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import HomeScreen from "../screens/HomeStack/HomeScreen";
import SettingScreen from "../screens/SettingStack/SettingScreen";
import AnalysisScreen from "../screens/AnalysisStack/AnalysisScreen";
import CreateDiaryScreen from "../screens/CreateStack/CreateDiaryScreen";
import SearchScreen from "../screens/HomeStack/SearchScreen";
import ChangeColorScreen from "../screens/SettingStack/ChangeColorScreen";
import ProfileScreen from "../screens/SettingStack/ProfileScreen";
import DeleteAccountScreen from "../screens/SettingStack/DeleteAccountScreen";
import CalendarScreen from "../screens/HomeStack/CalendarScreen";
import DiaryScreen from "../screens/HomeStack/DiaryScreen";
import ViewImagesScreen from "../screens/HomeStack/ViewImagesScreen";
import EditDiaryScreen from "../screens/HomeStack/EditDiaryScreen";
import ContributionGraphScreen from "../screens/AnalysisStack/ContributionGraphScreen";
import MapCreateScreen from "../screens/CreateStack/MapCreateScreen";
import MapEditScreen from "../screens/HomeStack/MapEditScreen";
import ResultSearchScreen from "../screens/HomeStack/ResultSearchScreen";
import SharedDiariesScreen from "../screens/HomeStack/SharedDiariesScreen";
import DetailedShareDiaryScreen from "../screens/HomeStack/DetailedShareDiaryScreen";
import ScanScreen from "../screens/FunctionsStack/ScanScreen";
import ListFunctionsScreen from "../screens/FunctionsStack/ListFunctionsScreen";
import MusicScreen from "../screens/HomeStack/MusicScreen";

import Icon from "../components/global/Icon";
import { nameScreen } from "../constants/globalVariables";
import { ColorStorage } from "../constants/styles";
import { useAppSelector } from "../redux store/hook";
import ReminderScreen from "../screens/SettingStack/ReminderScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeAlone() {
  const id = useAppSelector((state) => state.setting.idColor);
  const colors = ColorStorage.get(id)!;

  return (
    <Stack.Navigator
      screenOptions={{
        headerLargeTitle: false,
        headerLargeTitleStyle: {
          fontFamily: "Poppins-Bold",
        },
        headerStyle: {
          backgroundColor: colors.backgroundColor,
        },
        headerShadowVisible: false,
        contentStyle: { backgroundColor: colors.backgroundColor },
      }}
    >
      <Stack.Screen
        name={nameScreen.home}
        component={HomeScreen}
        options={{}}
      />
    </Stack.Navigator>
  );
}

function HomeTab() {
  const id = useAppSelector((state) => state.setting.idColor);
  const colors = ColorStorage.get(id)!;

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.backgroundColor,
        },
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: colors.backgroundColor,
          height: 90,
          paddingTop: 10,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary500,
        tabBarInactiveTintColor: colors.primary200,
      }}
    >
      <Tab.Screen
        name="HomeAlone"
        component={HomeAlone}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Icon
                size={32}
                color={color}
                source={require("../../assets/icons/Home.png")}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="FunctionsStack"
        component={FunctionsStack}
        options={{
          title: "My Diary",
          tabBarIcon: ({ color, size }) => {
            return (
              <Icon
                size={32}
                color={color}
                source={require("../../assets/icons/Folder.png")}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="CreateStack"
        component={CreateDiaryStack}
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => {
            // return <Entypo name="plus" size={40} color={color} />;
            return (
              <Icon
                size={32}
                color={color}
                source={require("../../assets/icons/plus.png")}
                // style={{marginTop: -10}}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name={"AnalysisStack"}
        component={AnalysisStack}
        options={{
          title: "Analysis",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="stats-chart-sharp" size={30} color={color} />
            );
          },
        }}
      />

      <Tab.Screen
        name="SettingStack"
        component={SettingStack}
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => {
            return (
              <Icon
                size={32}
                color={color}
                source={require("../../assets/icons/Setting.png")}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function SettingStack() {
  const id = useAppSelector((state) => state.setting.idColor);
  const colors = ColorStorage.get(id)!;

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "black",
        headerBackTitle: "Back",
        headerShadowVisible: false,
        headerTitleStyle: {
          fontFamily: "Poppins-Regular",
          fontSize: 18,
        },
        headerStyle: {
          backgroundColor: colors.backgroundColor,
        },
        headerShown: true,
        contentStyle: { backgroundColor: colors.backgroundColor },
      }}
    >
      <Stack.Screen
        name={nameScreen.setting}
        component={SettingScreen}
        options={{
          title: "Settings",
        }}
      />
      <Stack.Screen
        name={nameScreen.changeColor}
        component={ChangeColorScreen}
        options={{
          title: "Change colors",
        }}
      />
      <Stack.Screen
        name={nameScreen.profile}
        component={ProfileScreen}
        options={{
          title: "Profile",
        }}
      />
      <Stack.Screen
        name={nameScreen.deleteAccount}
        component={DeleteAccountScreen}
        options={{
          title: "Delete Account",
        }}
      />
      <Stack.Screen
        name={nameScreen.reminderScreen}
        component={ReminderScreen}
        options={{
          title: "Daily Reminder",
        }}
      />
    </Stack.Navigator>
  );
}

function CreateDiaryStack() {
  const id = useAppSelector((state) => state.setting.idColor);
  const colors = ColorStorage.get(id)!;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTintColor: "black",
        title: "",
        headerBackTitle: "Back",
        headerStyle: {
          backgroundColor: colors.backgroundColor,
        },
        headerTitleStyle: {
          fontFamily: "Poppins-Regular",
          fontSize: 18,
        },
        contentStyle: {
          backgroundColor: colors.backgroundColor,
        },
      }}
    >
      <Stack.Screen
        name={nameScreen.createDiary}
        component={CreateDiaryScreen}
      />
      <Stack.Screen
        name={nameScreen.mapCreateScreen}
        component={MapCreateScreen}
        options={{
          title: "Your Placces",
        }}
      />
    </Stack.Navigator>
  );
}

function AnalysisStack() {
  const id = useAppSelector((state) => state.setting.idColor);
  const colors = ColorStorage.get(id)!;

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "black",
        headerBackTitle: "Back",
        headerShadowVisible: false,
        headerTitleStyle: {
          fontFamily: "Poppins-Regular",
          fontSize: 18,
        },
        headerStyle: {
          backgroundColor: colors.backgroundColor,
        },
        headerShown: false,
        contentStyle: { backgroundColor: colors.backgroundColor },
      }}
    >
      <Stack.Screen
        name={nameScreen.analysis}
        component={AnalysisScreen}
        options={{
          title: "Analysis",
        }}
      />
      <Stack.Screen
        name={nameScreen.contributionGraph}
        component={ContributionGraphScreen}
        options={{
          title: "Contribution",
        }}
      />
    </Stack.Navigator>
  );
}

function FunctionsStack() {
  const id = useAppSelector((state) => state.setting.idColor);
  const colors = ColorStorage.get(id)!;

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "black",
        headerBackTitle: "Back",
        headerShadowVisible: false,
        headerTitleStyle: {
          fontFamily: "Poppins-Regular",
          fontSize: 18,
        },
        headerStyle: {
          backgroundColor: colors.backgroundColor,
        },
        headerShown: true,
        contentStyle: { backgroundColor: colors.backgroundColor },
      }}
    >
      <Stack.Screen
        name={nameScreen.functions}
        component={ListFunctionsScreen}
        options={{}}
      />
      <Stack.Screen
        name={nameScreen.scanScreen}
        component={ScanScreen}
        options={{}}
      />
    </Stack.Navigator>
  );
}

function HomeStack() {
  const id = useAppSelector((state) => state.setting.idColor);
  const colors = ColorStorage.get(id)!;

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "black",
        headerStyle: {
          backgroundColor: colors.backgroundColor,
        },
        headerBackTitle: "Back",
        headerTitleStyle: {
          fontFamily: "Poppins-Regular",
          fontSize: 18,
        },
        headerShadowVisible: false,
        headerShown: true,
        contentStyle: { backgroundColor: colors.backgroundColor },
      }}
    >
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={nameScreen.search}
        component={SearchScreen}
        options={{
          title: "Search",
        }}
      />
      <Stack.Screen
        name={nameScreen.resultSearchScreen}
        component={ResultSearchScreen}
        options={{
          title: "Search Results",
        }}
      />
      <Stack.Screen
        name={nameScreen.calendar}
        component={CalendarScreen}
        options={{
          headerLargeTitle: true,
          headerLargeTitleStyle: {
            fontFamily: "Poppins-Bold",
          },
          title: "Your Diaries",
        }}
      />
      <Stack.Screen
        name={nameScreen.sharedDiary}
        component={SharedDiariesScreen}
        options={{
          title: "Share",
          headerShown: true,
        }}
      />

      <Stack.Screen
        name={nameScreen.detailedShareDiary}
        component={DetailedShareDiaryScreen}
        options={{
          title: "Shared Diary",
          headerShown: true,
        }}
      />

      <Stack.Screen
        name={nameScreen.viewImaages}
        component={ViewImagesScreen}
        options={{
          title: "Memory Images",
        }}
      />
      <Stack.Screen
        name={nameScreen.musicScreen}
        component={MusicScreen}
        options={{
          title: "Background Music",
        }}
      />

      <Stack.Screen
        name={nameScreen.diary}
        component={DiaryScreen}
        options={{
          title: "Diary",
        }}
      />
      <Stack.Screen
        name={nameScreen.edit}
        component={EditDiaryScreen}
        options={{
          title: "Edit",
        }}
      />
      <Stack.Screen
        name={nameScreen.mapEditScreen}
        component={MapEditScreen}
        options={{
          title: "Edit your places",
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
