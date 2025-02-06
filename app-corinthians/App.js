import{SafeAreaView, Text, StyleSheet, ScrollView, View, Image, FlatList} from 'react-native';
import {useState, useEffect} from 'react';

const request = async(callback) => {

  const response = await fetch('https://qrtag.net/api/qr.png');
  const parsed = await response.json();
  callback(parsed);
}

export default function App(){

  const[registros, setRegistros] = useState([]);

  useEffect(()=>{
    request(setRegistros);
  },[]);

  return(
    <SafeAreaView style={estilo.container}>
    <Text style={estilo.titulo}> O PODEROSO TIMAO</Text>
    <Text style={estilo.titulo2}> Aqui tem um bando de loucos</Text>
    <ScrollView>
    <Image style={estilo.img} source={require('./assets/Logo2.jpg')}/>
      <Text style={estilo.fraseS}>'A grande forca do Corinthians é emoção que a torcida passa para o time, algo numa dimensão que  nenhuma outra passa' - Dr.Sócrates  </Text>
      <Image style={estilo.img} source={require('./assets/socrates-1701110358748.webp')}/>
      <View>
      <Text style={estilo.fraseP}>'O Corinthians será o time do povo e feito pelo povo' - Miguel Battaglia  </Text>
      <Image style={estilo.img} source={require('./assets/Criacao.jpg')}/>
      <Text style={estilo.fraseP2}>provavelmente foi a frase mais marcante e que definiu oque estaria por vir, até que no dia 1º de setembro de 1910, surgia o Sport Club Corinthians Paulista (SCCP)  </Text>
      <Text style={estilo.fraseH}> A logo do Corinthians surgiu em 1910, com o nome do clube e uma âncora, simbolizando a união e a força da cidade. Em 1939, foi redesenhada, ficando mais arredondada e detalhada. Ao longo do tempo, o escudo modernizou-se, mas sempre preservando sua essência.</Text>
      <Image style={estilo.img} source={require('./assets/vai-corinthians-timao.gif')}/>
      </View>
      <View>
      <Text style={estilo.fraseH}> A logo do Corinthians evoluiu com o tempo: em 1939, ficou mais arredondada e detalhada; em 1954, simplificou para um estilo clássico; nos anos 90, ganhou um toque moderno com fontes e detalhes em vermelho; e em 2013, ficou mais limpa, mantendo a tradição. </Text>
      <Text style={estilo.fraseH2}> A semana inteira fiquei esperando
      Pra te ver Corinthians, pra te ver jogando
      Quando a gente ama, não mede esforço
      Pra te ver jogar, te ver jogar, te ver jogar
      Não é brincadeira
      Vou vestir meu manto, manto alvinegro
      Tem que ter respeito
      Amor à camisa, vou com o Corinthians
      Em qualquer lugar, qualquer lugar, qualquer lugar </Text>
      <Text style={estilo.fraseFN}> Viva o poderoso Timão!!! </Text>
    
      </View>

      <FlatList 
    data={registros}
    renderItem={({item})=>
    <View> 
      <Image style = {styles.tinyLogo} source = {item.qr} />
    </View>
    }
    />
      <Image
        style={estilo.tinyLogo}
        source={{
            uri: 'https://qrtag.net/api/qr.png?url=https://www.corinthians.com.br/',
      }}
      />

    </ScrollView>
    </SafeAreaView>
  )
}

const estilo = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#black',
    color:'white',
    padding: 8,
  },
  titulo:{
    color: 'white',
    marginTop:5,
    marginBottom: 3,
    fontSize: 35,
    fontFamily:'Ariel'
  },
  titulo2:{
    color:'white',
    fontSize: 20,
    fontFamily:'Ariel'
  },
  fraseS:{
    marginTop:425,
    marginBottom:50,
    color:'white',
    fontSize: 25,
    fontFamily:'Ariel'
  },
  fraseP:{
    marginTop:455,
    marginBottom:20,
    color:'white',
    fontSize: 25,
    fontFamily:'Ariel'
  },
  fraseH:{
    marginTop:20,
    marginBottom:10,
    color:'white',
    fontSize: 25,
    fontFamily:'Ariel'
  },
  fraseH2:{
    backgroundColor:'white',
    color:'black',
    borderRadius:50,
    marginTop:400,
    marginBottom:10,
    padding:20,
    fontSize: 27,
    textAlign:'left',
    fontFamily:'Ariel'
  },
  fraseP2:{
    marginTop:50,
    marginBottom:400,
    color:'white',
    fontSize: 25,
    fontFamily:'Ariel'
  },
  fraseFN:{
    marginTop:20,
    marginBottom:10,
    color:'white',
    fontSize: 30,
    fontFamily:'Ariel',
    textAlign:'center'
  },
  img:{
    marginLeft:50,
    alignItems: 'center',
    width: 300,
    height: 300,
  },
   tinyLogo:{
    marginLeft:50,
    width: 300,
      height: 300,
  },


  
})