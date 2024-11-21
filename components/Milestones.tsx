import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity,SafeAreaView } from 'react-native';

interface MilestonesProps {
  onPress: () => void;
}

const Milestones: React.FC<MilestonesProps> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/family.png')}
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle}
        onError={(e) => console.log('Error loading image:', e.nativeEvent.error)}
      />

      <View style={styles.textContainer}>
        <View>
          <Text style={styles.title}>Milestones</Text>
          <Text style={styles.subtitle}>Month 12</Text>
        </View>
        <TouchableOpacity style={styles.arrowButton} onPress={onPress}>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Milestones;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 20,
    backgroundColor: '#FFF',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 70
  },
  backgroundImage: {
    width: '100%',
    height: 150,
  },
  imageStyle: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 12,
    color: '#333',
  },
  subtitle: {
    fontSize: 32,
    fontWeight: '300',
    color: '#333',
    marginTop: 4,
  },
  arrowButton: {
    borderWidth: 1,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  arrow: {
    fontSize: 18,
    color: '#333',
  },
});
