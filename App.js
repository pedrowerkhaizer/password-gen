import {View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';
import Slider from '@react-native-community/slider';
import { ModalPassword } from './components/modal';

export default function App() {
  const [ size, setSize ] = useState(12);
  const [ passwordValue, setPasswordValue ] = useState("");
  const [ modalVisible, setModalVisible ] = useState(false);

  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%&()-_=.;[]";

  function generatePassword() {
    let password = "";
    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    setPasswordValue(password);
    setModalVisible(true);
  }

  return(
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
      <Slider
      style={{ height:50 }}
      minimumValue={8}
      maximumValue={20}
      maximumTrackTintColor='#f1f1f1'
      minimumTrackTintColor='#63ED57'
      thumbTintColor='#392de9'
      value={size}
      onValueChange={(value) => { setSize(value.toFixed(0))}}
      />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false)} getAnotherPassword={ () => generatePassword()} />
      </Modal>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginBottom: 60
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8
  },
  button: {
    backgroundColor: '#392de9',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 24
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 6
  }
})