import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, CreatePost, Notifications, Profile, Search } from '../screens';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { Image, View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route, navigation }) => {
          return {
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
              switch (route.name) {
                case 'Home':
                  return (
                    <Ionicons
                      name={`ios-home-${focused ? 'sharp' : 'outline'}`}
                      size={27}
                      color="black"
                    />
                  );
                case 'Search':
                  return (
                    <Ionicons
                      name={`ios-search-${focused ? 'sharp' : 'outline'}`}
                      size={27}
                      color="black"
                    />
                  );
                case 'CreatePost':
                  return <Octicons name="diff-added" size={27} color="black" />;
                case 'Notifications':
                  return (
                    <Ionicons
                      name={`ios-heart-${focused ? 'sharp' : 'outline'}`}
                      size={27}
                      color="black"
                    />
                  );
                case 'Profile':
                  const IMAGE_SIZE = focused ? 23 : 27;
                  return (
                    <View
                      style={{
                        padding: focused ? 2 : 0,
                        borderRadius: IMAGE_SIZE === 23 ? 27 : 23 / 2,
                        borderWidth: focused ? 1 : 0,
                        borderColor: 'black',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Image
                        style={{
                          width: IMAGE_SIZE,
                          height: IMAGE_SIZE,
                          borderRadius: IMAGE_SIZE / 2,
                        }}
                        source={{
                          uri: 'https://sebastiangarcia.dev/images/avatar.jpg',
                        }}
                      />
                    </View>
                  );
              }
            },
          };
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="CreatePost" component={CreatePost} />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
