import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function NavHeaderComp({navigation}) {
  return (
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
  );
}
