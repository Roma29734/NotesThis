import { Text, View } from "react-native";
import Style from "../../viewComponents/Main.basic.style";
import HeaderBarSimpleTitle from "../../viewComponents/HeaderBarSimpleTitle";
import React from "react";

const RemoteScreen = ({navigation}: any) => {

  return (
    <View style={Style.contrainer}>
      {}
      <HeaderBarSimpleTitle title={'NotesThis'} />
      <Text>This is remote screen, in visible notes in saved remote</Text>

    </View>
  );
};

export default RemoteScreen;
