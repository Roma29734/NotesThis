import { MMKV } from "react-native-mmkv";
import Permissions from "react-native-permissions";
import { launchImageLibrary} from "react-native-image-picker";

export const storage = new MMKV();

const themeAppKey = "app-theme-state-key";
const userNameKey = "app-auth-user-name-key";
const userObjectIdKey = "app-auth-user-object-id-key";
const userSessionTokenKey = "app-auth-user-session-token-key";
const userAvatarImageTokenKey = 'app-user-avatar-image-key'
const languageAppKey = "app-language-state-key";

export const saveStateThemeAppData = (value: string) => {
  storage.set(themeAppKey, `${value}`);
};

export const clearAppData = () => {
  storage.clearAll();
};

export const getStateThemeAppData = (): string => {
  try {
    const themeState = storage.getString(themeAppKey);
    if (themeState == undefined) {
      return "system";
    } else {
      return themeState;
    }
  } catch (e) {
    console.log(`getStateThemeAppData error ${e}`);
    return "system";
  }
};

// From aut service

// userName
export const saveStateUserName = (userName: string) => {
  storage.set(userNameKey, userName);
};

export const getStateUserName = (): string | null => {
  try {
    const appAuthUserNameState = storage.getString(userNameKey);
    if (appAuthUserNameState == undefined) {
      return null;
    } else {
      return appAuthUserNameState;
    }
  } catch (err) {
    console.log(`getStateUserName ${err}`);
    return null;
  }
};

// userObjectId

export const saveStateUserObjectId = (userName: string) => {
  storage.set(userObjectIdKey, userName);
};

export const getStateUserObjectId = (): string | null => {
  try {
    const appAuthUserNameState = storage.getString(userObjectIdKey);
    if (appAuthUserNameState == undefined) {
      return null;
    } else {
      return appAuthUserNameState;
    }
  } catch (err) {
    console.log(`getStateUserObjectId ${err}`);
    return null;
  }
};

// userSessionToken
export const saveStateUserSessionToken = (userName: string) => {
  storage.set(userSessionTokenKey, userName);
};

export const getStateUserSessionToken = (): string | null => {
  try {
    const appAuthUserNameState = storage.getString(userSessionTokenKey);
    if (appAuthUserNameState == undefined) {
      return null;
    } else {
      return appAuthUserNameState;
    }
  } catch (err) {
    console.log(`getStateUserSessionToken ${err}`);
    return null;
  }
};

// userAvatarImage
export const saveUserAvatarImage = (userAvatarUri: string) => {
  storage.set(userAvatarImageTokenKey, userAvatarUri);
};

export const getUserAvatarImage = (): string | null => {
  try {
    const userAvatarUri = storage.getString(userAvatarImageTokenKey);
    if (userAvatarUri == undefined) {
      return null;
    } else {
      return userAvatarUri;
    }
  } catch (err) {
    console.log(`getStateUserSessionToken ${err}`);
    return null;
  }
};


// userAvatarImage
export const saveLanguageState = (languageState: string) => {
  storage.set(languageAppKey, languageState);
};

export const getLanguageState = (): string | null => {
  try {
    const languageState = storage.getString(languageAppKey);
    if (languageState == undefined) {
      return null;
    } else {
      return languageState;
    }
  } catch (err) {
    console.log(`getLanguageState ${err}`);
    return null;
  }
};
