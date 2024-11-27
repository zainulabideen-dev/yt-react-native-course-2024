import {View, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {getAsyncLocalData} from '../../config/localStorage';
import {localAsyncKeys} from '../../assets/local';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      checkUserLoggedIn();
    }, 2000);
  }, []);

  async function checkUserLoggedIn() {
    //JSON.parse(jsonValue)
    const user = await getAsyncLocalData(localAsyncKeys.user);
    if (user) navigation.navigate('HomeScreen');
    else navigation.navigate('SignInScreen');
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#37b44e',
      }}>
      <StatusBar backgroundColor={'#37b44e'} />
      <Image
        style={{
          width: 100,
          height: 100,
        }}
        source={require('../../assets/logo.png')}
      />
    </View>
  );
}
