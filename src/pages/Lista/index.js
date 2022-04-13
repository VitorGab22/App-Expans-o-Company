import React, { useContext, useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Linking, TextInput } from 'react-native';


import api from '../../services/api';

import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Lista({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState(null)
  const [name, setName] = useState(null)


  function navigateBack() {
    navigation.goBack()
  }


  async function loadCategoria() {
    const response = await api.post('/sessions')
    console.log(response)

    setName(response.data);
  }

  useEffect(() => {
    loadCategoria();
  }, [])




  const { navigate } = useNavigation();



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
          height: '100%',
          // flex: 1,
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

          <Text style={styles.text1}>Lista</Text>
          {/* <Text style={styles.text1}>{val}</Text>  */}


          <View
            style={{
              height: '100%',
              width: '98%',
              // flex: 1,
              justifyContent: 'space-evenly',
              alignItems: 'baseline',
              flexDirection: 'column',
              marginTop: 20
            }}
          >

            <Text>Nome Fantasia</Text>
            <Text>Razão Social</Text>
            <Text>CNPJ</Text>
            <Text>Data da fundação da empresa</Text>
            <Text>Telefone whatsapp da empresa</Text>

            <View style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <TouchableOpacity
                onPress={navigateBack}
                style={styles.voltar}>
                <Text style={styles.textVoltar}>Voltar</Text>
              </TouchableOpacity>
            </View>
          </View>


        </View>


      </View>


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
    marginTop: 10
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
    borderWidth: 2,
    borderColor: '#848484',
    width: '85%',
    height: 40,
    borderRadius: 4,
    marginTop: 10,
    backgroundColor: '#E6E6E6'
  },
  voltar: {
    backgroundColor: '#ec5e1c',
    width: '60%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    borderWidth: 0.8,
    borderColor: '#ddd',
    marginTop: 20,
  },
  textVoltar: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFF',
  },
  textRegister: {
    fontSize: 15,
    color: 'blue',
  },
});
