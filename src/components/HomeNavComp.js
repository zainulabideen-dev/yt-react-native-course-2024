import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function HomeNavComp({image, text, onSelected}) {
  return (
    <TouchableOpacity onPress={() => onSelected(text)}>
      <View
        style={{
          backgroundColor: '#f0f4f3',
          paddingHorizontal: 10,
          alignItems: 'center',
          borderRadius: 5,
          height: 100,
          width: 80,
          justifyContent: 'space-between',
          paddingBottom: 10,
          marginBottom: 10,
        }}>
        <Image
          style={{
            width: 55,
            height: 55,
            resizeMode: 'contain',
          }}
          source={image}
        />
        <Text style={{color: 'black', textAlign: 'center'}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
