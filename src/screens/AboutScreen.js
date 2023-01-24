import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AboutScreen = () => {
  return (
    <View >
      <Text>About</Text>
      <Image style={styles.imageStyle} source={require('../../assets/soldiers.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain'
  }
});

export default AboutScreen;
