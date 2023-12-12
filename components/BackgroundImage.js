import { View, ImageBackground, Text, StyleSheet,KeyboardAvoidingView,ScrollView } from 'react-native';



const BackgroundImage = ({children}) => {
  return (
    
    <View>
      <ImageBackground source={require('../assets/Doctor_photo.png')} style={styles.image} /> 
      <View style={{position:'absolute' }}>  
        {children}
      </View>
    </View>
  
  );
};

const styles = StyleSheet.create({

  image: {
    height:320,
    maxWidth:'100%',
    position:'relative',
    // paddingLeft:10,
    padding:20,
    // marginHorizontal:20
    // marginBottom:-20, 
    resizeMode:'cover'
    
  },

});

export default BackgroundImage;
