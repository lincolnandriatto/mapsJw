import firebase from "firebase";
import {
  API_KEY,
  AUTH_DOMAIN,
  DATA_BASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MENSSAGE_SENDER_ID,
  APPID,
  MEASUREMENT_ID
} from "react-native-dotenv";

class Fire {
  constructor() {
    this.init();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        databaseURL: DATA_BASE_URL,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MENSSAGE_SENDER_ID,
        appId: APPID,
        measurementId: MEASUREMENT_ID
      });
    }
  };

  off() {
    firebase
      .database()
      .ref("users")
      .off();
  }

  getValue = callBack => {
    this.db().on("value", data => callBack(JSON.stringify(data)));
  };

  db() {
    return firebase.database().ref("mapas");
  }
}

export default new Fire();
