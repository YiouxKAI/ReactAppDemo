import * as React from 'react';
import { SafeAreaView,View,Text,StyleSheet,ScrollView,Image,StatusBar } from 'react-native';

class OtherScreen extends React.Component{

    Separator=()=>(<View style={styles.mySeparator}></View>)
        
    ShowFruitImage=()=>{
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.ScrollView}>
                    
                    <View style={{alignItems:'center'}}>
                        <Image source={require('./assets/fruit2/0.jpg')} style={styles.imgStyle}></Image>
                        <Text style={styles.txtStyle}>荔枝 原生自中國南方的亞熱帶水果</Text>
                    </View>

                    {this.Separator()}

                    <View style={{alignItems:'center'}}>
                        <Image source={require('./assets/fruit2/1.jpg')} style={styles.imgStyle}></Image>
                        <Text style={styles.txtStyle}>蘋果 含有大量的膳食纖維及維他命C</Text>
                    </View>

                    {this.Separator()}

                    <View style={{alignItems:'center'}}>
                        <Image source={require('./assets/fruit2/2.jpg')} style={styles.imgStyle}></Image>
                        <Text style={styles.txtStyle}>香蕉 富含膳食纖維中的果膠，可促進腸蠕動</Text>
                    </View>

                    {this.Separator()}

                    <View style={{alignItems:'center'}}>
                        <Image source={require('./assets/fruit2/3.jpg')} style={styles.imgStyle}></Image>
                        <Text style={styles.txtStyle}>葡萄 營養豐富，含有多種礦物質</Text>
                    </View>

                    {this.Separator()}

                    <View style={{alignItems:'center'}}>
                        <Image source={require('./assets/fruit2/4.jpg')} style={styles.imgStyle}></Image>
                        <Text style={styles.txtStyle}>西瓜 香甜多汁，被稱為「夏季瓜果之王」</Text>
                    </View>

                    {this.Separator()}

                    <View style={{alignItems:'center'}}>
                        <Image source={require('./assets/fruit2/5.jpg')} style={styles.imgStyle}></Image>
                        <Text style={styles.txtStyle}>芒果 富含大量的維生素C，抗氧化及美膚</Text>
                    </View>

                    {this.Separator()}

                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:StatusBar.currentHeight,
      flexDirection:'column',
      justifyContent:'center',
    },
    ScrollView:{
        backgroundColor:'#D7C4BB',
        marginHorizontal:1,
        padding:15,
    },
    imgStyle:{
        height:100,
        width:100,
        margin:8,
        borderRadius:50,
    },
    txtStyle:{
        fontSize:16,
    },
    mySeparator:{
        borderBottomColor:'#C73E3A',
        borderBottomWidth:2,
        marginVertical:8,
    }
  });

  const os=new OtherScreen();

  /* 也可以用這樣的方式Export
   * export default ShowFruitImage;
   */

  export default os;