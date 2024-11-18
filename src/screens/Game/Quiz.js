import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
import data from '../../data/letras'
const Quiz = ({ navigation }) => {
  const [palavra , setPalavra] = useState([])
  const [indice , setIndice] = useState(0)
  const separarPalavra = (dica ,letter) => {
    alert(`A palavra é um/uma ${dica}` )
    navigation.navigate("Palavra" , {letter})
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => separarPalavra( "Fruta","Banana")}>
          <Text style={styles.text}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => separarPalavra( "Objeto","Mesa")}>
          <Text style={styles.text}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => separarPalavra( "Profissão","Diretor")}>
          <Text style={styles.text}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => separarPalavra( "Pais","Italia")}>
          <Text style={styles.text}>4</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'column', // Distribui os botões horizontalmente
    justifyContent: 'center', // Espaçamento uniforme entre os botões
    width: '100%', // Faz o contêiner dos botões ocupar toda a largura disponível
    paddingHorizontal: 20,
  },
  button: {
    width: '100%', // Ajusta o tamanho relativo de cada botão
    height: 50,
    backgroundColor: '#87CEFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Quiz;
