import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface PracticeTrackerProps {
  solved: number;
  onSolve: () => void;
  onReset: () => void;
}

export const PracticeTracker: React.FC<PracticeTrackerProps> = ({ solved, onSolve, onReset }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Practice Tracker</Text>
      <Text style={styles.counter}>Solved: {solved}</Text>

      {/* Conditional rendering for "Great job!" when solved reaches 5 */}
      {solved >= 5 && <Text style={styles.greatJob}>Great job!</Text>}

      <View style={styles.buttonRow}>
        <Button title="Solve +1" onPress={onSolve} />
        <Button title="Reset" onPress={onReset} color="#dc3545" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8, color: '#333' },
  counter: { fontSize: 16, marginBottom: 8, color: '#555' },
  greatJob: { fontSize: 16, fontWeight: 'bold', color: '#28a745', marginBottom: 12 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
});