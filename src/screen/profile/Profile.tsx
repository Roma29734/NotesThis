import { Text, View } from "react-native";
import Style from "../../viewComponents/Main.basic.style";
import HeaderBarSimpleTitle from "../../viewComponents/HeaderBarSimpleTitle";
import React from "react";

const ProfileScreen = ({navigation}: any) => {

  return (
    <View style={Style.contrainer}>
      {}
      <HeaderBarSimpleTitle title={'NotesThis'} />
      <Text>This is profile screen, in visible yours profile in it app</Text>

    </View>
  );
};

export default ProfileScreen;
