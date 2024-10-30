import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CountryCodesMd from '../../modal/CountryCodesMd';
import {_apiSendOtp} from '../../config/api';
import NavHeaderComp from '../../components/NavHeaderComp';

export default function PhoneAuthScreen({navigation}) {
  const [mdVisible, setMdVisible] = useState(false);
  const [number, setNumber] = useState('');
  const [continueOtpEnabled, setContinueOtpEnabled] = useState(false);
  const [countryCode, setCountryCode] = useState({
    country: 'Pakistan',
    code: '+92',
    emoji: '🇵🇰',
  });

  async function sendOtp() {
    // await _apiSendOtp();
    navigation.navigate('VerifyOTPScreen', {
      phone: countryCode.code + '' + number,
    });
  }

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
        <NavHeaderComp navigation={navigation} />
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
              onChangeText={text => {
                setNumber(text);
                if (text.length >= 9) setContinueOtpEnabled(true);
                else setContinueOtpEnabled(false);
              }}
            />
          </View>
        </View>
      </View>
      <View style={{flex: 0.5, justifyContent: 'flex-end', padding: 15}}>
        <TouchableOpacity onPress={() => sendOtp()}>
          <View
            style={{
              backgroundColor: continueOtpEnabled ? '#37b44e' : '#d5dbdb',
              padding: 15,
              borderRadius: 25,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '700',
                color: continueOtpEnabled ? 'white' : '#aab7b8',
              }}>
              Continue
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
