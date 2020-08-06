import React from "react";
import {View,Text,StyleSheet,Image} from "react-native";

const PlacesHeader=props=>{

    return(
       <View style={styles.header}>
           <View>
           <Text style={{color : '#BCCCD4'}} >Search For Place</Text>
           <Text style={styles.destination}>Destination</Text>
           </View>
           <View>
              <Image style={styles.userPic} source={{uri : 'https://pbs.twimg.com/profile_images/1206237605806985221/pW65Z4C9_400x400.jpg'}} />
           </View>
        
       </View>
    )

}

const styles = StyleSheet.create({

    header:{

        flexDirection : 'row',
        backgroundColor : 'transparent',
        paddingHorizontal : 36,
        paddingBottom : 24,
        paddingTop : 48,
        height : '15%',
        width : '100%',
        justifyContent :'space-between',
        marginBottom : 8
    
    },
    destination :{

        fontSize : 24

    },
    userPic :{

        width : 36,
        height :36,
        borderRadius : 20,
        marginRight : 10
    
      },

    
})

export default PlacesHeader;