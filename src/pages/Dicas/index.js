import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Dicas({ navigation }) {
  const { navigate } = useNavigation();

  const [open, setOpen] = useState();
  const [open2, setOpen2] = useState();
  const [open3, setOpen3] = useState();

  function navigateBack() {
    navigation.goBack()
  }

  function Link1() {
    Linking.openURL('https://caetreinamentos.com.br/blog/gestao-empresarial/como-desenvolver-trabalho-em-equipe/')
  }
  function Link2() {
    Linking.openURL('https://www.siteware.com.br/gestao-estrategica/como-atingir-metas/')
  }
  function Link3() {
    Linking.openURL('https://www.smartfit.com.br/news/saude/como-ser-mais-produtivo-dicas/?gclid=CjwKCAjwur-SBhB6EiwA5sKtjuN0NjHNgfuT3Yt_k_usA8XS5hPZa7fx_xE8EFvLWvPNZk0eh7KzphoC35YQAvD_BwE')
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
            height: '98%',
            width: '98%',
            // flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >

          <Text style={styles.text1}>Dicas</Text>

          <View
            style={styles.container3}
          >



            {!open ? (



              <TouchableOpacity
                style={styles.button2}
                onPress={() => {
                  setOpen(true)
                  setOpen2(false)
                  setOpen3(false)
                }}
              >
                <Text style={styles.text4}>Como desenvolver o trabalho em equipe? Aprenda com 9 dicas</Text>
              </TouchableOpacity>

            )
              : (

                <View style={styles.container2}>

                  <TouchableOpacity
                    style={styles.button2}
                    onPress={() => {
                      setOpen(false)
                      // setOpen2(false)
                    }}
                  >
                    <Text style={styles.textOpen}>Como desenvolver o trabalho em equipe? Aprenda com 9 dicas</Text>
                  </TouchableOpacity>

                  {/* <ScrollView
                    style={{
                      height: '100%'
                    }}
                  > */}

                  <View style={styles.containerTexts}>
                    <ScrollView>
                      <Text style={styles.text5}>1.Entenda a importância do trabalho em equipe</Text>
                      <Text style={styles.text5}>2.Tenha cuidado com a comunicação</Text>
                      <Text style={styles.text5}>3.Respeite o perfil dos colegas</Text>
                      <Text style={styles.text5}>4.Seja proativo</Text>
                      <Text style={styles.text5}>5.Pratique a empatia</Text>
                      <Text style={styles.text5}>6.Dê feedbacks</Text>
                      <Text style={styles.text5}>7.Seja flexível</Text>
                      <Text style={styles.text5}>8.Confie em seus colegas</Text>
                      <Text style={styles.text5}>9.Saiba lidar com conflitos</Text>

                      <TouchableOpacity
                        onPress={Link1}
                      >
                        <Text style={styles.text6}>Visitar esse site.</Text>
                      </TouchableOpacity>
                    </ScrollView>
                  </View>
                  {/* </ScrollView> */}
                </View>
              )}


            {!open2 ? (

              <TouchableOpacity
                style={styles.button2}
                onPress={() => {
                  setOpen(false)
                  setOpen2(true)
                  setOpen3(false)
                }}
              >
                <Text style={styles.text4}>Como atingir metas no trabalho de forma mais eficiente?</Text>
              </TouchableOpacity>

            )
              : (

                <View style={styles.container2}>

                  <TouchableOpacity
                    style={styles.button2}
                    onPress={() => {
                      setOpen2(false)
                    }}
                  >
                    <Text style={styles.textOpen}>Como atingir metas no trabalho de forma mais eficiente?</Text>
                  </TouchableOpacity>

                  <View style={styles.containerTexts}>
                    <ScrollView>
                      <Text style={styles.text5}>1.Avalie se as metas foram bem elaboradas</Text>
                      <Text style={styles.text5}>2.Invista em um software para gestão do alcance de metas</Text>
                      <Text style={styles.text5}>3.Aprimore a comunicação interna com sua equipe</Text>
                      <Text style={styles.text5}>4.Desenvolva as competências do time de trabalho</Text>
                      <Text style={styles.text5}>5.Ofereça feedbacks constantes aos funcionários</Text>
                      <Text style={styles.text5}>6.Desenvolva programas de incentivo</Text>

                      <TouchableOpacity
                        onPress={Link2}
                      >
                        <Text style={styles.text6}>Visitar esse site.</Text>
                      </TouchableOpacity>
                    </ScrollView>
                  </View>
                </View>
              )}


            {!open3 ? (

              <TouchableOpacity
                style={styles.button2}
                onPress={() => {
                  setOpen(false)
                  setOpen2(false)
                  setOpen3(true)
                }}
              >
                <Text style={styles.text4}>Como ser mais produtivo mantendo a qualidade de vida</Text>
              </TouchableOpacity>

            )
              : (

                <View style={styles.container2}>

                  <TouchableOpacity
                    style={styles.button2}
                    onPress={() => {
                      setOpen3(false)
                    }}
                  >
                    <Text style={styles.textOpen}>Como ser mais produtivo mantendo a qualidade de vida</Text>
                  </TouchableOpacity>

                  <View style={styles.containerTexts}>
                    <ScrollView>
                      <Text style={styles.text5}>1.Faça pausas regulares</Text>
                      <Text style={styles.text5}>2.Organize seu tempo</Text>
                      <Text style={styles.text5}>3.Crie um espaço de trabalho adequado</Text>
                      <Text style={styles.text5}>4.Dedique tempo a outras áreas da sua vida</Text>
                      <Text style={styles.text5}>5.Busque autoconhecimento</Text>
                      <Text style={styles.text5}>6.Cuide da saúde</Text>

                      <TouchableOpacity
                        onPress={Link3}
                      >
                        <Text style={styles.text6}>Visitar esse site.</Text>
                      </TouchableOpacity>
                    </ScrollView>
                  </View>
                </View>
              )}


          </View>

        </View>
      </View>
      <TouchableOpacity
        onPress={navigateBack}
        style={styles.voltar}>
        <Text style={styles.textVoltar}>Voltar</Text>
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  logo: {
    width: '100%',
    height: '40%',
    resizeMode: 'contain'
  },
  image: {
    width: 160,
    height: 160,
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
    fontStyle: 'italic',
    // fontWeight: 'bold',
    color: '#6E6E6E'
  },
  text4: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: '#000',
    paddingLeft: 10
  },
  textOpen: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: '#7055d9',
    paddingLeft: 10
  },
  text5: {
    fontSize: 18,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    color: '#6E6E6E',
    marginTop: 5,
    paddingLeft: 10
  },
  text6: {
    fontSize: 20,
    // fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#7055d9',
    marginTop: 5,
    paddingLeft: 10
  },
  // button1: {
  //   backgroundColor: '#ec5e1c',
  //   width: 200,
  //   height: 200,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: 15,
  //   borderWidth: 0.8,
  //   marginTop: 20,
  // },
  button2: {
    marginTop: 20,
    borderWidth: 0.4,
    borderColor: '#6E6E6E',
    borderRadius: 10,
    width: '100%'
  },
  container2: {
    height: '99%',
    width: '98%',
    backgroundColor: '#EAE8E5',
    // flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexDirection: 'column',
    // marginTop: 20
  },
  containerTexts: {
    height: '70%',
    width: '98%',
    backgroundColor: '#EAE8E5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    // marginTop: 20
  },
  container3: {
    height: '99%',
    width: '98%',
    backgroundColor: '#EAE8E5',
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    // marginTop: 20
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
});
