import React from 'react';
import { decrement, increment, RootState } from '.././store';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, Button } from 'react-native';

export const Counter: React.FC = () => {
  // The `state` arg is correctly typed as `RootState` already
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
};
