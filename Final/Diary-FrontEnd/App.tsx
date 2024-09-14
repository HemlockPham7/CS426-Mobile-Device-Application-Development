import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MenuProvider } from "react-native-popup-menu";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-core";

import Navigation from "./src/navigation/Navigation";
import { store } from "./src/redux store/store";

import { AudioProvider } from "./src/components/global/AudioProvider";

const queryClient = new QueryClient();

const searchClient = algoliasearch(
  "51LT7H7B48",
  "2accc3eb8d7152201e6ebfe82767000d"
);

export default function App() {
  return (
    <AudioProvider>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={styles.container}>
          <StatusBar style="dark" />
          <Provider store={store}>
            <MenuProvider>
              <InstantSearch searchClient={searchClient} indexName="thesis">
                <Navigation />
              </InstantSearch>
            </MenuProvider>
          </Provider>
        </GestureHandlerRootView>
      </QueryClientProvider>
    </AudioProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
