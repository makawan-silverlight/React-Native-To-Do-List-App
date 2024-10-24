import { StyleSheet, Text, View, Image } from 'react-native';
import { useEffect } from 'react';
import FormToDo from './src/components/FormToDo';
import { Provider } from './src/context/AppContext';
import ToDoList from './src/components/ToDoList';
import { StatusBar } from 'expo-status-bar';


import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();

export default function App() {


  const [loaded, error] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    'Poppins': Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Provider>
      <View style={styles.root}>
        <View style={styles.container}>
          <View style={styles.main}>
            <Text style={styles.header}>TO DO LIST APP</Text>
            <View style={{ paddingHorizontal: 15 }}>
              <FormToDo />
            </View>
            <ToDoList />
          </View>
          <StatusBar style="light" />
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  root:{
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#3A7CF9',
  },
  container: {
    flex: 1,
    backgroundColor: '#3A7CF9',
    alignItems: 'center',
    paddingTop: 60,
    maxWidth:1024
  },
  main: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
    color: '#ffffff',
    fontFamily: 'Poppins_800ExtraBold',
    textAlign: 'center',
    paddingBottom: 10
  }
});
