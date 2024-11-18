import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = () => {
  const navigation = useNavigation(); // Para navegar entre as telas

  const handleHomePress = () => {
    navigation.navigate('Home'); // Navegar para a tela Home
  };

  const handleProgressPress = () => {
    navigation.navigate('Progress'); // Navegar para a tela Progresso
  };

  return (
    <View style={styles.headerContainer}>
      {/* Imagem do lado esquerdo */}
      <Image 
        source={require('../../../assets/images/LOGO.png')} // Altere para o caminho da sua imagem
        style={styles.headerImage} 
      />

      {/* Botões do lado direito */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleHomePress} style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleProgressPress} style={styles.button}>
          <Text style={styles.buttonText}>Progresso</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row', // Coloca os itens em linha
    justifyContent: 'space-between', // Espaça a imagem e os botões
    alignItems: 'center', // Alinha verticalmente
    padding: 10,
    backgroundColor: '#1E90FF',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    // borderBottomColor: '#ccc',
    borderColor: 'white'
    
  },
  headerImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain', // Ajusta a imagem sem distorcer
  },
  buttonsContainer: {
    flexDirection: 'row', // Coloca os botões em linha
  },
  button: {
    marginLeft: 20, // Espaço entre os botões
  },
  buttonText: {
    fontSize: 15,
    color: 'white', // Cor azul para os botões
  },
});

export default CustomHeader;
