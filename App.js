
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <View style={{ margin: 200, borderWidth: 3, backgroundColor: 'lightgray'}}>
         <StatusBar style= "auto" />
         <View style={styles.outerCloumn}>
            <Text style={{fontSize: 20, fontWeight:'bold', marginLeft: 15, marginTop: 10 }}>Column</Text>
          <View style={styles.boxcontainerColumn}>
            <View style={[styles.boxStyle, styles.box1Style]}>
              <Text style={{fontSize: 20}}>Child</Text>
            </View>
             <View style={[styles.boxStyle, styles.box2Style]}>
                <Text style={{fontSize: 20}}>Child</Text>
              </View>
              <View style={[styles.boxStyle, styles.box3Style]}>
                <Text style={{fontSize: 20}}>Child</Text>
             </View>
            </View> 
          </View>

           <View style={styles.outerBoxrow}>
            <Text style={{fontSize: 20, fontWeight:'bold', marginLeft: 15, marginTop: 10}}>Row</Text>
            <View style={styles.boxcontainerRow}>
              <View style={[styles.boxStyle, styles.box1Style]}>
                <Text style={{fontSize: 20}}>Child</Text>
              </View>
              <View style={[styles.boxStyle, styles.box2Style]}>
                <Text style={{fontSize: 20}}>Child</Text>
              </View>
              <View style={[styles.boxStyle, styles.box3Style]}>
                <Text style={{fontSize: 20}}>Child</Text>
             </View>
            </View> 
          </View>

        </View>
     
     
  );
}

const styles = StyleSheet.create ({
boxcontainerRow: {
  flexDirection: 'row', // the main axis
  justifyContent: 'space-around', //y-axis try space-around
  alignItems: 'center', //x-axis 
  padding: 30,

},  

boxcontainerColumn: {
  flexDirection: 'column', // the main axis
  justifyContent: 'space-around', //y-axis try space-around
  alignItems: 'center', //x-axis  
  padding: 30,

}, 


outerBoxrow: {
  borderWidth: 2,
  width: 650,
  height: 225,
  alignSelf: 200,
  marginBottom: 30,
  marginHorizontal: 30,

},

outerCloumn: {
 borderWidth: 2,
  width: 250,
  height: 600,
  marginHorizontal: 30,
  marginBottom: 30,
  marginTop: 30,
  


},


boxStyle: {
  with: 80,
  height: 80,
  borderWidth: 2,
  padding: 65,
  marginBottom: 50,
  
},

box1Style: {
  fontSize: 20,
  fontWeight: 'bold',
  backgroundColor: 'dodgerblue',
  
  
  
  // justifyContent: 'center',
  // alignItems: 'center',

},

box2Style: {
  backgroundColor: 'pink',
  // justifyContent: 'center',
  // alignItems: 'center',
},

box3Style: {
  backgroundColor: 'cyan',
  // justifyContent: 'center',
  // alignItems: 'center',
}

})