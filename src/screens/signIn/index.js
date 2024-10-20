import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import React from 'react';
import CountryCodesMd from '../../modal/CountryCodesMd';

export default function SignInScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CountryCodesMd />
      <View style={{flex: 1}}>
        <Image
          style={{
            width: '100%',
            height: Platform.OS === 'android' ? '100%' : '115%',
            objectFit: 'cover',
          }}
          source={require('../../assets/signIn.png')}
        />
        <View
          style={{
            backgroundColor: 'white',
            paddingHorizontal: 10,
            paddingBottom: 10,
            paddingTop: 30,
            position: 'absolute',
            width: '100%',
            bottom: 0,
            zIndex: 1,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PhoneAuthScreen')}>
            <View
              style={{
                backgroundColor: '#01e784',
                padding: 10,
                borderRadius: 20,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Continue with phone number
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 20,
                marginTop: 10,
                borderColor: '#d5d8dc',
                borderWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                }}
                source={require('../../assets/google.png')}
              />
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: 'black',
                  marginLeft: 10,
                }}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
