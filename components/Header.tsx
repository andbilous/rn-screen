import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const screenWidth = Dimensions.get('window').width;

const Header: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Ribeye: require('../assets/fonts/Ribeye-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.header}>
      <Text style={[styles.title, { fontFamily: 'Ribeye' }]}>Woddle</Text>

      <View style={styles.iconsContainer}>
        <View style={styles.notificationBox}>
          <Image
            source={require('../assets/images/header-box.png')}
            style={styles.notificationImage}
          />
        </View>

        <Image
          source={require('../assets/images/profile-pic-header.png')}
          style={styles.profilePic}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: screenWidth * 0.03,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: screenWidth * 0.1,
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: screenWidth * 0.04,
  },
  notificationBox: {
    position: 'relative',
  },
  notificationImage: {
    width: screenWidth * 0.08,
    height: screenWidth * 0.08,
    resizeMode: 'contain',
  },
  profilePic: {
    width: screenWidth * 0.08,
    height: screenWidth * 0.08,
    borderRadius: screenWidth * 0.04,
    resizeMode: 'cover',
  },
});
