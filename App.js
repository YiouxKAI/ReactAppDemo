import React, { useState } from "react";
import { View, Switch, StyleSheet,Image,Text,Alert,Button } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const App = () => {
  const [bgc,setBgc]=useState('');
  const myAlert=()=>{
    Alert.alert(
      '改變背景色',
      '請問要改變背景顏色嗎?',
      [
        {
          text:'OK',
          style:'default',
          onPress:()=>{
            setBgc('#6699A1');
          }
        },
        {
          text:'No',
          style:'cancel',
          onPress:()=>{
            setBgc('#fff');
          }
        }
      ]
    )
  }
  return (
    <View style={[styles.container,{backgroundColor:bgc}]}>
      <Button title={'Press Me'} onPress={myAlert}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'#fff'

  }
});

export default App;


/******************************************************************************************/
// import React, { useState } from "react";
// import { View, Switch, StyleSheet,Image,Text,Alert,Button } from "react-native";

// const App = () => {
//   const [bgc,setBgc]=useState(false);
//   const myAlert=()=>{
//     Alert.alert(
//       '改變背景色',
//       '請問要改變背景顏色嗎?',
//       [
//         {
//           text:'OK',
//           style:'default',
//           onPress:()=>{
//             console.log('OK');
//             setBgc(true);
//           }
//         },
//         {
//           text:'No',
//           style:'cancel',
//           onPress:()=>{
//             console.log('NO');
//             setBgc(false);
//           }
//         }
//       ]
//     )
//   }
//   return (
//     <View style={[styles.container,bgc?{backgroundColor:'#6699A1'}:{}]}>
//       <Button title={'Press Me'} onPress={myAlert}></Button>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor:'#fff'

//   }
// });

// export default App;


/******************************************************************************************/
// import React, { useState } from "react";
// import { View, Switch, StyleSheet,Image,Text } from "react-native";

// const App = () => {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled(
//     previousState => !previousState
//     );

//   return (
//     <View style={[styles.container,isEnabled?{backgroundColor:'#f5dd4b'}:{backgroundColor:'#f4f3f4'}]}>

//       <Image source={isEnabled? require('./assets/on.gif'):require('./assets/off.gif')} />
//       <Text style={{marginVertical:10}}>{isEnabled?'我亮了':'我暗了'}</Text>

//       <Switch
//         trackColor={{ false: "#767577", true: "#81b0ff" }}
//         thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
//         ios_backgroundColor="#3e3e3e"
//         onValueChange={toggleSwitch}
//         value={isEnabled}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

// export default App;


/******************************************************************************************/
// import React,{ useState } from 'react';
// import { Text,View,StyleSheet,TouchableHighlight,TouchableOpacity } from "react-native";

// const styles = StyleSheet.create({
//   contentStyle:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center',
//     paddingHorizontal:15
//   },
//   outterStyle:{
//     borderColor:'#A5DEE4',
//     backgroundColor:'#A5DEE4',
//     borderWidth:1,
//     width:100,
//     borderRadius:50,
//     marginHorizontal:100,
//   },
//   buttonStyle:{
//     height:60,
//     justifyContent:'center',
//     backgroundColor:'#6699A1',
//     borderRadius:50,
//     width:60,
    
//   },
//   txtStyle:{
//     textAlign:'center',
//   }
// });

// const App=()=>{
//   const [light,setLight]=useState(false);
//   const greeting=()=>{
//     setLight(light ? false:true);
    
//   };



//   return(
//     <View style={styles.contentStyle}>
//       <View style={[styles.outterStyle,light?{alignItems:'flex-start'}:{alignItems:'flex-end'}]}>
//         <TouchableHighlight style={styles.buttonStyle} onPress={greeting}>
//           <Text style={styles.txtStyle}>{light?'HELLO':'哈囉'}</Text>
//         </TouchableHighlight>
//       </View>  
//     </View>
//   );
// }

// export default App;
/******************************************************************************************/
//0519

// import React,{ useState } from 'react';
// import { Text,View,StyleSheet,TouchableHighlight,TouchableOpacity } from "react-native";

// const styles = StyleSheet.create({
//     contentStyle:{
//       flex:1,
//       justifyContent:'center',
//       alignItems:'center',
//       paddingHorizontal:15,
//     },
//     outterStyle:{
//       borderColor:'#A5DEE4',
//       backgroundColor:'#A5DEE4',
//       borderWidth:1,
//       width:200,
//       borderRadius:200,
//       marginHorizontal:100,
//       marginVertical:15,
//       width:200
//     },
//     buttonStyle:{
//       height:100,
//       justifyContent:'center',
//       backgroundColor:'#6699A1',
//       borderRadius:100,
//       width:100,
      
//     },
//     txtStyle:{
//       textAlign:'center',
//       fontSize:25
//     }
//   });

// const App=()=>{
//   const [count,setCount]=useState(0);
//   const [buttonUp,setButtonUp]=useState(count==0?true:false);
//   const [buttonSub,setButtonSub]=useState(count==10?true:false);
//   const addUp=()=>{
//     if(count>=10){
//       setCount(count+0)
//       setButtonUp(false)
//       setButtonSub(true)
//     }
//     else{
//       setCount(count+1)
//       setButtonUp(true)
//       setButtonSub(true)
//     }

//   };
//   const substract=()=>{
//     if(count<=0){
//       setCount(count-0)
//       setButtonUp(true)
//       setButtonSub(false)
//     }
//     else{
//       setCount(count-1)
//       setButtonUp(true)
//       setButtonSub(true)
//     }
//   };


//   return(
//     <View style={styles.contentStyle}>
//       <View style={styles.topContent}>
//         <Text>增減結果</Text>
//         <Text>{count}</Text>
//       </View>

//       <View style={styles.outterStyle}>
//         <TouchableHighlight style={styles.buttonStyle} onPress={addUp}>
//           <Text style={styles.txtStyle}>{buttonUp?'增1':'已無法再增加'}</Text>
//           {/* <Text>{count==10?'已無法再增加':'增1'}</Text> */}
//         </TouchableHighlight>
//       </View>
//         <View style={styles.outterStyle}>
//           <TouchableOpacity style={styles.buttonStyle} onPress={substract}>
//           <Text style={styles.txtStyle}>{buttonSub?'減1':'已無法再減少'}</Text>
//         </TouchableOpacity>
//         </View>
//     </View>
//   );
// }

// export default App;


/******************************************************************************************/
//0519
// import React,{ useState } from 'react';
// import { Text,View,StyleSheet,TouchableHighlight,TouchableOpacity } from "react-native";

// const styles = StyleSheet.create({
//   contentStyle:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center',
//     paddingHorizontal:15
//   },
//   outterStyle:{
//     borderColor:'#A5DEE4',
//     backgroundColor:'#A5DEE4',
//     borderWidth:1,
//     width:100,
//     borderRadius:50,
//     marginHorizontal:100,
//   },
//   buttonStyle:{
//     height:60,
//     //alignItems:'center',
//     justifyContent:'center',
//     backgroundColor:'#6699A1',
//     borderRadius:50,
//     width:60,
    
//   },
//   txtStyle:{
//     textAlign:'center',
//   }
// });

// const App=()=>{
//   const [light,setLight]=useState(false);
//   const greeting=()=>{
//     setLight(light ? false:true);
    
//   };



//   return(
//     <View style={styles.contentStyle}>
//       <View style={styles.outterStyle}>
//         <TouchableHighlight style={styles.buttonStyle} onPress={greeting}>
//           <Text style={styles.txtStyle}>{light?'HELLO':'哈囉'}</Text>
//         </TouchableHighlight>
//       </View>  
//     </View>
//   );
// }

// export default App;


/******************************************************************************************/
//0517 - 

// import React,{ useState } from 'react';
// import { Text,View,StyleSheet,TouchableHighlight,TouchableOpacity } from "react-native";

// const styles = StyleSheet.create({
//   content:{
//     justifyContent:'center',
//     alignItems:'center',
//     backgroundColor:'#6699A1',
//     marginHorizontal:5,
//     height:50,
//     lineHeight:50,
//   },
//   topContent:{
//     alignItems:'center',
//     marginVertical:50,
//   }
// });

// const App=()=>{
//   const [count,setCount]=useState(0);
//   const addUp=()=>{
//     if(count>=10)
//       setCount(count+0)
//     else
//       setCount(count+1)
//   };
//   const substract=()=>{
//     if(count<=0)
//       setCount(count-0)
//     else
//       setCount(count-1)
//   };


//   return(
//     <View style={{flexDirection:'column',flex:1,justifyContent:'space-around',alignItems:'center'}}>
//       <View style={styles.topContent}>
//         <Text>增減結果</Text>
//         <Text>{count}</Text>
//       </View>

//       <View style={{flexDirection:'row',flex:1}}>
//         <TouchableHighlight style={[{flex:0.5,width:'100%'},styles.content]} onPress={addUp}>
//           <Text>增1</Text>
//         </TouchableHighlight>
//         <TouchableOpacity style={[{flex:0.5,width:'100%'},styles.content]} onPress={substract}>
//           <Text>減1</Text>
//         </TouchableOpacity>
//       </View>  
//     </View>
//   );
// }

// export default App;


/******************************************************************************************/
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


/******************************************************************************************/
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
  

/******************************************************************************************/
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


/******************************************************************************************/
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