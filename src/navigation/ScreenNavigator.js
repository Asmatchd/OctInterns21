import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUp} from '../screens/signUp';
import {Basics} from '../screens/basics';
import {BasicsTwo} from '../screens/basicsTwo';
import {Dashboard} from '../screens/dashboard';
import {EditProfile} from '../screens/editProfile/EditProfile';
import {ColumnList, DetailsScreen, List, MultiList} from '../screens/list';
import {Settings} from '../screens/settings';
import {DrawerNavigator} from './DrawerNavigator';

const Stack = createNativeStackNavigator();

export const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="List"
          component={List}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MultiList"
          component={MultiList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ColumnList"
          component={ColumnList}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Basics"
          component={Basics}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BasicsTwo"
          component={BasicsTwo}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
