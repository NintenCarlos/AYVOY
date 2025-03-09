import React from 'react';
import { Text, View } from 'react-native';
import HomeStyle from './styles/HomeStyle';

const Home = () => {
  return (
    <View style={HomeStyle.container}>
      <View style={HomeStyle.contentContainer}>
        <Text style={HomeStyle.title}>Try editing me! 🎉</Text>
      </View>
    </View>
  );
};

export default Home;
