//0517 - 

import React,{ useState } from 'react';
import { Text,View,StyleSheet,TouchableHighlight,TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  content:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#6699A1',
    marginHorizontal:5,
    height:50,
    lineHeight:50,
  },
  topContent:{
    alignItems:'center',
    marginVertical:50,
  }
});

const App=()=>{
  const [count,setCount]=useState(0);
  const addUp=()=>{
    setCount(count+1)
  };
  const substract=()=>{
    setCount(count-1)
  };


  return(
    <View style={{flexDirection:'column',flex:1,justifyContent:'space-around',alignItems:'center'}}>
      <View style={styles.topContent}>
        <Text>增減結果</Text>
        <Text>{count}</Text>
      </View>

      <View style={{flexDirection:'row',flex:1}}>
        <TouchableHighlight style={[{flex:0.5,width:'100%'},styles.content]} onPress={addUp}>
          <Text>增1</Text>
        </TouchableHighlight>
        <TouchableOpacity style={[{flex:0.5,width:'100%'},styles.content]} onPress={substract}>
          <Text>減1</Text>
        </TouchableOpacity>
      </View>  
    </View>
  );
}

export default App;

//0517 
/*import { Text,View,StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const App=()=>{
  return(
    <View style={{flexDirection:'column',flex:1,justifyContent:'space-around',alignItems:'center'}}>
      <View style={[{height:100,width:100,backgroundColor:'#6699A1'},styles.container]}>
      <Text>Left</Text>
      </View>
      <View style={[{height:50,width:100,backgroundColor:'#A5DEE4'},styles.container]}>
      <Text>Middle</Text>
      </View>
      <View style={[{height:100,width:100,backgroundColor:'#6699A1'},styles.container]}>
      <Text>Right</Text>
      </View>
    </View>
  );
}

export default App;*/


//0517 Layout - 以Column做版面
/*import { Text,View,StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const App=()=>{
  return(
    <View style={{flexDirection:'column',flex:1}}>
      <View style={[{flex:0.25,backgroundColor:'#6699A1'},styles.container]}>
      <Text>Top</Text>
      </View>
      <View style={[{flex:1,backgroundColor:'#A5DEE4'},styles.container]}>
      <Text>Middle</Text>
      </View>
      <View style={[{flex:0.5,backgroundColor:'#6699A1'},styles.container]}>
      <Text>Buttom</Text>
      </View>
    </View>
  );
}



export default App;*/


// //0517 Layout - 以Row做版面
// import { Text,View,StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });

// const App=()=>{
//   return(
//     <View style={{flexDirection:'row',flex:1}}>
//       <View style={[{flex:0.25,backgroundColor:'#6699A1'},styles.container]}>
//       <Text>Left</Text>
//       </View>
//       <View style={[{flex:0.5,backgroundColor:'#A5DEE4'},styles.container]}>
//       <Text>Middle</Text>
//       </View>
//       <View style={[{flex:0.25,backgroundColor:'#6699A1'},styles.container]}>
//       <Text>Right</Text>
//       </View>
//     </View>
//   );
// }



// export default App;

//0512 TextInput,StyleSheet,Image,Button,Alert
/*import React from "react";
import { Text,View,TextInput,StyleSheet,Image,Button,Alert } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";


export default class BMI extends React.Component {
  state={
    height:0,
    weight:0,
    result:0,
    warnning:'',
  }

  handleBMI=()=>{
    let bmi=this.state.weight/((this.state.height/100)**2);
    let str='';

    this.setState({result:bmi.toFixed(1)});

    if(bmi < 18.5){
      str='過輕';
    }
    else if(bmi < 24){
      str='正常';
    }else if(bmi < 27){
      str='過重';
    }else if(bmi < 30){
      str='輕度肥胖';
    }else if(bmi < 35){
      str='中度肥胖';
    }else{  
      str='重度肥胖';
    }

    this.setState({warnning:str});
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.topBlock}>
          <Image style={styles.imgStyle} source={require('./assets/fruit2/7.jpg')} />
        </View>
        <View style={styles.middleBlock}>
        <Text>身體質量指數BMI</Text>
        <TextInput placeholder="請輸入身高(公分)" keyboardType="numeric" style={styles.inputStyle} onChangeText={height=>{this.setState({height})}}/>
        
        <TextInput placeholder="請輸入體重(公斤)" keyboardType="numeric" style={styles.inputStyle} onChangeText={weight=>{this.setState({weight})}} />
        <Text>
        Let's go, take a fruit journey {'\n'}
        Visitors can taste the fresh fruits of the season in Taiwan and experience the fun of fruit picking. Let us visit the gardens all over Taiwan.
        </Text>
        <Button title="ALOHA" color='#465D4C' onPress={()=>Alert.alert('請注意健康')}></Button> 
        <Button title="CALC" color='#91B493' onPress={this.handleBMI}></Button> 

        <Text style={styles.txtStyle}>BMI:{this.state.result}</Text>
        <Text style={styles.txtStyle}>警語:{this.state.warnning}</Text>
      {///*Alert調用一定要用arrow function***///}
      /*</View>
      <View style={styles.buttomBlock}>
      <Image source={require('./assets/fruit2/12.jpg')} />
      </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
      container: {
        flexDirection:"column",
        flex: 1,
      },
      topBlock:{
        flex:0.25,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#808F7C'
      },
      middleBlock:{
        flex:0.5,
        backgroundColor: '#6A8372',
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
      },
      imgStyle:{
        width:100,
        height:100,
        borderRadius:50,
        borderWidth:3,
        borderStyle:'solid',
        borderColor:'#877F6C'
      },
      txtStyle:{
        textAlign:'center',
        marginVertical:10,
        backgroundColor:'#465D4C',
        height:30,
        color:'#fff',
        lineHeight:30,
      }
  });*/

//export default BMI;


  



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


//0510 state:屬性 setState:方法
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