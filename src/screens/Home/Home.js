// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomHeader from './Header'; // Importando o CustomHeader

const HomeScreen = ({navigation}) => {

    const handleNavigate = (classe) => {
        navigation.navigate(classe); // Navegar para a tela Home
      };
  return (
    <View style={styles.container}>
      <CustomHeader /> {/* Usando o header personalizado */}
      

    <View style={styles.containerButton}>
    <TouchableOpacity style={styles.button} onPress={() => handleNavigate("Quiz")}>
      <Text>Quiz</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={() => handleNavigate("Alfabeto")}>
        <Text>Alfabeto</Text>
    </TouchableOpacity>

    </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E90FF',
    padding: 20,
  },
  containerButton:{
    marginTop: '20%',
    flexDirection: 'column', // Coloca os itens em linha
    justifyContent: 'space-between', // Espaça a imagem e os botões
    alignItems: 'center', // Alinha verticalmente
  },

  button: {
    width: '60%',
    height: 80,
    backgroundColor: '#87CEFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 60,
  },
});

export default HomeScreen;
