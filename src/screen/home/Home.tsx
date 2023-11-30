import { FlatList, Text, View } from "react-native";
import HeaderBarSimpleTitle from '../../viewComponents/HeaderBarSimpleTitle';
import ItemKeeps from '../../viewComponents/ItemKeeps';
import Style from '../../viewComponents/Main.basic.style';
import React, {useCallback, useEffect, useState} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HomeScreen = ({navigation}: any) => {

  return (
    <View style={Style.contrainer}>
      {}
      <HeaderBarSimpleTitle title={'NotesThis'} />
      <Text>This is home screen, in visible notes in saved to local and remote</Text>

    </View>
  );
};

export default HomeScreen;
