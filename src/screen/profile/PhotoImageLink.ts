import Permissions from "react-native-permissions";
import { launchImageLibrary } from "react-native-image-picker";
import { saveUserAvatarImage } from "../../data/localData/MmkvStorageData";

export const getPhotoInGallery = () => {
  console.log("start photo check")
  Permissions.check("android.permission.CAMERA").then(response => {
    console.log("start photo check")
    if (response === "granted") {
      console.log("granted first")
      getImageLibra()
    } else {
      Permissions.request("android.permission.CAMERA").then(response => {
        if (response === "granted") {
          console.log("granted two")
          getImageLibra()
        } else {
          console.log("permision pizdec")
        }
      });
    }
  });
};

const getImageLibra = () => {
  launchImageLibrary({
    mediaType: "photo"
  }, response => {
    if (!response.didCancel && !response.errorCode) {
      // @ts-ignore
      const selectedImageUri = response.assets[0].uri
      console.log(`selectedItem ${selectedImageUri}`)
      if(selectedImageUri != undefined) {
        saveUserAvatarImage(selectedImageUri)
      }
    } else {
      // Обработка случая, если пользователь не выбрал изображение или произошла ошибка
      console.log('Выбор изображения отменен или произошла ошибка');
    }
  });
};
