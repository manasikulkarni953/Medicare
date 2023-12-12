import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { clearUserCredentials } from "../components/SessionHandling";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {

  const navigation = useNavigation();

  const [profileData, setProfileData] = useState({});

  // const logoutHandle = () => {
  //   navigation.navigate("Login");
  // };

  const handlePress = () => {
    clearUserCredentials();
    // logoutHandle();
    navigation.navigate("Login");
  };

  // const data = () => {
  //   AsyncStorage.getItem("ProfileKey");
  // };
  // console.log(data);

  // const data = AsyncStorage.getItem("ProfileKey");
  // console.log(data)

  const fetchData = async () => {
    try {
      const data = await AsyncStorage.getItem("ProfileKey");
      if (data !== null) {
        // Data retrieval was successful, update the state
        setProfileData(JSON.parse(data));
      } else {
        // Data is not available
        console.log("Data not found");
      }
    } catch (error) {
      // Error retrieving data
      console.error("Error retrieving data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Call this function to retrieve data from AsyncStorage
   
  }, []);

  console.log(profileData)
  


  return (
    <>
      <View style={styles.profileImage}>
        <View style={styles.placeholderImage}>
          <Image
            source={{
              uri: "https://media.istockphoto.com/id/491068153/photo/happy-male-student-on-college-campus.jpg?s=612x612&w=0&k=20&c=kP1MSnvpnPY0vugd4vL0VPtOuFkY9FrDeb1XcXxvP0o=",
            }}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
              borderRadius: 100,
            }}
          />
        </View>
      </View>

      {/*  my own code starts here  */}
      <View style={styles.main}>
        <View>
          <Text style={styles.Text}> First Name </Text>
          <TextInput
            // placeholder="Balaji"
            style={styles.input}
            value={profileData.firstName}
          />
        </View>

        <View>
          <Text style={styles.Text}> Last Name </Text>
          <TextInput
            // placeholder="Borude"
            style={styles.input}
             value={profileData.lastName}
          />
        </View>
      </View>

      <View style={styles.secondSec}>
        <View>
          <Text style={styles.Text}> UserName</Text>
          <TextInput
            //  placeholder="username"
            style={styles.input}
            editable={false}
            value={profileData.username}
          />
        </View>

        <View>
          <Text style={styles.Text}> Email</Text>
          <TextInput
            // placeholder="Email"
            style={styles.input}
             value={profileData.email}
          />
        </View>
      </View>

      <View style={styles.Viewbuttons}>
        <TouchableOpacity style={styles.Twobutton}>
          <Text>Update </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("CameraHomePage")}
          style={styles.Twobutton}
        >
          <Text>Back</Text>
        </TouchableOpacity>
      </View>

      <Button title="Logout" onPress={handlePress} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    marginTop: 15,
    height: 40,
    width: 150,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingLeft: 10,
    borderWidth: 100,
    color: "black",
  },
  Text: {
    fontSize: 20,
  },
  main: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  secondSec: {
    marginTop: 10,
    marginLeft: 25,
    flexDirection: "column",
    justifyContent: "center",
  },
  Viewbuttons: {
    marginVertical: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  Twobutton: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 8,
    
  },
  placeholderImage: {
    width: 100,
    height: 100,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    // borderColor:'red',
    borderRadius: 100,
  },
  profileImage: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  // Additional style for the static image
  staticImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default Profile;