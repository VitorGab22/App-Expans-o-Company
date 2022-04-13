import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Logo from '../../assets/image/logo.png'

export default function Home2() {
  return (
    <View style={styles.container}>

      <View
        style={styles.header}
      >
        <Image source={Logo}
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
            alignItems: 'center'
          }}
        >

          <Text style={styles.text1}>Bem vindo,conheça a Expansão Company</Text>
          <TouchableOpacity style={styles.button1}><Text style={styles.text2}>Conferir</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button1}><Text style={styles.text2}>Conferir</Text></TouchableOpacity>
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
    width: 80,
    height: 80,
  },
  text1: {
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#000'
  },
  text2: {
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#FFF'
  },
  text3: {
    fontSize: 18,
    fontStyle: 'italic',
    // fontWeight: 'bold',
    color: '#6E6E6E'
  },
  button1: {
    backgroundColor: '#ec5e1c',
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 0.8,
    marginTop: 20
  }
});
