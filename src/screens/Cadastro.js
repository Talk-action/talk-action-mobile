import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

const CadastroScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repetirSenha, setRepetirSenha] = useState('');


  const handleSignup = () => {
    // Validação simples
    if (!name || !email || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if(password !== repetirSenha){
      alert("As senhas não conferem")
      navigation.navigate("Login")
      
    }else{

      alert('Cadastro realizado com sucesso!');
    }

    // Simulação de cadastro bem-sucedido
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/images/LOGO.png')}/>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Repetir senha"
        value={repetirSenha}
        onChangeText={(text) => setRepetirSenha(text)}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginLink}>
        <Text style={styles.loginText}>Já tem uma conta? Faça login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image:{
    width: 350,
    height: 300
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1E90FF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15, // Borda arredondada
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius:20,
    backgroundColor: 'white',
  },
  button: {
    width: '50%',
    height: 40,
    backgroundColor: '#0C2848',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  loginLink: {
    marginTop: 15,
  },
  loginText: {
    color: '#007bff',
    fontSize: 16,
  },
});

export default CadastroScreen;
