import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {CustomButton} from '../components';

const About = () => {
  const onScreenLoad = () => {
    console.log('About Loaded');
  };

  useEffect(() => {
    onScreenLoad();
  }, [1]);

  return (
    <View className="">
      <ScrollView>
        <View className="p-4 bg-white">
          <Text className="font-semibold text-lg pt-4 pl-2 pb-3">
            Job Requirements
          </Text>
          <View>
            <View className="pl-3">
              <View className="flex-row space-x-2">
                <Text className="text-gray-500 font-bold text-lg">
                  {'\u2022'}
                </Text>
                <Text className="text-gray-500 pt-1">
                  Define and champion product vision and strategy for your
                  products.
                </Text>
              </View>
              <View className="flex-row space-x-2">
                <Text className="text-gray-500 font-bold text-lg">
                  {'\u2022'}
                </Text>
                <Text className="text-gray-500 pt-1">
                  Develop hypotheses, validate them, socialize insights,
                  forecast impact, build product roadmap, work with cross
                  functional teams to execute on the roadmap, measure impact and
                  gather & analyze user feedback to further inform the roadmap
                </Text>
              </View>
            </View>
          </View>

          <Text className="font-semibold text-lg pt-4 pl-2 pb-3">Benefits</Text>
          <View className="pl-3">
            <View className="flex-row space-x-2">
              <Text className="text-gray-500 font-bold text-lg">
                {'\u2022'}
              </Text>
              <Text className="text-gray-500 pt-1">
                Define and champion product vision and strategy for your
              </Text>
            </View>
          </View>
          <View className="pl-3">
            <View className="flex-row space-x-2">
              <Text className="text-gray-500 font-bold text-lg">
                {'\u2022'}
              </Text>
              <Text className="text-gray-500 pt-1">
                Define and champion product vision and strategy for your
              </Text>
            </View>
          </View>

          <View className="pl-3">
            <View className="flex-row space-x-2">
              <Text className="text-gray-500 font-bold text-lg">
                {'\u2022'}
              </Text>
              <Text className="text-gray-500 pt-1">
                Define and champion product vision and strategy for your
              </Text>
            </View>
          </View>

          <View className="pl-3">
            <View className="flex-row space-x-2">
              <Text className="text-gray-500 font-bold text-lg">
                {'\u2022'}
              </Text>
              <Text className="text-gray-500 pt-1">
                Define and champion product vision and strategy for your
              </Text>
            </View>
          </View>

          <View className="pl-3">
            <View className="flex-row space-x-2">
              <Text className="text-gray-500 font-bold text-lg">
                {'\u2022'}
              </Text>
              <Text className="text-gray-500 pt-1">
                Define and champion product vision and strategy for your
              </Text>
            </View>
          </View>

          <View className="pl-3">
            <View className="flex-row space-x-2">
              <Text className="text-gray-500 font-bold text-lg">
                {'\u2022'}
              </Text>
              <Text className="text-gray-500 pt-1">
                Define and champion product vision and strategy for your
              </Text>
            </View>
          </View>

          <View className="pl-3">
            <View className="flex-row space-x-2">
              <Text className="text-gray-500 font-bold text-lg">
                {'\u2022'}
              </Text>
              <Text className="text-gray-500 pt-1">
                Define and champion product vision and strategy for your
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.bottomProp}
        className="absolute items-center inset-x-0 h-16">
        <CustomButton text={'Apply Now'} />
      </TouchableOpacity>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'white',
      },
      android: {
        backgroundColor: 'black',
      },
    }),
  },

  bottomProp: {
    ...Platform.select({
      ios: {
        bottom: 10,
      },
      android: {
        bottom: 20,
      },
    }),
  },
});
