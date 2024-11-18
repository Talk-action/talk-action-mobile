import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import CustomHeader from '../Home/Header';
import letrasComImagens from '../../data/letras';  // Importando seu data com as letras e links de imagens

const Alfabeto = ({ navigation }) => {
  // Estado para armazenar a imagem da letra selecionada
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  // Função para exibir a imagem da letra selecionada
  const handleLetterClick = (letra) => {
    const letraEncontrada = letrasComImagens.find(item => item.letra === letra); // Busca a letra no array
    console.log(letraEncontrada)
    if (letraEncontrada) {
      setImagemSelecionada(letraEncontrada.link); // Atualiza o estado com o link da imagem
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader /> {/* Usando o header personalizado */}

      <FlatList
        style={styles.list}
        data={letrasComImagens} // Passando os dados para o FlatList
        keyExtractor={(item) => item.id.toString()} // Garantir uma chave única para cada item
        contentContainerStyle={styles.listContainer} // Aplicando estilos ao contêiner interno
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => handleLetterClick(item.letra)} // Chama a função ao clicar
          >
            <Text style={styles.itemText}>{item.letra}</Text>
          </TouchableOpacity>
        )}
      />

      {imagemSelecionada && ( // Se houver uma imagem selecionada, exibe-a
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: imagemSelecionada }} // A imagem será carregada via URI
            style={styles.image}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E90FF',
    padding: 20,
  },
  list: {
    flex: 1,
  },
  listContainer: {
    alignItems: 'center', // Alinha os itens ao centro
  },
  itemContainer: {
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#87CEEB',
    borderRadius: 5,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 20,
    color: '#fff',
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default Alfabeto;
