import { ActivityIndicator, Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeaderBarSimpleTitle from "../../viewComponents/HeaderBarSimpleTitle";
import React, { useEffect, useState } from "react";
import { COLORS, UIColor, useThemeColor } from "../../assets/Theme";
import { getRelationUser } from "../../data/remoteData/RemoteQuery";
import ItemKeeps from "../../viewComponents/ItemKeeps";
import { useIsFocused } from "@react-navigation/native";
import { getStateUserObjectId } from "../../data/localData/MmkvStorageData";

const RemoteScreen = ({ navigation }: any) => {

  const colorTheme = useThemeColor();
  const styleComponent = styles(colorTheme);
  const isFocused = useIsFocused();
  // Insert the user token here
  const { items, isLoading } = getRelationUser(`${getStateUserObjectId()}`, isFocused);
  const [visibleIlustrToDo, setVisibleIlustrToDo] = useState(false);

  useEffect(() => {
    // @ts-ignore
    const itemsLength: number = Array.isArray(items) ? items.length : 0;
    if(itemsLength === 0) {
      setVisibleIlustrToDo(true);
    } else {
      setVisibleIlustrToDo(false);
    }
    console.log(itemsLength);
  }, [items]);

  return (
    <View style={styleComponent.contrainer}>
      <HeaderBarSimpleTitle title={"Remote Notes"} />


      {visibleIlustrToDo
        && <View
          style={{
            position: "absolute",
            bottom: 0,
            top: 0,
            start: 0,
            end: 0,
            justifyContent: "center", alignItems: "center"
          }}
        >

          <Image source={require("../../assets/image/add_note_ilustr_ico.png")}
                 style={{ width: 100, height: 100, tintColor: colorTheme.TextAssistant }} />

          <Text style={{color: colorTheme.TextAssistant}}>Create the first note, click on the + button</Text>

        </View>

      }

      <FlatList
        data={items}
        renderItem={({ item })  =>
        <TouchableOpacity onPress={() => navigation.navigate("DetailRemoteNote", { transmittedTodoItemRemote: item })}>
          <ItemKeeps valueTitle={item.title} createData={item.createData}/>
        </TouchableOpacity>
      }
        style={styleComponent.FlatListMain}
      />

      {isLoading && <ActivityIndicator size={"large"} style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,}} />}

      <TouchableOpacity style={styleComponent.buttonCreate} onPress={() => navigation.navigate("AddRemoteNote")}>
        <Image
          source={require("../../assets/image/ic_plus_white.png")}
          style={styleComponent.Image}
        />
      </TouchableOpacity>

    </View>
  );
};
const { height, width } = Dimensions.get("window");
const styles = (color: UIColor) => StyleSheet.create({
  contrainer: {
    flex: 1,
    marginBottom: 80,
    backgroundColor: color.BackgroundMain
  },
  buttonCreate: {
    width: 48,
    height: 48,
    position: "absolute",
    bottom: 32,
    end: 16,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.BlackMain
  },
  Image: {
    margin: 8,
    flex: 1,
    alignItems: "center"
  },
  FlatListMain: {
    height: height
  },
  loadingAlert: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default RemoteScreen;
