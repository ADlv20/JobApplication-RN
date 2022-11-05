import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  CurrencyDollarIcon,
  MapPinIcon,
  ClockIcon,
} from 'react-native-heroicons/outline';

const SeniorProductDesign = () => {
  return (
    <View className="space-y-6">
      <View className="items-center">
        <Image
          source={require('../assets/g.jpeg')}
          style={{width: 100, height: 100}}
        />
        <Text className="font-bold text-lg">Senior Product Design</Text>
        <Text className="text-gray-500">Gogle</Text>
      </View>

      <View className="flex justify-center bg-white mx-4 rounded-lg flex-row space-x-8 px-5 py-5 border border-gray-200 items-center">
        <View className="items-center space-y-2">
          <MapPinIcon color={'#00CDBC'} />
          <Text>HongKong</Text>
        </View>
        <View className="items-center space-y-2">
          <CurrencyDollarIcon fill={'#FB8B82'} color={'white'} />
          <Text>25 - 50K /month</Text>
        </View>
        <View className="items-center space-y-2">
          <ClockIcon fill={'rgb(250,204,21)'} color="white" />
          <Text>Full Time</Text>
        </View>
      </View>
    </View>
  );
};

export default SeniorProductDesign;
