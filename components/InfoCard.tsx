import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

interface InfoCardProps {
  title: string;
  header: string,
  subtitle: string;
  time: string;
  backgroundColor: string;
  
}

const screenWidth = Dimensions.get('window').width;

const InfoCard: React.FC<InfoCardProps> = ({ title, subtitle, time, backgroundColor,header }) => {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Text style={styles.header}>{header}</Text>
      <Text style={styles.title}>{title}</Text>
    
      <Text style={styles.subtitle}>{subtitle}</Text>
      
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  card: {
    width: (screenWidth - 80) / 2, 
    height: 173,
    padding: 16,
    borderRadius: 15,
    marginBottom: 15,
    backgroundColor: '#FFF',
  },
  header: {
    fontSize: 12, 
    fontFamily: 'Roboto',
    marginBottom: 20,
  },

  title: {
    fontSize: 32,        
    fontFamily: 'Roboto',
    color: '#333',
  },
  subtitle: {
    fontSize: 32,
    fontFamily: 'Roboto',
    color: '#000',
    marginBottom: 10,
  },
  time: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: '#878585', 
    position:'absolute',
    bottom: 20,
    left: 20 
  },
});
