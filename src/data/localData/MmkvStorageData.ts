import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();


export const saveStateThemeAppData = (value: string) => {
  storage.set('app-theme-state-key', `${value}`)
};

export const getStateThemeAppData = (): string => {
  try {
    const themeState = storage.getString('app-theme-state-key')
    if(themeState == undefined) {
      return 'system';
    } else  {
      return themeState;
    }
  } catch (e) {
    console.log(`getStateThemeAppData error ${e}`)
    return 'system';
  }
}


// Old version in asyncStorage

// export const saveStateThemeAppData = async (value: string) => {
//   try {
//     await AsyncStorage.setItem("app-theme-state-key", value);
//     console.log(`successfully added themeKey ${value}`)
//   } catch (e) {
//     console.log(`error in saveStateThemeAppData ${e} `);
//   }
// };
//
//
// export const getStateThemeAppDataSync = (): string => {
//   try {
//     const value = AsyncStorage.getItem('app-theme-state-key');
//     if (value != null) {
//       // value previously stored
//        value.then(code => {
//         // @ts-ignore
//          console.log(code)
//          return code
//       });
//     } else  {
//       return 'system';
//     }
//   } catch (e) {
//     // error reading value
//     return 'system';
//   }
// };
