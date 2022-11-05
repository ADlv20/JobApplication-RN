import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

const width = Dimensions.get('window').width;

const CustomButton = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={styles.btnContainerStyle}
        className="bg-[#6739B6] py-3 rounded-lg items-center">
        <Text style={styles.btnTextStyle} className="text-white text-base">
          {' '}
          {text}{' '}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainerStyle: {
    width: width / 1.15,
  },
});

export default CustomButton;
