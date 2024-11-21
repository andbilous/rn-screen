import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

interface SaveBundlesProps {
  onPress: () => void; // Callback for when the banner is clicked
}

const SaveBundles: React.FC<SaveBundlesProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ImageBackground
        source={require('../assets/images/save-bundles.png')}
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle} // Style to make the image rounded
      >
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default SaveBundles;

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  backgroundImage: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
});
