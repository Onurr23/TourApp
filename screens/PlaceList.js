import { EvilIcons, Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import React, { useState } from "react";
import { Animated, Dimensions, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PlacesHeader from "../components/PlacesHeader";

const width = Dimensions.get('window').width;

const PlaceList=props=>{

  const [scrollX, setscrollX] = useState(new Animated.Value(0));
  const [scrollY, setscrollY] = useState(new Animated.Value(0));
  const {navigation} = props;

  const data = [

    {
        id : 1,
        cover : 'https://images.unsplash.com/photo-1520190282873-afe1285c9a2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1381&q=80',
        imgs : ['https://images.unsplash.com/photo-1514038047819-af3435565412?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80','https://images.unsplash.com/photo-1531504060587-e6811129c0f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80','https://images.unsplash.com/photo-1561990755-ed48a84e41f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80','https://images.unsplash.com/photo-1530974563471-169d62fa4b9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80','https://images.unsplash.com/photo-1525642650051-4e79b2eecd7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1367&q=80'],
        title : 'Norway',
        location : 'Trondheim',
        temp : 21,
        desc : 'Real Heaven from Norway ',
        rate : 4.5,
        reviews : 2589,
        user : {
            name : 'Halit Onur Kara',
            pic : 'https://pbs.twimg.com/profile_images/1206237605806985221/pW65Z4C9_400x400.jpg'

        },

    },
    {
      id : 2,
      cover : 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      imgs : ['https://images.unsplash.com/photo-1541360389723-5f230196b9e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80','https://images.unsplash.com/photo-1519375722682-222902a76bf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1377&q=80','https://images.unsplash.com/photo-1537557174945-0e5c05a1709c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80','https://images.unsplash.com/photo-1501342682596-e83fef8a5223?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80','https://images.unsplash.com/photo-1462524653740-777d166c975e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1545&q=80'],
      title : 'Norway',
      location : 'Olesund',
      temp : 21,
      desc : 'Real Heaven from Norway',
      rate : 4.6,
      reviews : 2589,
      user : {
          name : 'Halit Onur Kara',
          pic : 'https://pbs.twimg.com/profile_images/1206237605806985221/pW65Z4C9_400x400.jpg'

      },

  },
  {
    id : 3,
    cover : 'https://images.unsplash.com/photo-1521336575822-6da63fb45455?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    imgs : ['https://images.unsplash.com/photo-1468930830753-6699377de411?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80','https://images.unsplash.com/photo-1504971588239-ba9c6ac9097f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80','https://images.unsplash.com/photo-1533738432289-7af44041678e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80','https://images.unsplash.com/photo-1508442279723-a01da83be32b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80','https://images.unsplash.com/photo-1516541500032-f022148bae59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'],
    title : 'Norway',
    location : 'Lofoten',
    temp : 21,
    desc : 'Real Heaven from Norway',
    rate : 4.8,
    reviews : 2589,
    user : {
        name : 'Halit Onur Kara',
        pic : 'https://pbs.twimg.com/profile_images/1206237605806985221/pW65Z4C9_400x400.jpg'

    },

},
{
  id : 4,
  cover : 'https://images.unsplash.com/photo-1552840253-b19267dbe6fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  imgs : ['https://images.unsplash.com/photo-1516652644653-d05f809c785e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80','https://images.unsplash.com/photo-1519757666945-3be88ecfe76e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80','https://images.unsplash.com/photo-1563533140099-b1d2fe5296e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80','https://images.unsplash.com/photo-1574757582299-92b0ccfdb186?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1345&q=80','https://images.unsplash.com/photo-1585488657832-6f2cfb99a362?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'],
  title : 'Norway',
  location : 'Oslo',
  temp : 21,
  desc : 'Real Heaven from Norway',
  rate : 4.8,
  reviews : 2589,
  user : {
      name : 'Halit Onur Kara',
      pic : 'https://pbs.twimg.com/profile_images/1206237605806985221/pW65Z4C9_400x400.jpg'

  },

},
{
  id : 5,
  cover : 'https://images.unsplash.com/photo-1544009520-e2ea9189f15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
  imgs : ['https://images.unsplash.com/photo-1567117439208-4fc24b53e2fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80','https://images.unsplash.com/photo-1580940010016-e0231b7d44e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80','https://images.unsplash.com/photo-1501537886870-ae33f87cab52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1711&q=80','https://images.unsplash.com/photo-1544009788-a7c33ddf777a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80','https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1362&q=80','https://images.unsplash.com/photo-1519758747502-84b7b18a6160?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'],
  title : 'Norway',
  location : 'Telemark',
  temp : 21,
  desc : 'Real Heaven from Norway',
  rate : 4.8,
  reviews : 2589,
  user : {
      name : 'Halit Onur Kara',
      pic : 'https://pbs.twimg.com/profile_images/1206237605806985221/pW65Z4C9_400x400.jpg'

  },

}

]

  const renderDots=()=>{
    
    const position = Animated.divide(scrollX,width);

    return(
      <View style={{flexDirection : 'row',justifyContent :'center',marginTop : -30,position :'relative',top : 5}}>
         {data.map((d,index)=>{

            const width  = position.interpolate({
              inputRange : [index-1,index,index+1],
              outputRange : [0,3,0],
              extrapolate :'clamp'
            })

            return(
              <Animated.View key={`dot-${d.id}`} style={[styles.dots,styles.currentDot,{borderWidth : width}]} />
            )


         })}
      </View>
     
    )

  }

  const renderRates=(rate)=>{
    
    const star = ['1','2','3','4','5'];

    return(
      <View style={{flexDirection : 'row', marginTop : 5}}>
        {star.map((s,index)=>(
             s <= rate ? <FontAwesome key={index} style={{marginBottom : 10 , marginRight : 5}} name="star" size={16} color="#007BFA" /> :<FontAwesome name="star-o" size={16} color="#007BFA" /> 
        )
        )}
        
      </View>
    )
  }

   const renderPlaces=()=>{
    return(
      <View style={styles.main}>
        <Animated.FlatList
         horizontal
         pagingEnabled
         scrollEnabled
         snapToAlignment="center"
         showsHorizontalScrollIndicator={false}
         scrollEventThrottle={20}
         data={data}
         keyExtractor={(item)=>item.id}
         renderItem={renderDestination}
         contentOffset={{x:5, y: 0}}
         decelerationRate={0}
         bounces={false}
         onScroll={Animated.event([{nativeEvent : {contentOffset : {x : scrollX}}}])}
         />
         {renderDots()}
      </View>
    )
  }

  const renderDestination=({item,index})=>{

    const inputRange = [

      (index-1) * width,
      index * width,
      (index+1) * width 

    ];

    const translateY = scrollX.interpolate({

      inputRange,
      outputRange : [0,20,0]

    })

    return(
      <Animated.View style={{transform:[{translateY}]}}>
      <TouchableOpacity style={{height : 320}} onPress={()=>navigation.navigate('Details',{item})} >
         <ImageBackground style={[styles.background,styles.place]} source={{uri : item.cover}}>
        <View style={styles.main}>
        <View style={styles.placeItem}>
          <View style={{flexDirection :'row'}}>
          <Image source={{uri :item.user.pic}} style={styles.userPic} />
          <View style={{flexDirection : 'column'}}>
          <Text style={{color : 'white',fontWeight : 'bold'}}>{item.user.name}</Text>
          <Text style={{color : 'white'}}><EvilIcons name="location" size={16} color="white" /> {item.location}</Text>
          </View>
          </View>
          <View style={{marginLeft : 80}}>
            <Text style={styles.rate}>{item.rate}</Text>
          </View>
        </View>
      </View>
      </ImageBackground>
      <View style={[styles.description,{flexDirection:'column'}]}>
        <Text style={{fontWeight : 'normal',fontSize : 18}}>{item.title}</Text>
        <Text style={{color : '#BCCCD4'}}>{item.desc}           <Ionicons style={{marginLeft : 25}} name="ios-arrow-forward" size={12} color="#BCCCD4" /> </Text>
      </View>
      </TouchableOpacity>
      </Animated.View>
    )
  }

  const renderReccomendation=({item})=>{
    return(
      <TouchableOpacity style={styles.recItem} onPress={()=>navigation.navigate('Details',{item})}>
        <ImageBackground imageStyle={{height : '100%'}} style={[styles.recCover]} source={{uri : item.cover}}>
        <View style={{flexDirection :'row',justifyContent :'space-between',margin : 15}}>
          <Text style={{color:'white'}}>{item.temp}°C</Text>
         {item.id ===1 ? <FontAwesome name="bookmark" size={18} color="white" /> : <Feather name="bookmark" size={18} color="white" />}
        </View>
        </ImageBackground>
        <View style={styles.recInfo}>
        <Text style={{fontWeight : 'normal',fontSize : 16}}>{item.title}</Text>
        <Text style={{color : '#BCCCD4'}}>{item.location}</Text>
        <Text style={{color : '#007BFA'}} >{item.rate}</Text>
        {renderRates(item.rate)}
        </View>
      </TouchableOpacity>
    )

  }

  const renderReccomandations=()=>{
    return(
      <View style={styles.reccomandation}>
        <View style={styles.recContainer}>
          <Text style={{fontSize : 20}}>Reccomended</Text>
          <Text style={{color : '#BCCCD4'}}>More</Text>
          </View>
          <View style={styles.recList}>
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            snapToAlignment="start"
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={20}
            data={data}
            keyExtractor={(item)=>item.id}
            renderItem={renderReccomendation}
            style={{marginTop : 15}}
            />
          </View>
      </View>
    )
  }

    return(
       <View style={{flex : 1}}>
         <PlacesHeader/>
         <ScrollView showsVerticalScrollIndicator={false} style={styles.screen}>
         {renderPlaces()}
        {renderReccomandations()}
        
         </ScrollView>
       
       </View>
    )
}

const styles = StyleSheet.create({

  screen : {

    flex : 1,
  },

  recList :{

    height : '100%'

  },

  recInfo:{

    flex : 1,
    flexDirection :'column',
    justifyContent :'space-between',
    padding : 16,

  },

  recCover:{

  borderTopRightRadius : 8,
  borderTopLeftRadius : 8,
  overflow :'hidden',
  height:  150,

  },
  recItem :{

    flexDirection :'column',
    width : Dimensions.get('window').width*0.42,
    height : 250,
    marginRight : 15,
    backgroundColor : 'white',
    
  },

  main : {

    flex : 1,
    flexDirection : 'column',
   
  },
  place :{

    flex : 1,
    flexDirection : 'row',
    borderRadius : 15,
    backgroundColor : 'pink',
    width : Dimensions.get('window').width-(36*2),
    marginHorizontal : 36,
    paddingHorizontal : Dimensions.get('window').width > 400 ? 35 : 10,
    paddingVertical : 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  reccomandation : {

    flex : 1,
    flexDirection : 'column',
    padding : 20
   
  },
  placeItem:{

    flex : 1,
    flexDirection :'row',
    justifyContent :'flex-start',
    
  },
  background : {
    
    flex : 1,
    borderRadius : 12,
    overflow :'hidden'
    

  },
  userPic :{

    width : 40,
    height :40,
    borderRadius : 20,
    marginRight : 10

  },
  rate : {

    fontSize : 28,
    color :'white',
    fontWeight : 'bold'

  },
  description :{

    position :'relative',
    marginTop : 3,
    borderRadius : 12,
    backgroundColor : 'white',
    padding : 15,
    top : -49,
    left : Dimensions.get('window').width > 400 ? 80 : 64,
    width : 250,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

elevation: 5,
  
  },
  dots :{

    width : 10,
    height : 10,
    borderRadius : 6,
    backgroundColor : '#DCE0E9',
    borderColor : '#007BFA',
    marginRight : 3,
   
  },
  currentDot :{

    width : 11,
    height : 11,
    borderRadius : 7,
    backgroundColor : '#DCE0E9',
    borderColor : '#007BFA',
    marginRight : 3,
    borderWidth : 2
    
  },
  reccomandations :{

    flex : 1,
    flexDirection : 'column'

  },
  recContainer :{

    flexDirection :'row',
    justifyContent : 'space-between',
    alignItems :'center',
    

  }
  
})

export default PlaceList;