import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      data: new Date(),
      textoStatus: 'Desativado',
      textoBotao: 'Ligar',
    }
    this.liga = this.liga.bind(this)
    this.idTimer = null
  }

  liga(){  //  id  setInterval ( metodo  se exectado ) , intervalo de tempo em milisegundos
          //  clearInterval (id)
    if (this.idTimer != null){
      clearInterval(this.idTimer)
      this.idTimer = null
      this.setState({textoStatus: 'Desativdo' })
      this.setState({textoBotao: 'Ligar' })
    }else{
      this.setState({textoBotao: 'Pausar' })
      this.setState({textoStatus: 'Ativado' })
      this.idTimer = setInterval(() => {this.setState({data: new Date()})} , 1000)
    }    
  }  
  

  render(){
    return(
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 40, color: 'black', margin: 40}}>Relógio</Text>
        <Text style={{fontSize: 40}}>{this.state.data.toLocaleTimeString()}</Text>
        <Text style={{fontSize: 30}}>{this.state.textoStatus}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={this.liga} style={estilo.botao}>
            <Text style={{fontSize: 30}}>{this.state.textoBotao}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const estilo = StyleSheet.create({
  botao: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    height: 50,
    flex: 1,
    borderRadius: 30,
  }
})