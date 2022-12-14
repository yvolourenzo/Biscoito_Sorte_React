import React, { Component } from 'react';
import { 
  View , 
  Text ,
  StyleSheet , 
  Image,
  TouchableOpacity, }
 from 'react-native';  

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: 'O maior castigo é ser educado por pessoas mal-educadas',
      img: require('./src/biscoito.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'O problema dos dias de hoje é que as pessoas são tão mal educadas, que acabam confundindo gentileza com simpatia ou, pior, interesse.',
      'Pessoas mal-educadas insistem em dizer que são autênticas. Em um país onde favelas são chamadas de comunidades e banditismo de violência, nada mais justo.',
      'Não existem pessoas feias, existem pessoas mal educadas',
      'Pessoas mal educadas se destacam pela sua arrogância, e as bem educadas pala sua nobreza',
      'O maior castigo é ser educado por pessoas mal-educadas.',
      'Debaixo da casca grossa existe uma pessoa que deseja ser apreciada, compreendida e amada.',
      'Coisas que um homem jamais deveria usar: boné a noite, corrente grossa, sapatênis, regata, camisa pra dentro da calça e eu.',
      'Consegui enxergar a felicidade, quando a minha visão atravessou a grossa muralha do meu egoísmo',
    ];
  }

  quebraBiscoito(){
      let numeroAleatorio = Math.floor(Math.random() * this.frases.length );

      this.setState({
        textoFrase: ' " ' + this.frases[numeroAleatorio] + ' " ',
        img: require('./src/biscoitoAberto.png')
      })
  }

  render(){
    return(
      <View style={styles.container}>

      <Image
      source={this.state.img}
      style={styles.img}
      />

      <Text style={styles.textoFrase}>{this.state.textoFrase}"</Text>

      <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width: 250,
    height: 250,
  },
  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});

export default App;