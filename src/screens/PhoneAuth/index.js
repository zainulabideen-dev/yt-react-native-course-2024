import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CountryCodesMd from '../../modal/CountryCodesMd';

export default function PhoneAuthScreen({navigation}) {
  const [mdVisible, setMdVisible] = useState(false);
  const [countryCode, setCountryCode] = useState({
    country: 'Afghanistan',
    code: '+93',
    emoji: '🇦🇫',
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <CountryCodesMd
        show={mdVisible}
        hideModal={() => setMdVisible(false)}
        onSelected={item => {
          setCountryCode(item);
          setMdVisible(false);
        }}
      />
      <View style={{flex: 0.5, padding: 15}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              borderColor: '#aab7b8',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <EvilIcons name="chevron-left" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              borderColor: '#aab7b8',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialIcons name="headphones" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingVertical: 20,
          }}>
          <Text
            style={{
              fontSize: 25,
              color: 'black',
              fontWeight: '300',
              marginBottom: 5,
            }}>
            Welcome!{'\n'}What's your number?
          </Text>
          <Text>We need to send you a code to verify your phone number.</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: 'black',
          }}>
          <TouchableOpacity onPress={() => setMdVisible(!mdVisible)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{marginRight: 10}}>{countryCode.emoji}</Text>
              <FontAwesome name="caret-down" size={20} color="#aab7b8" />
              <Text style={{color: 'black', marginLeft: 10}}>
                {countryCode.code}
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              marginLeft: 10,
            }}>
            <TextInput
              placeholder="enter your number"
              keyboardType="phone-pad"
            />
          </View>
        </View>
      </View>
      <View style={{flex: 0.5, justifyContent: 'flex-end', padding: 15}}>
        <View
          style={{
            backgroundColor: '#d5dbdb',
            padding: 15,
            borderRadius: 25,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '700',
              color: '#aab7b8',
            }}>
            Continue
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
