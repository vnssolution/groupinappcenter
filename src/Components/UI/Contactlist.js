// import React, {Component} from 'react';
// import { ImageBackground } from 'react-native';
// import {Platform, StyleSheet, Text, View, FlatList, PermissionsAndroid,Image} from 'react-native';
// import Contacts from 'react-native-contacts';
// const requestPermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
//       {
//         title: "Groupin App READ_CONTACTS Permission",
//         message:
//           "Groupin App needs access to your READ_CONTACTS " ,
//         buttonNeutral: "Ask Me Later",
//         buttonNegative: "Cancel",
//         buttonPositive: "OK"
//       }
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log("You can use the READ_CONTACTS");
//       return true
//     } else {
//       console.log("READ_CONTACTS permission denied");
//       return false
      
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// };

// export default class Contactlist extends Component {
//   state={
//     contactslist: []
//   }

//   componentDidMount(){
//   this.getcontactbook()
//   }
 
//   getcontactbook(){
//     if(requestPermission){
//       Contacts.getAll()
//       .then((contacts) => {
//      let mylist=contacts
//         // work with contacts
//         contacts.sort((a,b)=>{
//           if(a.displayName > b.displayName){
//               return 1;
//           }
//           if(a.displayName < b.displayName){
//               return -1;
//           }
//           return 0;
//      });
//         let obj = {
//           "click": false
//         }
//         contacts.forEach((element) =>
       
//         element["click"] =true,
//         console.log("contacts==" + JSON.stringify(element)),
//         )
       
//         this.setState({ contactslist: contacts })
//       })
//       .catch((e) => { //handle error 
//         // console.log("contacts error=="+JSON.stringify(e))
//       })
   
//     }
//   }

//   render () {
//     return (
//       <View style={styles.container}>
//         {/* {this.state.contactslist.length > 0 ?
//           <FlatList
//             data={this.state.contactslist}
//             renderItem={({ item }) => (
//               <View>
//                 <Text style={styles.contact_details}>
//                {item.displayName}
//                 </Text>
//                 {item.phoneNumbers[0]!==undefined?
//                 <Text style={styles.phones}>{item.phoneNumbers[0].number}</Text>
//                 :null} 
//                 {item.hasthumbnail ?
//                   <Image style={{ width: 10, height: 10 }} source={item.thumbnailPath} />
//                   : null}
//               </View>
//             )}
//             keyExtractor={(item, index) => index}
//           />
//           : null} */}
//           <View style={{backgroundColor:'#A47CC3',
//           width:250,height:350,borderRadius:30,}}>
//           <View style={{backgroundColor:'#fff',
//           width:250,height:350,
//           borderTopStartRadius:130,
//           borderBottomRightRadius:130,
//           borderRadius:30,
//         //   borderEndWidth:1,
//         //   borderStartWidth:1,
//         //   borderTopWidth:1,
//         //   borderBottomWidth:1,
//         //   borderTopColor:'#640093',
//         //   borderBottomColor:'#640093',
//         //   borderEndColor:'#640093',
//         //   borderStartColor:'#640093',
//           }}>
        
         
//           </View>
//           </View>
          
         
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//     marginTop:30,
//     justifyContent:'center',
//     alignContent:'center',
//     alignItems:'center'
//   },
//   phones: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   contact_details: {
//     textAlign: 'center',
//     color: 'red',
//     margin: 10,
//   },
// });

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'


class Contactlist extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['rgba(255, 164, 164, 1)', 'rgba(255, 169, 169, 0.73)', 'rgba(255, 180, 180, 0)' ]}
          style={styles.linearGradient}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <Text>horizontal Gradient</Text>
        </LinearGradient>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'cyan'
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 100,
    width: 348,
    elevation:50
  },
})
export default Contactlist