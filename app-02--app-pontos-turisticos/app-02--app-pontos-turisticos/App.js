import { SafeAreaView, Text, StyleSheet, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragrafo}>Cidades Brasileiras</Text>
      <ScrollView>
        <View style={styles.fundoC}>
          <Text style={styles.cidades}>São Paulo</Text>
          <Text style={styles.pontoT}>Pontos turísticos</Text>
          <ScrollView horizontal>
            <View style={styles.itensT}>
              <Text style={styles.itens}>Parque Ibirapuera</Text>
            </View>
            <View style={styles.itensT}>
              <Text style={styles.itens}>Pinacoteca</Text>
            </View>
            <View style={styles.itensT}>
              <Text style={styles.itens}>Museu da Língua Portuguesa</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.fundoC}>
          <Text style={styles.cidades}>Salvador</Text>
          <Text style={styles.pontoT}>Pontos turísticos</Text>
          <ScrollView horizontal>
          <View style={styles.itensT}>
            <Text style={styles.itens}>Pelourinho</Text>
          </View>
          <View style={styles.itensT}>
            <Text style={styles.itens}>Igreja do Bonfim</Text>
          </View>
          <View style={styles.itensT}>
            <Text style={styles.itens}>Praia da Barra</Text>
          </View>
          </ScrollView>
        </View>

        <View style={styles.fundoC}>
          <Text style={styles.cidades}>Rio de Janeiro</Text>
          <Text style={styles.pontoT}>Pontos turísticos</Text>
          <ScrollView horizontal>
          <View style={styles.itensT}>
            <Text style={styles.itens}>Cristo Redentor</Text>
          </View>
          <View style={styles.itensT}>
            <Text style={styles.itens}>Pão de Açúcar</Text>
          </View>
          <View style={styles.itensT}>
            <Text style={styles.itens}>Praia de Copacabana</Text>
          </View>
          </ScrollView>
        </View>

        <View style={styles.fundoC}>
          <Text style={styles.cidades}>Foz do Iguaçu</Text>
          <Text style={styles.pontoT}>Pontos turísticos</Text>
          <ScrollView horizontal>
          <View style={styles.itensT}>
            <Text style={styles.itens}>Cataratas do Iguaçu</Text>
          </View>
          <View style={styles.itensT}>
            <Text style={styles.itens}>Parque Nacional do Iguaçu</Text>
          </View>
          <View style={styles.itensT}>
            <Text style={styles.itens}>Usina Hidrelétrica de Itaipu</Text>
          </View>
          </ScrollView>
        </View>

        <View style={styles.fundoC}>
          <Text style={styles.cidades}>Florianópolis</Text>
          <Text style={styles.pontoT}>Pontos turísticos</Text>
          <ScrollView horizontal>
          <View style={styles.itensT}>
            <Text style={styles.itens}>Praia Mole</Text>
          </View>
          <View style={styles.itensT}>
            <Text style={styles.itens}>Lagoa da Conceição</Text>
          </View>
          <View style={styles.itensT}>
            <Text style={styles.itens}>Fortaleza de São José da Ponta Grossa</Text>
          </View>
          </ScrollView>
        </View>

        <View style={styles.fundoC}>
          <Text style={styles.cidades}>Belo Horizonte</Text>
          <Text style={styles.pontoT}>Pontos turísticos</Text>
          <ScrollView horizontal>
          <View style={styles.itensT}>
            <Text style={styles.itens}>Praça da Liberdade</Text>
          </View>
          <View style={styles.itensT}>
            <Text style={styles.itens}>Mirante do Mangabeiras</Text>
          </View>
          <View style={styles.itensT}>
            <Text style={styles.itens}>Igreja São José</Text>
          </View>
          </ScrollView>
        </View>

        <View style={styles.fundoC}>
          <Text style={styles.cidades}>Curitiba</Text>
          <Text style={styles.pontoT}>Pontos turísticos</Text>
          <ScrollView horizontal>
          <View style={styles.itensT}>
            <Text style={styles.itens}>Jardim Botânico</Text>
          </View>
          <View style={styles.itensT}>
            <Text style={styles.itens}>Ópera de Arame</Text>
          </View>
          <View style={styles.itensT}>
            <Text style={styles.itens}>Museu Oscar Niemeyer</Text>
          </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#Fffdd0',
    color:'#000000',
    padding: 8,
  },
  paragrafo: {
    margin: 24,
    fontSize:50,
    backgroundColor: '#006400',
    color:'#000000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cidades: {
    fontSize: 30,
    color: '#00000',
  },
  fundoC: {
    backgroundColor: '#006400',
    marginTop: 30,
    color:'#000000',
    borderRadius: 30,
    padding: 30,
  },
  pontoT: {
    fontSize: 25,
    color: '#000000',
  },
  itens: {
    fontSize: 35,
    color: 'black',
  },
  itensT: {
    marginBottom: 10,
    color:'#000000',
    backgroundColor:'#32CD32',
    borderRadius:25,
    fontSize: 20,
    height: 50,
    margin: 5
  },
});
