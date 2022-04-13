import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'

import AsyncStorageLib from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const [name, setName] = useState([]);
  const { navigate } = useNavigation();

  useEffect(() => {
    AsyncStorageLib.getItem('name').then(storagedName => {
      const nameArray = storagedName.split(',').map(name => name)

      setName(nameArray);
    })
  })

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

          <Text style={styles.text1}>Bem vindo a  <Text style={styles.text4}>Expansão Company</Text></Text>
          <Text>id:{name}</Text>

          <View
            style={{
              height: '50%',
              width: '98%',
              // flex: 1,
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 20
            }}
          >

            <TouchableOpacity
              onPress={() => {
                navigate("Empresa")
              }}
              style={styles.button1}>
              <Image source={{
                uri:
                  'https://expansaocompany.com/wp-content/uploads/2020/09/new-content-bg.png'
              }}
                style={styles.image}
              />
              <Text style={styles.text2}>Resumo da empresa</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigate("Dicas")
              }}
              style={styles.button1}>
              <Image source={{
                uri:
                  'https://expansaocompany.com/wp-content/uploads/2020/02/site-optimized-cta-image.png'
              }}
                style={styles.image}
              />
              <Text style={styles.text2}>Dicas para contribuir</Text>
            </TouchableOpacity>
          </View>


        </View>

        <View style={{
          width: '99%',
          alignItems: 'flex-end',
          justifyContent: 'center',
          flexDirection: 'row'
        }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingRight: 10
            }}
            onPress={() => {
              navigate("Lista")
            }}>
            <FontAwesome name="list-alt" size={50} color="#1C1C1C" />
            <Text style={styles.textWhat}>Lista</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingRight: 10
            }}
            onPress={() => {
              navigate("Formulario")
            }}>
            <AntDesign name="form" size={50} color="#1C1C1C" />
            <Text style={styles.textWhat}>Cadastrar empresas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingRight: 10
            }}
            onPress={sendWhatsapp}>
            <FontAwesome name="whatsapp" size={50} color="#06AD08" />
            <Text style={styles.textWhat}>whatsapp</Text>
          </TouchableOpacity>
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
  textWhat: {
    fontSize: 18,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    color: '#6E6E6E',
    paddingRight: 10
  },
  text4: {
    fontSize: 25,
    fontStyle: 'italic',
    // fontWeight: 'bold',
    color: '#000'
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
  }
});
