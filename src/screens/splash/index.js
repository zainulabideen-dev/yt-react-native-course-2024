import {View, Image, StatusBar} from 'react-native';
import React from 'react';

export default function SplashScreen() {
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
