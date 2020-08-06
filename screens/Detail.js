import React,{useState} from "react";
import {View,Text,StyleSheet,ImageBackground,Animated,Dimensions,ScrollView,Image} from "react-native";
import DetailHeader from "../components/DetailHeader";
import { FontAwesome,Feather,EvilIcons,Ionicons,Foundation } from '@expo/vector-icons';


const Detail=props=>{

  const {navigation} = props;
  const item = props.route.params.item;
  const [scrollX, setscrollX] = useState(new Animated.Value(0));
  const width = Dimensions.get('window').width;
  const position = Animated.divide(scrollX,width);

  const renderRates=(rate)=>{
    
    const star = ['1','2','3','4','5'];

    return(
      <View style={{flexDirection : 'row', marginTop : 5}}>
        {star.map(s=>(
             s <= rate ? <FontAwesome style={{marginBottom : 10 , marginRight : 5}} name="star" size={16} color="#007BFA" /> :<FontAwesome name="star-o" size={16} color="#007BFA" /> 
        )
        )}
        
      </View>
    )
  }

  const renderDots=()=>{
    
    const position = Animated.divide(scrollX,width);

    return(
      <View style={{flexDirection : 'row',justifyContent :'center',marginTop : 15}}>
         {item.imgs.map((d,index)=>{

            const opacity  = position.interpolate({
              inputRange : [index-1,index,index+1],
              outputRange : [0.5,1,0.5],
              extrapolate :'clamp'
            })

            return(
              <Animated.View key={`dot-${d}-${index}`} style={[styles.dots,styles.currentDot,{opacity : opacity}]} />
            )

         })}
      </View>
     
    )

  }
    return(
       <View style={{flex : 1,backgroundColor :'white'}}>
         <View style={{ flex :1, flexDirection :'column',justifyContent :'space-between'}}>
           <View style={{flex :1.7,position : 'relative',top :-68}}>
           <DetailHeader navigation={navigation} />
             <ScrollView horizontal
              pagingEnabled
              scrollEnabled
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={20}
              style={{zIndex : -2}}
              onScroll={Animated.event([{nativeEvent : {contentOffset : {x : scrollX}}}])}
              >
             {item.imgs.map((img,index)=>(
                <ImageBackground source={{uri : item.imgs[index]}} style={{flex :1, width : width}} >
                </ImageBackground>
             ))}
             </ScrollView>
             <View style={{position :'relative', top : -45}}>
             {renderDots()}
             </View>
             
           </View>
           <View style={styles.content}>
            <Image source={{uri : item.user.pic}} style={styles.userPic} />
             <View style={styles.contentInfo}>
             <Text style={{fontWeight :'bold',fontSize : 24}}>{item.title}</Text>
             <View style={{flexDirection :'row',marginTop : 10}}>
             {renderRates(item.rate)}<Text style={styles.rate}>{item.rate}</Text>
             <Text style={{marginLeft : 10,color : '#BCCCD4',marginTop :2}}> ({item.reviews} Reviews)</Text>
             </View>
             <View style={{marginTop : 15}}>
             <Text style={{color : '#BCCCD4'}}>{item.desc}</Text>
             </View>
             
             </View>
           </View>
         </View>
       </View>
    )

}

const styles = StyleSheet.create({

  dots :{

    width : 10,
    height : 10,
    borderRadius : 6,
    backgroundColor : '#DCE0E9',
    borderColor : '#007BFA',
    marginRight : 3,
   
  },
  userPic :{

    width : 60,
    height :60,
    borderRadius : 30,
    marginRight : 10,
    position :'relative',
    right : Dimensions.get('window').width >400 ? -290 : -260,
    top : -28

  },
  rate : {

    fontSize : 18,
    color :"#007BFA",
    fontWeight : 'bold',
    marginLeft : 15

  },
  currentDot :{

    width : 11,
    height : 11,
    borderRadius : 7,
    backgroundColor : '#DCE0E9',
    borderColor : '#007BFA',
    marginRight : 3,
   
  },

  content :{

    flex : 1,
    position:'relative',
    top:-105,
    paddingHorizontal : 36,
    borderTopRightRadius : 12,
    borderTopLeftRadius : 12,
    backgroundColor :'white'
  },
  contentInfo :{

    marginTop : 15

  }
  
})

export default Detail;