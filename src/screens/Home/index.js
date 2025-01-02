import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeNavComp from '../../components/HomeNavComp';
import {addsImages, homeNavList, topOfferImages} from '../../assets/local';

export default function HomeScreen({navigation}) {
  function onHomeNavPress(text) {
    if (text == 'Car') navigation.navigate('BookRideScreen');
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
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
              <HomeNavComp
                key={index}
                image={item.image}
                text={item.label}
                onSelected={text => onHomeNavPress(text)}
              />
            );
          })}
        </View>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 5,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: '700',
            }}>
            Top Offers
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              marginTop: 10,
            }}>
            {topOfferImages.map((item, index) => {
              return (
                <Image
                  style={{
                    width: 200,
                    height: 250,
                    resizeMode: 'contain',
                  }}
                  key={index}
                  source={item.image}
                />
              );
            })}
          </ScrollView>
          <ScrollView
            horizontal
            style={{
              marginTop: 10,
            }}>
            {addsImages.map((item, index) => {
              return (
                <Image
                  style={{
                    resizeMode: 'contain',
                    width: 340,
                    height: 160,
                  }}
                  key={index}
                  source={item.image}
                />
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
