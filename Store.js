import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@' + key, jsonValue)
        //alert(jsonValue)
    } catch (e) {
        // saving error
    }
};

export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem('@' + key)
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        // error reading value
    }
};

export const setData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@' + key, jsonValue)
        //alert(jsonValue)
    } catch (e) {
        // saving error
    }
};

export const retrieveData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem('@' + key)
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        // error reading value
    }
};

export const RemoveLogin = async () => {
    try {
        const jsonValue = await AsyncStorage.clear()
        // return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        // error reading value
    }
}
  