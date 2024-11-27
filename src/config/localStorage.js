import AsyncStorage from '@react-native-async-storage/async-storage';

export const asyncStoreDataLocally = async (key, value) => {
  let valueStored = false;
  try {
    await AsyncStorage.setItem(key, value);
    console.log(`=> Success Async Value stored in ${key}`);
    valueStored = true;
  } catch (e) {
    console.log('=> Error Async', e);
  }
  return valueStored;
};

export const getAsyncLocalData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log('=> Error Async Getting Data', e);
  }
};
