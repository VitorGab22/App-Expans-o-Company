import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Linking, ScrollView, _Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function Empresa() {
  const { navigate } = useNavigation();

  const [open, setOpen] = useState();
  const [open2, setOpen2] = useState();
  const [open3, setOpen3] = useState();
  const [open4, setOpen4] = useState();

  function Link() {
    Linking.openURL('https://expansaocompany.com//')
  }

  return (
    <View style={styles.container}>

      <View
        style={styles.header}
      >

        {/* <Image source={Logo}
          style={styles.logo}
        /> */}

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
          height: '99%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View
          style={{
            backgroundColor: '#FFF',
            height: '99%',
            width: '98%',
            // flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >


          <Text style={styles.text1}>Empresa</Text>


          <View
            style={{
              height: '90%',
              width: '98%',
              backgroundColor: '#FFF',
              // flex: 1,
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexDirection: 'column',
              marginTop: 20
            }}
          >

            <ScrollView>

              <View style={styles.containerEmpresa}>
                <Text style={styles.text1}>Quer resultados
                  na sua empresa?</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start'
                }}
              >
                <TouchableOpacity

                  onPress={() => {
                    setOpen(true)
                    setOpen2(false)
                    setOpen3(false)
                    setOpen3(false)
                  }}
                >
                  <Text style={styles.text6}>Mais informações..</Text>
                </TouchableOpacity>

                {!open ? (
                  null
                ) : (

                  <TouchableOpacity
                    onPress={() => {
                      setOpen(false)
                    }}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',

                    }}
                  >

                    <MaterialIcons
                      name="keyboard-arrow-up"
                      size={45}
                      color="#ec5e1c"
                    />

                  </TouchableOpacity>


                )}

              </View>




              {!open ? (

                null)
                : (
                  <Text style={styles.text5}>Nosso trabalho é fazer a sua empresa performar
                    em vendas, otimizar sua logística e trazer resultados.</Text>

                )}

              {!open ? (

                null)
                : (
                  <Image source={{
                    uri:
                      'https://expansaocompany.com/wp-content/uploads/2019/12/home_2_slider_bg_top.png'
                  }}
                    style={styles.image}
                  />

                )}



              <View style={styles.containerEmpresa}>
                <Text style={styles.text1}>Venda mais com a assessoria
                  de marketing e vendas da
                  Expansão Company</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start'
                }}
              >
                <TouchableOpacity

                  onPress={() => {
                    setOpen(false)
                    setOpen2(true)
                    setOpen3(false)
                    setOpen3(false)
                  }}
                >
                  <Text style={styles.text6}>Mais informações..</Text>
                </TouchableOpacity>

                {!open2 ? (
                  null
                ) : (

                  <TouchableOpacity
                    onPress={() => {
                      setOpen2(false)
                    }}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',

                    }}
                  >

                    <MaterialIcons
                      name="keyboard-arrow-up"
                      size={45}
                      color="#ec5e1c"
                    />

                  </TouchableOpacity>


                )}

              </View>




              {!open2 ? (

                null)
                : (
                  <Text style={styles.text5}>Nossa empresa tem uma única filosofia: ENTREGAR RESULTADOS. A nossa metodologia EC de execução dos projetos de nossos clientes faz uso de diversos métodos, sim trabalhamos com vários métodos diferentes, afinal sua empresa não é igual a do seu concorrente, seus problemas são diferentes, e isso requer atenção e formas diferentes de atuação.</Text>

                )}

              {!open2 ? (

                null)
                : (
                  <Image source={{
                    uri:
                      'https://expansaocompany.com/wp-content/uploads/2019/12/what-seo-do-left-bg.png'
                  }}
                    style={styles.image}
                  />

                )}


              <View style={styles.containerEmpresa}>
                <Text style={styles.text1}>Como inserimos seu processo de vendas na internet</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start'
                }}
              >
                <TouchableOpacity

                  onPress={() => {
                    setOpen(false)
                    setOpen2(false)
                    setOpen3(true)
                    setOpen4(false)
                  }}
                >
                  <Text style={styles.text6}>Mais informações..</Text>
                </TouchableOpacity>

                {!open3 ? (
                  null
                ) : (

                  <TouchableOpacity
                    onPress={() => {
                      setOpen3(false)
                    }}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',

                    }}
                  >

                    <MaterialIcons
                      name="keyboard-arrow-up"
                      size={45}
                      color="#ec5e1c"
                    />

                  </TouchableOpacity>


                )}

              </View>

              {!open3 ? (

                null)
                : (
                  <View>
                    <Text style={styles.text5}>• Google Adwords • Facebook Ads • Web Analytics</Text>
                    <Text style={styles.text5}>• Web Design • Landing pages • Implementação de loja virtual</Text>
                    <Text style={styles.text5}>• Design e UX</Text>
                    <Text style={styles.text5}>• Desenvolvimento de oferta (Copywriting) • C.R.O (Conversion Rate Optmization) • Controle de Vendas Omni-Channel</Text>
                    <Text style={styles.text5}>• Design e UX</Text>
                    <Text style={styles.text5}>• E-mail Marketing • Remarketing • CRM • Member Get Member</Text>
                  </View>
                )}

              {!open3 ? (

                null)
                : (
                  <Image source={{
                    uri:
                      'https://expansaocompany.com/wp-content/uploads/2019/12/why-choose-us-right-side-bg.png'
                  }}
                    style={styles.image}
                  />

                )}



              <View style={styles.containerEmpresa}>
                <Text style={styles.text1}>Desenvolvimento de
                  Sites, E-commerce e Apps</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start'
                }}
              >

                <TouchableOpacity
                  onPress={() => {
                    setOpen(false)
                    setOpen2(false)
                    setOpen3(false)
                    setOpen4(true)
                  }}
                >
                  <Text style={styles.text6}>Mais informações..</Text>
                </TouchableOpacity>

                {!open4 ? (
                  null
                ) : (

                  <TouchableOpacity
                    onPress={() => {
                      setOpen4(false)
                    }}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',

                    }}
                  >

                    <MaterialIcons
                      name="keyboard-arrow-up"
                      size={45}
                      color="#ec5e1c"
                    />

                  </TouchableOpacity>

                )}

              </View>

              {!open4 ? (

                null)
                : (


                  <Text style={styles.text5}>Acreditamos que tecnologia é o que faz sua empresa crescer mais rapidamente. Por isso, nossos clientes contam com nosso desenvolvimento autoral de e-commerce, sites e aplicativos para Android e IOS Apple. Se você precisar de qualquer tecnologia temos na nossa equipe os desenvolvedores, e assim tudo é mais rápido.</Text>


                )}

              {!open4 ? (

                null)
                : (

                  <Image source={{
                    uri:
                      'https://expansaocompany.com/wp-content/uploads/2019/07/image_4-1536x768.png'
                  }}
                    style={styles.image}
                  />

                )}

            </ScrollView>
          </View>

        </View>

      </View>


      <TouchableOpacity
        style={styles.button2}
        onPress={Link}
      >
        <Text style={styles.text2}>Saiba mais</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    backgroundColor: '#ec5e1c',
    width: '100%',
    height: 100,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 15
  },
  logo: {
    width: '100%',
    height: '40%',
    resizeMode: 'contain'
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  text1: {
    fontSize: 22,
    // fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#1C1C1C',
  },
  text2: {
    fontSize: 22,
    // fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#FFF'
  },
  text3: {
    fontSize: 18,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    color: '#6E6E6E'
  },
  text4: {
    fontSize: 25,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    color: '#1C1C1C'
  },
  text5: {
    fontSize: 18,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    color: '#6E6E6E',
    marginTop: 20
  },
  text6: {
    fontSize: 20,
    // fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#7055d9',
    marginTop: 5
  },
  button1: {
    backgroundColor: '#ec5e1c',
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 0.8,
    marginTop: 20,
  },
  button2: {
    backgroundColor: '#7055d9',
    width: 200,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 0.8,
    // marginTop: 20,
  },
  containerEmpresa: {
    backgroundColor: '#E3E3E3',
    borderWidth: 0.8,
    borderColor: '#7B7B7B',
    borderRadius: 10,
    marginTop: 20
  },
});
