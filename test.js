import React,{ useState } from 'react';
import { Text,View,StyleSheet,TouchableHighlight,TouchableOpacity } from "react-native";
export const test=()=>{
const styles = StyleSheet.create({
  contentStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:15
  },
  outterStyle:{
    borderColor:'#A5DEE4',
    backgroundColor:'#A5DEE4',
    borderWidth:1,
    width:100,
    borderRadius:50,
    marginHorizontal:100,
  },
  buttonStyle:{
    height:60,
    justifyContent:'center',
    backgroundColor:'#6699A1',
    borderRadius:50,
    width:60,
    
  },
  txtStyle:{
    textAlign:'center',
  }
});

const App=()=>{
  const [light,setLight]=useState(false);
  const greeting=()=>{
    setLight(light ? false:true);
    
  };



  return(
    <View style={styles.contentStyle}>
      <View style={[styles.outterStyle,light?{alignItems:'flex-start'}:{alignItems:'flex-end'}]}>
        <TouchableHighlight style={styles.buttonStyle} onPress={greeting}>
          <Text style={styles.txtStyle}>{light?'HELLO':'哈囉'}</Text>
        </TouchableHighlight>
      </View>  
    </View>
  );
}
}



//export default App;