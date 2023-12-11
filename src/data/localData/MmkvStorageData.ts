import { MMKV } from "react-native-mmkv";
export const storage = new MMKV();

const themeAppKey = 'app-theme-state-key'
const userNameKey = 'app-auth-user-name-key'
const userObjectIdKey = 'app-auth-user-object-id-key'
const userSessionTokenKey = 'app-auth-user-session-token-key'

export const saveStateThemeAppData = (value: string) => {
  storage.set(themeAppKey, `${value}`)
};

export const getStateThemeAppData = (): string => {
  try {
    const themeState = storage.getString(themeAppKey)
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

// From aut service

// userName
export const saveStateUserName = (userName: string) => {
  storage.set(userNameKey, userName)
}

export const getStateUserName = (): string | null => {
  try {
    const appAuthUserNameState = storage.getString(userNameKey)
    if(appAuthUserNameState == undefined) {
      return null
    } else {
      return appAuthUserNameState
    }
  } catch (err) {
    console.log(`getStateUserName ${err}`)
    return null
  }
}

// userObjectId

export const saveStateUserObjectId = (userName: string) => {
  storage.set(userObjectIdKey, userName)
}

export const getStateUserObjectId = (): string | null => {
  try {
    const appAuthUserNameState = storage.getString(userObjectIdKey)
    if(appAuthUserNameState == undefined) {
      return null
    } else {
      return appAuthUserNameState
    }
  } catch (err) {
    console.log(`getStateUserObjectId ${err}`)
    return null
  }
}

// userSessionToken
export const saveStateUserSessionToken = (userName: string) => {
  storage.set(userSessionTokenKey, userName)
}

export const getStateUserSessionToken = (): string | null => {
  try {
    const appAuthUserNameState = storage.getString(userSessionTokenKey)
    if(appAuthUserNameState == undefined) {
      return null
    } else {
      return appAuthUserNameState
    }
  } catch (err) {
    console.log(`getStateUserSessionToken ${err}`)
    return null
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
