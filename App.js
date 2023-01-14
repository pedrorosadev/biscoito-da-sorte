import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textoFrase: "",
      img: require("./assets/biscoito.png"),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      "Destino não é uma questão de sorte, mas uma questão de escolha; não é uma coisa que se espera, mas que se busca.",
      "Sorte é estar pronto quando a oportunidade vem.",
      "A sorte, para chegar até mim, tem de passar pelas condições que o meu caráter lhe impõe.",
      "Descobri que a sorte é perfeitamente previsível. Se você quer mais sorte, arrisque-se mais. Seja mais ativo. Exponha-se com mais frequência.",
    ];
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img: require("./assets/biscoitoAberto.png"),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.img} style={styles.img} />
        <Text style={styles.textoFrase}> {this.state.textoFrase} </Text>

        <TouchableOpacity styles={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar o Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  img: {
    height: 250,
    width: 250,
  },

  textoFrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },

  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#dd7b22",
    borderRadius: 25,
  },

  btnArea: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  btnTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#dd7b22",
  },
});

export default App;
