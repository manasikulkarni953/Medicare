import AsyncStorage from '@react-native-async-storage/async-storage';


// Login kelyaver hr store hoil 
export const storeUserCredentials = async (token) => {
  try {
    await AsyncStorage.setItem('userToken', token);

    //comment 
    console.log('userData stored')

  } catch (error) {

    console.error('Error storing user credentials:', error);
  }
};




export const clearUserCredentials = async () => {
  try {
    await AsyncStorage.removeItem('userToken');

    console.log('session data clear')

  } catch (error) {
    console.error('Error clearing user credentials:', error);
  }
};



// jevha pn app realode hoil tevha he function call hoil 

// export const getUserCredentials = async () => {

//   try {
//     return await AsyncStorage.getItem('userToken');
    

//   } catch (error) {
    
//     console.error('Error getting user credentials:', error);
//     return null;
//   }
// };
