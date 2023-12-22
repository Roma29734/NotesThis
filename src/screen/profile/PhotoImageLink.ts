import Permissions from "react-native-permissions";
import { launchImageLibrary } from "react-native-image-picker";
import { saveUserAvatarImage } from "../../data/localData/MmkvStorageData";


type OnClickFunction = () => void;

export const getPhotoInGallery = (onClick: OnClickFunction) => {
  console.log("start photo check")

  Permissions.check("android.permission.CAMERA").then(response => {
    console.log("start photo check")
    if (response === "granted") {
      console.log("granted first")
      getImageLibra(onClick)
    } else {
      Permissions.request("android.permission.CAMERA").then(response => {
        if (response === "granted") {
          console.log("granted two")
          getImageLibra(onClick)
        } else {
          console.log("permision pizdec")
        }
      });
    }
  });
};

const getImageLibra = (onClick: OnClickFunction) => {

  launchImageLibrary({
    mediaType: "photo"
  }, response => {
    if (!response.didCancel && !response.errorCode) {
      // @ts-ignore
      const selectedImageUri = response.assets[0].uri
      console.log(`selectedItem ${selectedImageUri}`)
      if(selectedImageUri != undefined) {
        saveUserAvatarImage(selectedImageUri)
        onClick();
      }
    } else {
      // Обработка случая, если пользователь не выбрал изображение или произошла ошибка
      console.log('Выбор изображения отменен или произошла ошибка');
    }
  });
};
