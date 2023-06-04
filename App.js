import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useFonts, Bangers_400Regular } from '@expo-google-fonts/bangers';
import AppLoading from 'expo-app-loading';


export default function App() {
  const image = require('./resources/bg.jpg');

  let [fontsLoaded] = useFonts({
    Bangers_400Regular,
  });

  if (!fontsLoaded) {
     return <AppLoading/>;
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <StatusBar hidden />
      <ImageBackground source={image} style={styles.image}>

        <View style={styles.coverView}>
        <Text style={styles.textHeader}>
            Lista de tarefas    
        </Text>
        </View>

      </ImageBackground>

        <View style={styles.tarefaSingle}>
              <View>
                <Text style={{flex: 1, width: '100%', padding: 10}}>
                  Minha tarefa do dia xxxxxx do mês xxxxx
                </Text>
              </View>

              <View style={{padding: 10, flex: 1, alignItems: 'flex-end'}}>
                <TouchableOpacity>
                <FontAwesome5 name="trash" size={24} color="red" />
                </TouchableOpacity>
              </View>
        </View>

        <View style={styles.tarefaSingle}>
              <View>
                <Text style={{flex: 1, width: '100%', padding: 10}}>
                  Minha tarefa do dia xxxxxx do mês xxxxx
                </Text>
              </View>

              <View style={{padding: 10, flex: 1, alignItems: 'flex-end'}}>
                <TouchableOpacity>
                <FontAwesome5 name="trash" size={24} color="red" />
                </TouchableOpacity>
              </View>
        </View>

        <View style={styles.tarefaSingle}>
              <View>
                <Text style={{flex: 1, width: '100%', padding: 10}}>
                  Minha tarefa do dia xxxxxx do mês xxxxx
                </Text>
              </View>

              <View style={{padding: 10, flex: 1, alignItems: 'flex-end'}}>
                <TouchableOpacity>
                <FontAwesome5 name="trash" size={24} color="red" />
                </TouchableOpacity>
              </View>
        </View>

        <View style={styles.tarefaSingle}>
              <View>
                <Text style={{flex: 1, width: '100%', padding: 10}}>
                  Minha tarefa do dia xxxxxx do mês xxxxx
                </Text>
              </View>

              <View style={{padding: 10, flex: 1, alignItems: 'flex-end'}}>
                <TouchableOpacity>
                <FontAwesome5 name="trash" size={24} color="red" />
                </TouchableOpacity>
              </View>
        </View>

        <View style={styles.tarefaSingle}>
              <View>
                <Text style={{flex: 1, width: '100%', padding: 10}}>
                  Minha tarefa do dia xxxxxx do mês xxxxx
                </Text>
              </View>

              <View style={{padding: 10, flex: 1, alignItems: 'flex-end'}}>
                <TouchableOpacity>
                <FontAwesome5 name="trash" size={24} color="red" />
                </TouchableOpacity>
              </View>
        </View>

        <View style={styles.tarefaSingle}>
              <View>
                <Text style={{flex: 1, width: '100%', padding: 10}}>
                  Minha tarefa do dia xxxxxx do mês xxxxx
                </Text>
              </View>

              <View style={{padding: 10, flex: 1, alignItems: 'flex-end'}}>
                <TouchableOpacity>
                <FontAwesome5 name="trash" size={24} color="red" />
                </TouchableOpacity>
              </View>
        </View>

        <View style={styles.tarefaSingle}>
              <View>
                <Text style={{flex: 1, width: '100%', padding: 10}}>
                  Minha tarefa do dia xxxxxx do mês xxxxx
                </Text>
              </View>

              <View style={{padding: 10, flex: 1, alignItems: 'flex-end'}}>
                <TouchableOpacity>
                <FontAwesome5 name="trash" size={24} color="red" />
                </TouchableOpacity>
              </View>
        </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 80,
    resizeMode: 'cover',
 
  },

  coverView: {
    width: '100%',
    height: 80,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  textHeader:{
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    marginTop: 20,
    borderBottomWidth: 2,       
    borderBottomColor: 'white',  
    borderBottomStyle: 'solid', 
    marginHorizontal: 90,
    fontFamily: 'Bangers_400Regular',
  }, 

  tarefaSingle:{
    marginTop: 30,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flexDirection: 'row',
    paddingBottom: 10,  
  },

  /* 
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center', 
  },
  */
});
