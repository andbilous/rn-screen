import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const BottomNavigation: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Ribeye: require('../assets/fonts/Ribeye-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftNavItem}>
        <Image source={require('../assets/images/house.png')} style={styles.icon} />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>

      <View style={styles.centralIconContainer}>
        <View style={styles.centralCircle}>
          <Text style={styles.centralIcon}>W</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.rightNavItem}>
        <Image source={require('../assets/images/more-icon.png')} style={styles.icon} />
        <Text style={styles.label}>More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F8F3ED',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 90,
    paddingHorizontal: 30,
    paddingBottom: 10,
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
  },
  leftNavItem: {
    alignItems: 'center',
    right: 30
  },
  rightNavItem:{
    alignItems: 'center',
    left: 30
  },
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    fontSize: 12,
    color: '#333',
    marginTop: 5,
  },
  centralIconContainer: {
    borderWidth: 1,
    borderRadius: '50%',
    position: 'absolute',
    top: -40,
    alignItems: 'center',
    justifyContent: 'center',
    left: Dimensions.get('window').width / 2 - 40,
  },
  centralCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#D7E4EC',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#F8F3ED',
  },
  centralIcon: {
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily:'Ribeye',
    color: '#333',
  },
});

export default BottomNavigation;
