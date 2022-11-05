import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {About, Company, Reviews} from './screens';
import {NavigationContainer} from '@react-navigation/native';
import {ChevronLeftIcon, HeartIcon} from 'react-native-heroicons/outline';
import {CustomButton, SeniorProductDesign} from './components';

const App = () => {
  const [titleName, setTitleName] = useState('Home');

  const Tab = createMaterialTopTabNavigator();

  return (
    <NavigationContainer>
      <SafeAreaView>
        <View className="flex-row justify-between px-5 items-center">
          <View className="p-2 border self-end border-gray-300 rounded-full">
            <ChevronLeftIcon color={'black'} />
          </View>
          <Text className="text-lg font-semibol">{titleName}</Text>
          <View className="p-2 border self-end border-gray-300 rounded-full">
            <HeartIcon color={'black'} />
          </View>
        </View>
        <View className="h-full">
          <SeniorProductDesign />
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: '#6739B6',
              tabBarInactiveTintColor: 'gray',
              tabBarIndicatorStyle: {
                backgroundColor: '#6739B6',
                height: 3,
              },
              tabBarScrollEnabled: false,
              tabBarLabelStyle: {
                fontSize: 13,
                fontWeight: 'bold',
                justifyContent: 'center',
                alignItems: 'center',
              },
            }}>
            <Tab.Screen name="about" component={About} />
            <Tab.Screen name="company" component={Company} />
            <Tab.Screen name="reviews" component={Reviews} />
          </Tab.Navigator>
          <CustomButton text={'Hello'} className="z-50" />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
