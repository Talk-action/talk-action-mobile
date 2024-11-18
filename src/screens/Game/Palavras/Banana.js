import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import data from "../../../data/letras";

const Banana = ({ route , navigation }) => {
  const palavra = route.params.letter; // Extrai o parâmetro "palavra" enviado pela navegação
  const [novaPalavra, setNovaPalavra] = useState([]);
  const [indice, setIndice] = useState(0); // Inicialize com 0
  const [link, setLink] = useState('');
  const [letraDigitada , setLetraDigitada] = useState('')



  useEffect(() => {
    const nova = palavra.split(""); // Divide a palavra em caracteres
    setNovaPalavra(nova); // Atualiza o estado com a nova palavra como um array
  }, [palavra]);

  useEffect(() => {
    if (novaPalavra.length > 0 && indice < novaPalavra.length) {
      const letra = novaPalavra[indice];
      const letraEncontrada = data.find(item => item.letra === letra.toUpperCase()); // Busca o objeto com a letra correspondente
      if (letraEncontrada) {
        setLink(letraEncontrada); // Atualiza o estado com o link da imagem
      }
    }
  }, [indice, novaPalavra]); // Este efeito é disparado quando o índice ou a palavra mudam

  const aumentaIndice = () => {
    console.log(link.letra)
    if(letraDigitada.toUpperCase() == link.letra){
        alert("Letra Correta")
        setLetraDigitada('')
        if (indice < novaPalavra.length - 1) {
            setIndice(indice + 1); // Incrementa o índice até o tamanho máximo do array
        }else{
            alert(`Parabens ao chegar no fim. A palavra é ${palavra}`)
            navigation.navigate("Quiz")
        }

    }else{
        alert('Tente Novamente')
    }
    
  };

  return (
    <View style={styles.container}>
      {link ? (
        <Image
          source={{ uri: link.link }} // Carrega a imagem usando o link do estado
          style={{ width: 300, height: 300 }} // Define o tamanho da imagem
        />
      ) : (
        <Text>Carregando imagem...</Text> // Mensagem exibida até o link estar disponível
      )}
      <TextInput 
        placeholder="Digite a letra Correta"
        value={letraDigitada}
        onChangeText={(text) => setLetraDigitada(text)}
        autoFocus={true} 
        style={styles.input}
      >

      </TextInput>
        <TouchableOpacity onPress={() => aumentaIndice()} style={styles.button}>
            <Text style={styles.buttonText}>Validar</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#1E90FF',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    padding: 10,
    marginTop : 20,
    backgroundColor : "white",
  },

  button:{
    padding : 10,
    marginTop: 20,
    width: 200,
    alignItems: 'center',
    borderRadius : 10,
    backgroundColor: '#0C2848',
  },
  buttonText : {
    color : 'white'
  }
});

export default Banana;
