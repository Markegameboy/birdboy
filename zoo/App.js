import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>navbar? this is a zoo, moo</Text>
      <StatusBar style="auto" />    
      <View style={styles.container2}>
      <Text>image/video</Text>
      <StatusBar style="auto" />    
    </View>
    <View style={styles.container3}>
      <Text>section 2</Text>
      <StatusBar style="auto" />    
    </View>
    <View style={styles.container4}>
      <Text>Footer</Text>
      <StatusBar style="auto" />    
    </View>
      
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#53A2BE',
    alignItems: 'center',
    justifyContent: 'center',
    height: 780
  
  },
  container2: {
    backgroundColor: '#8E5491',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    height: 300
  },
  container3: {
    backgroundColor: '#78A271',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    height: 230
  },
  container4: {
    backgroundColor: '#CE3749',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    height: 150
  },
  
  

});


