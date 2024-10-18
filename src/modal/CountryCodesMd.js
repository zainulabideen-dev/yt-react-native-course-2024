import {View, Text, Modal} from 'react-native';
import React from 'react';

export default function CountryCodesMd() {
  return (
    <Modal transparent={true} visible={false}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.25)',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 15,
          }}>
          <Text>Loading data please wait...</Text>
        </View>
      </View>
    </Modal>
  );
}
