import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import TextList from '../screens/TextList';
import {NavigationContainer} from '@react-navigation/native';
import BookDetail from '../screens/BookDetail';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../style/style';
import CoverList from '../screens/CoverList';
import {linking} from '../helpers/linking';
import {TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: colors.primary,
      inactiveTintColor: 'gray',
    }}
    barStyle={{backgroundColor: '#fff'}}
    initialRouteName="Cover View">
    <Tab.Screen
      name="Cover View"
      component={CoverList}
      options={{
        tabBarButton: (props) => (
          <TouchableOpacity {...props}></TouchableOpacity>
        ),
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="image-edit" color={color} size={30} />
        ),
      }}
    />
    <Tab.Screen
      name="Text View"
      component={TextList}
      options={{
        tabBarButton: (props) => (
          <TouchableOpacity {...props}></TouchableOpacity>
        ),
        tabBarIcon: ({color, size}) => {
          return (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color={color}
              size={30}
            />
          );
        },
      }}
    />
  </Tab.Navigator>
);

export const AppStack = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}>
        <Stack.Screen name="TabStack" component={TabNavigator} />
        <Stack.Screen name="BookDetail" component={BookDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
