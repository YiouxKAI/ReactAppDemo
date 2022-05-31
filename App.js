import React, { Component } from 'react';
import { View,StyleSheet,Text,Alert,Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default class MyDocPicker extends Component{
  
  state=[
    myName='',
  ];

  pickDocument=async()=>{
    let result=await DocumentPicker.getDocumentAsync({});
    Alert.alert(result.uri);
    console.log(result);
    this.setState(()=>this.state.myName=result.name);
  };

  render(){
    return(
      <View style={styles.mycontainer}>
        <View>
          <Text>{this.state.myName}</Text>
        </View>
        <Button title='請選擇文件' onPress={this.pickDocument}></Button>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  mycontainer: {  
    flex: 1,  
    flexDirection:'row',
    alignItems:'center'
},  

myitem: {  
  padding: 10,  
  fontSize: 18,  
  height: 44,  
},
});

/******************************************************************************************/
// import React, { useState, useEffect,Component } from 'react';
// import { FlatList,View,StyleSheet,Text,Alert,StatusBar } from 'react-native';

// export default class MyFlatList  extends Component{
//   getItem=(item)=>{
//     Alert.alert(item.key);
//   }
//   mySeparator=()=>{
//     return(
//       <View style={{height:1,width:'100%',backgroundColor:'gray'}} />
//     )
//   }
//   render(){
//     return(
//       <View style={styles.mycontainer}>
//       <FlatList 
//         data={[
//           {key:'Apple'},
//           {key:'Banana'},
//           {key:'Cherry'}
//         ]}
//         renderItem={({item})=><Text style={styles.myitem} onPress={this.getItem.bind(this,item)}>{item.key}</Text>}
//         ItemSeparatorComponent={this.mySeparator}
//         />
//         <Text></Text>
//     </View> 
//     )

//   }
// }

// const styles = StyleSheet.create({
//   mycontainer: {  
//     flex: 1,  
//     flexDirection:'row',
//     alignItems:'center'
// },  

// myitem: {  
//   padding: 10,  
//   fontSize: 18,  
//   height: 44,  
// },
// });

/******************************************************************************************/
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View,Text,SectionList,Alert,StatusBar } from 'react-native';

// const styles = StyleSheet.create({
//   mycontainer: {
//     flex: 1,   
//     marginHorizontal: 8,
//     paddingTop:StatusBar.currentHeight
//   },
//   myitem: {
//     backgroundColor: "green",
//     padding: 10,
//     marginVertical: 5
//   },
//   myheader: {
//     fontSize: 24,
//     backgroundColor: "tomato"
//   },
//   mytitle: {
//     fontSize: 18,
//     color:'white'
//   }
// });

//     const DATA=[{
//       title:'Spring Fruit',
//       data:['香蕉','蘋果']
//     },{
//       title:'Summer Fruit',
//       data:['芒果','荔枝']
//     },{
//       title:'Autum Fruit',
//       data:['蓮霧','芭樂']
//     },{
//       title:'Winter Fruit',
//       data:['橘子','蘋果']
//     },];

//     getItem=(item)=>{
//       Alert.alert(item);
//     }

// const Fruit=()=>(

//   // return(
//     <View style={styles.mycontainer}>
//       <SectionList 
//       renderItem={({item})=><Text style={styles.myitem} onPress={getItem.bind(this,item)}>{item}</Text>}
//       sections={DATA}
//       renderSectionHeader={({section:{title}})=>(<Text style={styles.myheader}>{title}</Text>)}
//       keyExtractor={(item,index)=>item+index}
//       />
//       <Text></Text>
//     </View>
//   // )
// );

// export default Fruit;


/******************************************************************************************/
// import React, { useState, useEffect } from 'react';
// import { StyleSheet,Button, View,Text } from 'react-native';

// const styles = StyleSheet.create({
//       contentStyle:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center',
//         paddingHorizontal:15,
//       },
//       ddlStyle:{
//         height:50,
//         justifyContent:'center',
//         borderRadius:100,
//         width:'50%',
        
//       },
//       txtStyle:{
//         textAlign:'center',
//         fontSize:18
//       }
//     });

// const MyTimer=()=>{

//   const [count,setCount]=useState(0);

//   //也可直接傳回某個值
//   const [calc,setCalc]=useState(()=>{return 0;});

//   //setCalc(count*2); error，太多的重新渲染，React限制渲染的次數，防止無窮的重複
//   //useEffect(callback function,array)，第二個參數可以省略

//   const myData={
//      code:200,
//      msg:'成功',
//      info:{
//        id:count,
//        name:'Kaye',
//        age:20,
//      }
//   }

//   console.log(myData);

//   useEffect(()=>{
//     console.log('Hello');
//   });

//   useEffect(()=>{
//     console.log(myData);
//   },[]);

//   useEffect(()=>{
//     console.log('Hi');
//   },[count]);

//   useEffect(()=>{
//     console.log('haha');
//   },['a','b']);

//   return(
//     <View style={styles.contentStyle}>
//       <Text>{count}</Text>
//       <Button title='CALC' onPress={()=>setCount(count+1)}></Button>
//     </View>
//   )
// }

// export default MyTimer;

/******************************************************************************************/
// import React, { useState, useEffect } from 'react';
// import { StyleSheet,Button, View,Text } from 'react-native';

// const styles = StyleSheet.create({
//       contentStyle:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center',
//         paddingHorizontal:15,
//       },
//       ddlStyle:{
//         height:50,
//         justifyContent:'center',
//         borderRadius:100,
//         width:'50%',
        
//       },
//       txtStyle:{
//         textAlign:'center',
//         fontSize:18
//       }
//     });

// const MyTimer=()=>{

//   const [count,setCount]=useState(0);
//   const [calc,setCalc]=useState(0);


//   //setCalc(count*2); error，太多的重新渲染，React限制渲染的次數，防止無窮的重複
//   //useEffect(callback function,array)，第二個參數可以省略

//   const myData={
//      code:200,
//      msg:'成功',
//      info:{
//        id:1,
//        name:'Kaye',
//        age:20,
//      }
//   }

//   console.log(myData);

//   useEffect(()=>{
//     setCalc(count*2)
//   },[count]);

//   return(
//     <View style={styles.contentStyle}>
//       <Text>{count}</Text>
//       <Button title='CALC' onPress={()=>setCount(count+1)}></Button>
//       <Text>{calc}</Text>
//     </View>
//   )
// }

// export default MyTimer;


/******************************************************************************************/
// import React, { useState, useEffect } from 'react';
// import { Button, Image, View, Platform } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// export default function ImagePickerExample() {
//   const [image, setImage] = useState(null);

//   const pickImage = async () => {

//     //useEffect(參數1,參數2)
//     useEffect(() => {
//       (async () => {
//         if (Platform.OS !== 'web') {
//           const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//           if (status !== 'granted') { //若未授予權限,則
//             alert('抱歉，我們需要相機膠卷權限才能完成這項工作!');
//           }
//         }
//       })();
//     }, []);


//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.cancelled) {
//       setImage(result.uri);
//     }
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//     </View>
//   );
// }

/******************************************************************************************/
//05/26-Picker
// import React,{useState} from 'react';
// import {View,Text,Image,StyleSheet} from 'react-native';
// import {Picker} from '@react-native-picker/picker';

// const styles = StyleSheet.create({
//       contentStyle:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center',
//         paddingHorizontal:15,
//       },
//       ddlStyle:{
//         height:50,
//         justifyContent:'center',
//         borderRadius:100,
//         width:'50%',
        
//       },
//       txtStyle:{
//         textAlign:'center',
//         fontSize:18
//       }
//     });

// const App=()=>{
//   const [value,setValue]=useState(0);
//   const path=[
//     require('./assets/fruit2/0.jpg'),
//     require('./assets/fruit2/1.jpg'),
//     require('./assets/fruit2/2.jpg'),
//     require('./assets/fruit2/3.jpg')
//   ]

//   return(
//     <View style={styles.contentStyle}>
//       <Text style={styles.txtStyle}>請選擇你喜歡的水果:</Text>
//       <Picker style={styles.ddlStyle} onValueChange={setValue} selectedValue={value} >
//         <Picker.Item label='Litchi' value='0'></Picker.Item>
//         <Picker.Item label='Apple' value='1'></Picker.Item>
//         <Picker.Item label='Banana' value='2'></Picker.Item>
//         <Picker.Item label='grape' value='3'></Picker.Item>
//       </Picker>
//       {/*Android-->require()不可用變數連接
//         Web-->require()可以用變數連接
//       <Image source={require('./assets/fruit2/'+value+'.jpg')} />
//       */}
//       {/* <Image source={require('./assets/fruit2/7.jpg')} /> */}

//       <Image source={path[value]} />
//       <Text>./assets/fruit2/{value}.jpg</Text>

//     </View>
//   )
// }

// export default App;

/******************************************************************************************/
//05/26-ActivityIndicator
// import React,{Component} from 'react';
// import { Text,View,ActivityIndicator,Button } from 'react-native';

// export default class MyActivityIndicator extends Component{

//   constructor(){
//     super();
//     this.state={
//       flag:true
//     }
//     console.log('1.constructor');
//   }

//   // state={
//   //   flag:true,
//   // }
  
//   stopActivityIndicator=()=>{setTimeout(()=>{this.setState({flag:false})},1000)};

//   //組件在呈現在DOM中，可以執行React code
//   componentDidMount=()=>{
//     this.stopActivityIndicator()
//     console.log('3.componentDidMount')
//   };

//   render(){
//     console.log('2.render')
//     const flag=this.state.flag;
//     return(

//       <View style={{flex:1,justifyContent:'space-around',alignItems:'center'}}>
//         <Text>Loading...</Text>
//         <View>
//           <ActivityIndicator
//           animating={flag}
//           size='large'
//           color='#6A8372'
//           />
//           <Button title='LOAD' onPress={()=>{this.setState({flag:true});
//             this.stopActivityIndicator();
//           }} />
//         </View>
//       </View>
//     );
//   }
// }

/******************************************************************************************/

//05/24-Modal
/*Text 寫可以加入onPress當按鈕 */
// import React,{Component} from 'react';
// import { StyleSheet, Text, ScrollView, StatusBar,View,Button,Modal,TouchableOpacity,Image,Pressable,Alert } from 'react-native';

// export default class App extends Component{
//   state={
//     isVisible:false
//   }
//   displayModal(show){
//     this.setState({isVisible:show})
//   }
//   render(){
//     return(
//       <View style={styles.container}>
//         <Modal
//         animationType='fade'
//         visible={this.state.isVisible}>
//           <View>
//             <Image source={require('./assets/fruit/apple.jpg')} style={styles.imgStyle} />
//             <ScrollView style={{height:100,marginHorizontal:20}}>
//               <Text style={styles.txtContain}>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//             minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum.
//               </Text>
//             </ScrollView>
//           </View>

//             <Pressable onPress={()=>{this.displayModal(!this.state.isVisible)}} style={({pressed})=>[{backgroundColor:pressed?'#646A58':'#6A8372'},styles.mypress]} 
//             onLongPress={()=>Alert.alert('ALOHA!')} >
//               {/* <Text style={{height:100}}>Hello World</Text> */}
//               {({pressed})=>(<Text style={styles.mypress}>{pressed?'BYE':'ALOHA'}</Text>)}
//             </Pressable>
            


//         </Modal>

//         <View>
//           <TouchableOpacity onPress={()=>{this.displayModal(true)}} style={styles.btnStyle}>
//             <Text style={styles.txtStyle}>Click</Text>
//           </TouchableOpacity>
//         </View>


//       </View>
//     )
//   }
// }

// const styles=StyleSheet.create({
//     container:{
//       flex:1,
//       flexDirection:'column',
//       justifyContent:'space-around',   
//       alignItems:'center'
//     },
//     btnStyle:{
//       height:100,
//       width:100,
//       borderRadius:100,
//       backgroundColor:'#6A8372',
//       alignItems:'center',
//       justifyContent:'center',
//       shadowOffset: { 
//         height: 10, 
//         width: 5 
//       },
//       shadowRadius: 10,
//       marginVertical:20,
//     },
//     txtStyle:{
//       color:'#fff',
//     },
//     txtContain:{
//       fontSize: 18,
//       marginBottom: 15,
//       padding: 20,
//     },
//     imgStyle:{
//       marginTop: 100,
//       marginBottom: 10,
//       width: 400,
//       height: 400,
//       borderRadius:200,
//       borderWidth:10,
//       borderStyle:'solid',
//       borderColor:'#877F6C',
//     },
//     mypress:{
//       borderColor:'lightgray',
//       borderWidth:1,
//       borderRadius:10,
//       paddingHorizontal:20,
//       width:300,
//       marginTop:20,   
//     }
//   })

/******************************************************************************************/

/*05/24-
 * StatusBar,APP的狀態列，時間，wifi，電量...等
 * SafeAreaView，針對iOS，安全區域視埠 */

/*
import React,{useState} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar,View,Button } from 'react-native';


const App = () => {
  const [hidden,setHidden]=useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
      backgroundColor='#6A8372'
      barStyle='light-content'
      hidden={hidden} />

      <View>
        <Button title='Press to Hide' onPress={()=>{setHidden(!hidden)}} />
      </View>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default App;
*/
/******************************************************************************************/

// import React, { useState } from "react";
// import { View, StyleSheet,Text } from "react-native";
// import Slider from '@react-native-community/slider';

// export default function MySlider(){
//   const [c,setC]=useState(0);
//   const [f,setF]=useState(0);

//   const setTempC=()=>{
//     setC(5/9*(f-32))
//   }

//   const setTempF=()=>{
//     setF((c*9/5)+32)
//   }

//   return(
//     <View style={styles.container}>
      
//       <View style={styles.middleContainer}>
//       <Text>{c.toFixed(2)}</Text>
//         <View style={styles.mySliderOutter}>
//           <Slider
//             style={styles.mySlider}
//             minimumValue={0}
//             maximumValue={200}
//             minimumTrackTintColor="#FFFFFF"
//             maximumTrackTintColor="#000000"
//             step={1}
//             value={c}
//             onValueChange={setC}
//             onSlidingStart={setTempC}
//             onSlidingComplete={setTempF}
//           />
//         </View>
//         <Text style={styles.txtStyle}>攝氏溫度</Text>
//       </View>

//       <View style={styles.middleContainer}>
//       <Text>{f}</Text>
//         <View style={styles.mySliderOutter}>
//           <Slider
//             style={styles.mySlider}
//             minimumValue={1}
//             maximumValue={200}
//             minimumTrackTintColor="#FFFFFF"
//             maximumTrackTintColor="#000000"
//             step={2}
//             value={f}
//             onValueChange={setF}
//             onSlidingStart={setTempF}
//             onSlidingComplete={setTempC}
//           />
//         </View>
//         <Text style={styles.txtStyle}>攝氏溫度</Text>
//       </View>
//     </View>
//   )
// }
// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     flexDirection:'column',
//     justifyContent:'space-around',   
//     alignItems:'center'
//   },

//   middleContainer:{
//     flex:0.45,
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   mySlider:{
//     width:300,
//     height:40,
//   } ,

//   mySliderOutter:{
//     width:300,
//     height:40,
//     backgroundColor:'lightgray',
//     borderRadius:25
//   } 
//   ,txtStyle:{
//     fontSize:24,
//     marginBottom:15
//   }
// }); 

/******************************************************************************************/
//0524-Slider
// import React, { useState } from "react";
// import { View, StyleSheet,Text } from "react-native";
// import Slider from '@react-native-community/slider';

// export default function MySlider(){
//   const [value,setValue]=useState(0);
//   return(
//     <View style={styles.container}>
//       <Text>{value}</Text>
      
//       <View>
//       <Slider
//         style={{width: 200, height: 40}}
//         minimumValue={0}
//         maximumValue={200}
//         minimumTrackTintColor="#FFFFFF"
//         maximumTrackTintColor="#000000"
//         step={2}
//         value={value}
//         onValueChange={setValue}
//       />
//       </View>
      
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     mySlider:{

//     }
//   });

/******************************************************************************************/

// import React, { useState } from "react";
// import { View, Switch, StyleSheet,Image,Text,Alert,Button } from "react-native";
// import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

// const App = () => {
//   const [bgc,setBgc]=useState('');
//   const myAlert=()=>{
//     Alert.alert(
//       '改變背景色',
//       '請問要改變背景顏色嗎?',
//       [
//         {
//           text:'OK',
//           style:'default',
//           onPress:()=>{
//             setBgc('#6699A1');
//           }
//         },
//         {
//           text:'No',
//           style:'cancel',
//           onPress:()=>{
//             setBgc('#fff');
//           }
//         }
//       ]
//     )
//   }
//   return (
//     <View style={[styles.container,{backgroundColor:bgc}]}>
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