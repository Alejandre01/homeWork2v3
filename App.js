
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <View style={{flex: 1,  alignItems: 'flex-start', justifyContent: 'center',
       borderWidth: 3, backgroundColor: 'aliceblue', marginLeft: 2, marginRight: 2, marginTop: 2, marginBottom: 2}}>
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
              <StatusBar style= "auto" />
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
  padding: 10,


}, 


outerBoxrow: {
  borderWidth: 2,
  width: 325,
  height: 200,
  marginBottom: 30,
  marginHorizontal: 30,

},

outerCloumn: {
 borderWidth: 2,
  width: 200,
  height: 400,
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
  
  fontWeight: 'bold',
  backgroundColor: 'lightgray',
  padding: 15,

},

box2Style: {
  fontWeight: 'bold',
  backgroundColor: 'lightgray',
  padding: 15,

},

box3Style: {
  fontWeight: 'bold',
  backgroundColor: 'lightgray',
  padding: 15,
  

},

});