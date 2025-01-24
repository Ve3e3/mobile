import{SafeAreaView, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function App(){
  return(
    <SafeAreaView style={estilo.container}>
    <ScrollView>
    <Text style={estilo.titulo1}>MENU PIZZARIA VITORINA</Text>
    <Text style={estilo.titulo3}> As melhores Pizzas, voce so acha aqui!!!</Text>

    <Text  style={estilo.titulo2}> Pizzas Salgadas </Text>

    <Text style={estilo.tituloC}> Marguerita Classica </Text>
    <Text style={estilo.descricao}> Uma combinacao deliciosa de molho de tomate fresco, mussarela de bufala, folhas de manjericao e um fio de azeite de oliva. simples e irresistivel! </Text>
    <Image style={estilo.img} source={require('./assets/Portuguesa.jpg')}/>

    <Text style={estilo.tituloC}> Calabresa Especial </Text>
    <Text style={estilo.descricao}>Saborosa calabresa fatiada, cebolas roxas caramelizadas, azeitonas pretas e uma generosa camada de mussarela. Uma pizza com personalidade. </Text>
    <Image style={estilo.img} source={require('./assets/Portuguesa.jpg')}/>

    <Text style={estilo.tituloC}> Portuguesa </Text>
    <Text style={estilo.descricao}> Uma mistura perfeita de presunto, ovo, queijo mussarela, azeitonas, cebola e um toque de molho de tomate. Uma pizza que agrada a todos os gostos! </Text>
    <Image style={estilo.img} source={require('./assets/Portuguesa.jpg')}/>

    <Text style={estilo.tituloC}> Frango com Catupiry </Text>
    <Text style={estilo.descricao}> Suculentos pedacos de frango desfiado, cobertos com cremoso catupiry e um toque de oregano, tudo sobre uma base de molho de tomate e mussarela derretida. </Text>
    <Image style={estilo.img} source={require('./assets/Portuguesa.jpg')}/>

    <Text style={estilo.tituloC}> Quatro Queijos </Text>
    <Text style={estilo.descricao}> Uma deliciosa mistura de queijos: mussarela, gorgonzola, provolone e parmesao. Uma pizza cremosa e irresistivel para os amantes de queijo. </Text>
    <Image style={estilo.img} source={require('./assets/Portuguesa.jpg')}/>

    <Text style={estilo.tituloC}> Vegetariana </Text>
    <Text style={estilo.descricao}> Vegetariana Abobrinha, berinjela, pimentoes coloridos, cogumelos frescos e tomates secos, tudo com molho de tomate e uma camada de mussarela. Saborosa e cheia de frescor. </Text>
    <Image style={estilo.img} source={require('./assets/Portuguesa.jpg')}/>

    <Text style={estilo.tituloC}> Bacon com Cheddar </Text>
    <Text style={estilo.descricao}> Bacon crocante, queijo cheddar derretido e molho especial. Uma combinacao deliciosa e irresistivel para quem ama sabores intensos e recheados. </Text>
    <Image style={estilo.img} source={require('./assets/Portuguesa.jpg')}/>


    <Text  style={estilo.titulo2}> Pizzas Doces </Text>

    <Text style={estilo.tituloC}> Chocolate com Morango </Text>
    <Text style={estilo.descricao}> Uma base de chocolate derretido, coberta com morangos frescos e finalizada com uma generosa camada de chocolate branco. Uma explosao de sabor doce e frutado. </Text>
    <Image style={estilo.img} source={require('./assets/Portuguesa.jpg')}/>

    <Text style={estilo.tituloC}> Banoffee </Text>
    <Text style={estilo.descricao}> Doce de leite, banana fatiada e uma crocante camada de biscoito, finalizado com chantilly e um toque de canela. Uma verdadeira sobremesa em forma de pizza. </Text>
    <Image style={estilo.img} source={require('./assets/Portuguesa.jpg')}/>

    <Text style={estilo.tituloC}> Romeu e Julieta </Text>
    <Text style={estilo.descricao}> Queijo minas padrao derretido com goiabada cascao. Uma combinacao doce e salgada, perfeita para quem adora um classico brasileiro. </Text>
    <Image style={estilo.img} source={require('./assets/Portuguesa.jpg')}/>
    
    <Text style={estilo.tituloC}> Nutella com Frutas </Text>
    <Text style={estilo.descricao}> Uma generosa camada de Nutella, coberta com fatias de frutas frescas, como morango e banana, criando um equilibrio entre o doce do chocolate e o frescor das frutas </Text>
    <Image style={estilo.img} source={require('./assets/Portuguesa.jpg')}/>


     <Text style={estilo.titulo2}> Bebidas </Text>

      <Text style={estilo.tituloC}> Refrigerante de Laranja </Text>
    <Text style={estilo.descricao}> Refresco natural com um sabor vibrante e refrescante, ideal para acompanhar sua refeicao e deixar tudo mais saboroso. </Text>
    <Image style={estilo.img} source={require('./assets/Portuguesa.jpg')}/>

     <Text style={estilo.tituloC}> Suco de Abacaxi com Hortela </Text>
    <Text style={estilo.descricao}> Suco fresco de abacaxi, com um toque de hortela que traz frescor e um sabor exotico para complementar sua pizza. </Text>
    <Image style={estilo.img} source={require('./assets/Portuguesa.jpg')}/>

     <Text style={estilo.tituloC}> Agua com Gas </Text>
    <Text style={estilo.descricao}> Agua mineral com gas, uma opcao leve e refrescante para quem quer algo simples e elegante para acompanhar sua refeicao. </Text>
    <Image style={estilo.img} source={require('./assets/Portuguesa.jpg')}/>


    </ScrollView>
    </SafeAreaView>
  )
}

const estilo = StyleSheet.create({

  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#eadac0',
    justifyContent:'center',
     fontFamily:'Arial',
  },
  titulo1:{
    fontSize: 33,
    color:'#black',
    marginLeft:15,
    marginTop: 15
  },
  titulo2:{
   fontSize: 30,
   color: '#444801',
    marginTop: 15,
    marginBottom: 5
  },
  titulo3:{
   fontSize: 20,
   color: '#black',
    marginTop: 10
  },
  tituloC:{
    fontSize: 25,
    color:'#C32105',
   marginTop: 15,
   marginBottom: 5
  },
  descricao:{
    fontFamily:'Arial',
    fontSize:20,
    color:'#black',
    marginBottom: 8
  },
  img:{
    width:350,
    height:250
  }
})

