//0512 TextInput

import React from "react";
import { Text,View,TextInput,StyleSheet,Image } from "react-native";

const BMI=()=>{
  return(
    <View style={styles.container}>
      <View style={styles.topBlock}>
        <Image source={require('./assets/fruit2/7.jpg')} />
      </View>
      <View style={styles.middleBlock}>
      <Text>身體質量指數BMI</Text>
      <TextInput placeholder="請輸入身高(公分)" keyboardType="numeric" style={styles.inputStyle} />
      
      <TextInput placeholder="請輸入體重(公斤)" keyboardType="numeric" style={styles.inputStyle} />
      <Text>
      Let's go, take a fruit journey {'\n'}
      Visitors can taste the fresh fruits of the season in Taiwan and experience the fun of fruit picking. Let us visit the gardens all over Taiwan.
      </Text>
    </View>
    <View style={styles.buttomBlock}>
    <Image source={require('./assets/fruit2/12.jpg')} />
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
      container: {
        flexDirection:"column",
        flex: 1,
      },
      topBlock:{
        flex:0.25
      },
      middleBlock:{
        flex:0.5,
        backgroundColor: '#B4A582',
        paddingTop: 50,
        paddingHorizontal: 15,
      },
      buttomBlock:{
        flex:0.25,
      },
      inputStyle:{
        marginBottom:8,
        borderColor:"saddlebrown",
        borderWidth:1,
        borderRadius:5,
        height:40,
        paddingHorizontal:10
      }
  });

export default BMI;


  



// import React from 'react';
// import { StyleSheet,Text, View } from 'react-native';
// //0512 
// export default class App extends React.Component{
//   state={
//     fruit:"夏季的水果是茫果，別吃太多，會ㄎ一ㄤ",
//     content:"Hello Taiwan!!"
//   }

//   setFruit=()=>{
//     this.setState({
//     fruit:"夏季的水果是荔枝，玉荷包，好吃喔~",
//     content:"玉荷包產地，高雄大樹"
//   })
// };

// render(){
//   return (
//     <View style={styles.container}>
//       <Text onPress={this.setFruit}>{this.state.fruit}</Text>
//       <Text onPress={this.setFruit} style={styles.txtStyle}>{this.state.content}</Text>
//     </View>
//   )
// }
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: 'salmon',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     txtStyle:{
//       color:'saddlebrown',
//       fontSize:24
//     }
// });


//0510
// export default class App extends React.Component{
//   state={
//     fruit:"夏季的水果是茫果，別吃太多，會ㄎ一ㄤ",
//     content:"Hello Taiwan!!"
//   }
// render(){
//   return (
//     <View style={styles.container}>
//       <Text>{this.state.fruit}</Text>
//       <Text style={styles.txtStyle}>{this.state.content}</Text>
//     </View>
//   )
// }
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: 'salmon',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     txtStyle:{
//       color:'saddlebrown',
//       fontSize:24
//     }
// });




// const App=()=>{
// return(
//   <View style={styles.container}>
//     <Text style={styles.txtStyle}>Hello World!!</Text>
//     <Text style={{color:'darkred',fontSize:36,}}>Hello Taiwan!!</Text>
//   </View>
// );
// }

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'salmon',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   txtStyle:{
//     color:'saddlebrown',
//     fontSize:24
//   }
// });

/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Text>First React APP.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

//js寫法: document.getElementById('demo').style.backgroundColor('Green'); 
//CSS寫法:#demo { background-color:green;}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'salmon',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtStyle:{
    color:'saddlebrown',
    fontSize:24
  }
});
*/