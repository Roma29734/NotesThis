import { ActivityIndicator, Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeaderBarSimpleTitle from "../../viewComponents/HeaderBarSimpleTitle";
import React, { useEffect } from "react";
import { COLORS, UIColor, useThemeColor } from "../../assets/Theme";
import { getRelationUser } from "../../data/remoteData/RemoteQuery";
import ItemKeeps from "../../viewComponents/ItemKeeps";

const RemoteScreen = ({ navigation }: any) => {

  const colorTheme = useThemeColor();
  const styleComponent = styles(colorTheme);

  // Insert the user token here
  const { items, isLoading } = getRelationUser("token");

  if (isLoading) {
    return (
      <View style={styleComponent.contrainer}>
        <HeaderBarSimpleTitle title={"NotesThis"} />
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <View style={styleComponent.contrainer}>
      <HeaderBarSimpleTitle title={"NotesThis"} />

      <FlatList
        data={items}
        renderItem={({ item })  =>
        <TouchableOpacity>
          <ItemKeeps valueTitle={item.title} createData={item.createData}/>
        </TouchableOpacity>
      }
        style={styleComponent.FlatListMain}
      />


      <TouchableOpacity style={styleComponent.buttonCreate} onPress={() => navigation.navigate("AddNotes")}>
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
    height: height - 160
  },
  loadingAlert: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default RemoteScreen;
