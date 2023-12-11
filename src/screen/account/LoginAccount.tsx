import {
  ActivityIndicator,
  Alert,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import {UIColor, useThemeColor } from "../../assets/Theme";
import React, { useState } from "react";
import axios from "axios";
import { Application_Id, REST_API_Key } from "../../../Keys";
import {
  saveStateUserSessionToken,
  saveStateUserObjectId,
  saveStateUserName,
  getStateUserName
} from "../../data/localData/MmkvStorageData";


export const LoginAccountScreen = ({ navigation }: any) => {



  const [textInputName, onChangeTextInputName] = useState("");
  const [textInputPassword, onChangeTextInputPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const colorTheme = useThemeColor();
  const styleComponent = styles(colorTheme);

  const checkInputData = (): boolean => {
    if (!textInputName.trim()) {
      return false;
    } else {
      if (!textInputPassword.trim()) {
        return false;
      } else {
        return true;
      }
    }
  };

  if(getStateUserName() != null) {
    navigation.push('tabNav', {overrideBackPress: true})
  }


  const singIn = () => {
    setIsLoading(true);
    let data = JSON.stringify({
      "username": textInputName,
      "password": textInputPassword
    });

    axios.post(`https://parseapi.back4app.com/login`, `${data}`, {
      headers: {
        "X-Parse-Application-Id": Application_Id,
        "X-Parse-REST-API-Key": REST_API_Key,
        "Content-Type": "application/json"
      }
    }).then(({ data }) => {
      console.log(data);
      saveStateUserName(data.username)
      saveStateUserObjectId(data.objectId)
      saveStateUserSessionToken(data.sessionToken)
      navigation.navigate('tabNav')
    }).catch(err => {
      console.log(err.response.status);
      if (err.response.status == "404") {
        Alert.alert("Authorization Error", "Invalid Login Information");
      } else if (err.response.status == "401") {
        Alert.alert("Authorization Error", "Invalid Login Information");
      } else if (err.response.status == "400") {
        Alert.alert("Authorization Error", "Invalid Login Information");
      } else if (err.response.status == "500") {
        Alert.alert("Server Error", "An error occurred on the server, please try again later");
      } else if (err.response.status == "429") {
        Alert.alert("Server Error", "Too many requests, try again later");
      }
    }).finally(() => {
        setIsLoading(false);
      }
    );
  };

  return (
    <SafeAreaView style={styleComponent.mainContainer}>


      <Text style={styleComponent.textLogin}>Login</Text>

      <View style={styleComponent.viewInput}>
        <TextInput
          value={textInputName}
          onChangeText={onChangeTextInputName}
          placeholder="Type your name"
          style={styleComponent.textInput}
          maxLength={15}
          onSubmitEditing={() => { // @ts-ignore
            this.passwordTextInput.focus();
          }}
          blurOnSubmit={false}
          keyboardType="name-phone-pad"
        />

      </View>

      <View style={styleComponent.viewInput}>
        <TextInput
          value={textInputPassword}
          onChangeText={onChangeTextInputPassword}
          placeholder="Type your password"
          style={styleComponent.textInput}
          ref={(input) => { // @ts-ignore
            this.passwordTextInput = input;
          }}
          secureTextEntry={true}
          maxLength={15}
        />
      </View>

      <TouchableOpacity style={styleComponent.buttonSingIn} onPress={() => {
        if (checkInputData()) {
          singIn();
        } else {
          Alert.alert("Fields are not filled in", "Please fill in all the fields for a successful login");
        }

      }}>
        <Text style={styleComponent.textButtonSingIn}>Sing in</Text>
      </TouchableOpacity>


      {isLoading &&
        <ActivityIndicator size={"large"} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }} />}
    </SafeAreaView>
  );
};

const { height, width } = Dimensions.get("window");
const styles = (color: UIColor) => StyleSheet.create({
  mainContainer: {
    backgroundColor: color.BackgroundMain,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  textLogin: {
    fontSize: 24,
    color: color.TextAssistant
  },
  viewInput: {
    width: width - 64,
    marginTop: 16,
    borderRadius: 16,
    backgroundColor: color.Accent
  },
  textInput: {
    fontSize: 18,
    marginTop: 8,
    marginBottom: 8,
    marginStart: 8,
    color: color.TextAssistant
  },
  buttonSingIn: {
    marginTop: 24,
    width: width - 64,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    backgroundColor: color.Accent
  },
  textButtonSingIn: {
    fontSize: 18,
    color: color.TextAssistant,
    marginTop: 16,
    marginBottom: 16
  }
});
