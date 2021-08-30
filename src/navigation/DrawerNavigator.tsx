import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack } from './HomeStack';
import { StoriesScreen } from '../screens';

const Drawer = createDrawerNavigator();

export const DrawerNavigator: React.FC = () => (
  <Drawer.Navigator drawerPostition="right">
    <Drawer.Screen name="Home" component={HomeStack} />
    <Drawer.Screen name="Storybook" component={StoriesScreen} />
  </Drawer.Navigator>
);
