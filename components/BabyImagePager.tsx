import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const BabyImagePager: React.FC = () => {
  return (
    <View style={styles.pagerView}>
      <View key="1" style={styles.pagerItem}>
        <Image 
          source={require('../assets/images/baby-image.png')} 
          style={styles.babyImage} 
        />
        <View style={styles.overlay}>
          <View style={styles.overlayContent}>
            <Text style={styles.babyName}>Christian Bowen</Text>
            <Text style={styles.genderIcon}>♂️</Text>
          </View>
          <Text style={styles.babyAge}>1y 2m</Text>
        </View>
      </View>
    </View>
  );
};

export default BabyImagePager;

const styles = StyleSheet.create({
  pagerView: {
    height: screenWidth * 0.6,
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  pagerItem: {
    position: 'relative',
    width: '100%',
    height: '100%',
    resizeMode:'stretch'
  },
  babyImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 18,
    flexDirection: 'column',
  },
  overlayContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  babyName: {
    color: '#333',
    fontWeight: '600',
    fontSize: 14,
  },
  genderIcon: {
    color: '#333',
    fontSize: 14,
    marginLeft: 6,
  },
  babyAge: {
    color: '#333',
    fontSize: 12,
    marginTop: 2,
  },
});
