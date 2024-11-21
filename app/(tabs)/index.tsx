import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header';
import BabyImagePager from '@/components/BabyImagePager';
import BottomNavigation from '@/components/BottomNavigation';
import StatsGrid from '@/components/StatsGrid';
import SaveBundles from '@/components/SaveBundles';
import Milestones from '@/components/Milestones';

export default function HomeScreen() {
  return (
    <>
      <ScrollView style={styles.container}>
        <Header />
        <View style={styles.contentContainer}>
          <BabyImagePager />
          <StatsGrid />
          <SaveBundles onPress={() => {}} />
          <Milestones onPress={() => {}} />
        </View>
      </ScrollView>
      <BottomNavigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 30,
    marginBottom: 80,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
});
