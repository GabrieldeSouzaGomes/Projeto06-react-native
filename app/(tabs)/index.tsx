import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function QuotePanel() {
  return (
    <View style={styles.panel}>
      <Text style={styles.quoteText}>
  "compartilhamentosQuando pratico o bem, sinto-me bem; quando pratico o mal, sinto-me mal. Eis a minha religião."
      </Text>
      <Image 
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo4yOZ2EzoObsIKLzYE9GSKIdpb1pk7ypCRQ&s' }} 
        style={styles.authorImage} 
      />
      <Text style={styles.authorName}>Abraham lincoln</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#335eff',
    marginBottom: 15,
    textAlign: 'center',
  },
  authorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
});