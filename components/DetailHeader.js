import React from "react";
import {View,Text,StyleSheet,TouchableOpacity} from "react-native";
import { FontAwesome,Feather,EvilIcons,Ionicons,Foundation,AntDesign } from '@expo/vector-icons';

const DetailHeader=props=>{

  const {navigation} = props;

    return(
       <View style={styles.header}>
         <TouchableOpacity style={{height :30,width :30}} onPress={()=>navigation.goBack()}>
         <AntDesign name="left" size={20} color="white" />
         </TouchableOpacity>
         <TouchableOpacity style={{height :15,width :15}} onPress={()=>navigation.goBack()}>
         <Ionicons name="ios-more" size={22} color="white" />
         </TouchableOpacity>
       </View>
    )

}

const styles = StyleSheet.create({

  header:{

    flexDirection : 'row',
    backgroundColor : 'transparent',
    paddingHorizontal : 36,
    paddingBottom : 24,
    height : '14%',
    width : '100%',
    justifyContent :'space-between',
    marginBottom : 8,
    position :'relative',
    top :120,
   
},
  
})

export default DetailHeader;