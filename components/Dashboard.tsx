// Dashboard.tsx

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface DashboardProps {
  answers: Record<string, string>; // This will hold the questionnaire answers
}

const Dashboard: React.FC<DashboardProps> = ({ answers }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Your Dashboard</Text>
      {Object.entries(answers).map(([questionKey, answer]) => (
        <View key={questionKey} style={styles.answerContainer}>
          <Text style={styles.question}>{questionKey}:</Text>
          <Text style={styles.answer}>{answer}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  answerContainer: {
    marginBottom: 15,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  answer: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Dashboard;
