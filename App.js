import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Modal, TouchableHighlight, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts, Bangers_400Regular } from '@expo-google-fonts/bangers';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  //! console.disableYellowBox = true;

  const [task, setTask] = useState([]);

  const [modal, setModal] = useState(false);
  const [tarefaAtual, setTarefaAtual] = useState('');

  useEffect(() => {
    const loadTasks = async () => {

        try {
          const recuperacaoTasks = await AsyncStorage.getItem('tasks');
          const parsedTasks = JSON.parse(recuperacaoTasks); // Converter a string de volta para um array
          setTask(parsedTasks); // Atribuir o array convertido a 'task'
        } catch (error) {
          console.warn(error);
        }

      
      
    }
  
    loadTasks();
  }, []);
  


  const image = require('./resources/bg.jpg');

  let [fontsLoaded] = useFonts({
    Bangers_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const deletarTarefa = async (id) => {
    const novaListaTarefas = task.filter((tarefa) => tarefa.id !== id);
    setTask(novaListaTarefas);
    alert('Tarefa excluída com sucesso');
  
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(novaListaTarefas));
    } catch (erro) {
      console.log(erro);
    }
  };
  

  
  
  
  const addTask = async () => {
    setModal(!modal);
    alert('Tarefa adicionada com sucesso' + tarefaAtual);
    let id = 0;
    if (task.length > 0) {
      id = task[task.length - 1].id + 1;
    }
  
    let newTask = {
      id: id,
      task: tarefaAtual,
    }
  
    const updatedTasks = [...task, newTask]; // Estado atualizado
  
    setTask(updatedTasks);
  
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (erro) {
      console.log(erro);
    }
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

        <Modal
          /* animationType serve para como a modal aprecerá */
          animationType="slide"
          /* Serve para deixar o fundo da modal trasparent */
          transparent={true}
          /* visible serve para a modal aparecer */
          visible={modal}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput autoFocus={true}
                onChangeText={text => setTarefaAtual(text)}></TextInput>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  addTask()
                }}
              >
                <Text style={styles.textStyle}>Adicionar Tarefa</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

      </ImageBackground>

    {

    task.length === 0 ?
    <View>
      <Text style={styles.p}>
        Nenhuma tarefa foi encontrada
      </Text>
    </View>
    :
    task?.map(function (val) {
      return (
        <View style={styles.tarefaSingle} key={val.id}>
          <View>
            <Text style={{ flex: 1, width: '100%', padding: 10 }}>
              {val.task}
            </Text>
          </View>

          <View style={{ padding: 10, flex: 1, alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={() => deletarTarefa(val.id)}>
              <FontAwesome5 name="trash" size={24} color="red"
                style={styles.Teste} />
            </TouchableOpacity>
          </View>
        </View>
      )
    })
}


      <View style={{ justifyContent: 'center', alignItems: 'center', }}>
        <TouchableOpacity onPress={() => setModal(true)}
          style={styles.btnAddTarefas}>
          <Text style={{ textAlign: 'center', color: 'white', }}>Adicionar tarefa
          </Text>
        </TouchableOpacity>
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

  textHeader: {
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

  tarefaSingle: {
    marginTop: 30,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flexDirection: 'row',
    paddingBottom: 10,
  },

  Teste: {

  },

  btnAddTarefas: {
    width: 200,
    padding: 8,
    backgroundColor: '#1d7ef5',
    marginTop: 20,
    borderRadius: 20,
  },

  p: {
    padding: 10,

  },

  //? Estilo da modal

  //Estilos para nossa modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }

  /* 
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center', 
  },
  */
});
