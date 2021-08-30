import React from 'react';
import { View, Text } from 'react-native';
import { Counter } from '../components';

export const HomeScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Home</Text>
      <Counter />
    </View>
  );
};
