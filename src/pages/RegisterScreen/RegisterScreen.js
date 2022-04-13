import React, { useContext, useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Linking, TextInput } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { useNavigation } from '@react-navigation/native';

import AuthContext from '../../context/AuthContext';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const val = useContext(AuthContext);

  const { navigate } = useNavigation();

  function sendWhatsapp() {
    Linking.openURL('whatsapp://send?phone=556292347087');
  }


  return (
    <View style={styles.container}>

      <View
        style={styles.header}
      >

        <Image source={{
          uri:
            'https://expansaocompany.com/wp-content/uploads/2022/03/Ativo-4.png'
        }}
          style={styles.logo}
        />
      </View>

      <View
        style={{
          backgroundColor: '#F2F2F2',
          height: '50%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View
          style={{
            backgroundColor: '#FFF',
            height: '50%',
            width: '98%',
            // flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >

          <Text style={styles.text1}>Cadastrar</Text>
          <Text style={styles.text1}>{val}</Text>

          <View
            style={{
              height: '50%',
              width: '98%',
              // flex: 1,
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexDirection: 'column',
              marginTop: 20
            }}
          >

            <Text style={styles.text5}>Nome Fantasia</Text>

            <TextInput
              style={styles.input}
              placeholder="Nome fantasia"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <TouchableOpacity
              style={styles.login}>
              <Text style={styles.textLogin}>Registrar</Text>
            </TouchableOpacity>

          </View>


        </View>

        <View style={{
          width: '99%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>


        </View>
      </View>

      <Text style={styles.text3}>Desenhado e Desenvolvido por Expansão Company</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    backgroundColor: '#ec5e1c',
    width: '100%',
    height: 100,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  logo: {
    width: '100%',
    height: '40%',
    resizeMode: 'contain',
  },
  image: {
    width: '100%',
    height: '50%',
  },
  text1: {
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#000',
  },
  text2: {
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#FFF'
  },
  text3: {
    fontSize: 18,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    color: '#6E6E6E',
    paddingLeft: 10
  },
  text4: {
    fontSize: 25,
    fontStyle: 'italic',
    // fontWeight: 'bold',
    color: '#000'
  },
  text5: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  textWhat: {
    fontSize: 18,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    color: '#6E6E6E',
    paddingRight: 10
  },

  button1: {
    backgroundColor: '#ec5e1c',
    width: '40%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 0.8,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    width: '85%',
    height: 50,
    borderRadius: 4,
  },
  login: {
    backgroundColor: '#ec5e1c',
    width: '60%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    borderWidth: 0.8,
    borderColor: '#ddd'
  },
  textLogin: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFF',
  },
  textRegister: {
    fontSize: 15,
    color: 'blue',
  },
});
