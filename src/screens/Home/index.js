import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeNavComp from '../../components/HomeNavComp';
import {homeNavList} from '../../assets/local';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          padding: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#021746',
                paddingVertical: 10,
                paddingHorizontal: 17,
                flexDirection: 'row',
                borderRadius: 20,
                alignItems: 'center',
              }}>
              <View style={{backgroundColor: 'white', borderRadius: 5}}>
                <Image
                  style={{
                    width: 18,
                    height: 18,
                  }}
                  source={require('../../assets/careem-logo.png')}
                />
              </View>
              <Text
                style={{
                  color: 'white',
                  marginLeft: 10,
                  fontWeight: '700',
                  fontSize: 13,
                }}>
                Pay
              </Text>
            </View>
          </View>
          <View>
            <Image
              style={{
                width: 80,
                resizeMode: 'contain',
              }}
              source={require('../../assets/careem-logo-text.jpeg')}
            />
          </View>
          <View>
            <View
              style={{
                backgroundColor: '#00352d',
                width: 40,
                height: 40,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Ionicons name="reorder-three" size={20} color={'white'} />
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {homeNavList.map((item, index) => {
            return (
              <HomeNavComp key={index} image={item.image} text={item.label} />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}
