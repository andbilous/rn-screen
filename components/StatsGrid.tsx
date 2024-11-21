import React from 'react';
import { View, StyleSheet } from 'react-native';
import InfoCard from '@/components/InfoCard';

const StatsGrid: React.FC = () => {
  return (
    <View style={styles.grid}>
      <InfoCard
       header="Weight"
       title="15 lbs"
        subtitle="3 oz"
        time="1:00 PM Dec 05 2023"
        backgroundColor="#FFF5DC"
      />
      <InfoCard
          header="Diaper"
        title="Pee"
        subtitle="Medium"
        time="2h 55m ago"
        backgroundColor="#EFF1FF"
      />
      <InfoCard
        header="Feeding"
        title="Formula"
        subtitle="5oz"
        time="2h 30m ago"
        backgroundColor="#FFEEE7"
      />
      <InfoCard
        header="Sleep"
        title="2h 20m"
        subtitle=""
        time="3h 35m ago"
        backgroundColor="#F8EEFF"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Ensure cards are evenly spaced
    paddingHorizontal: 10, // Add padding around the grid
    gap: 15, // Space between rows and columns
  },
});

export default StatsGrid;
