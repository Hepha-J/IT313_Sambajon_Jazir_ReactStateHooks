import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StopwatchProps {
  seconds: number;
  isRunning: boolean;
}

export const Stopwatch: React.FC<StopwatchProps> = ({ seconds, isRunning }) => {
  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`;
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Session Timer</Text>
      <Text style={styles.timer}>{formatTime(seconds)}</Text>
      
      {/* Conditional rendering for status */}
      <Text style={[styles.status, isRunning ? styles.running : styles.paused]}>
        {isRunning ? "Running..." : "Paused"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8, color: '#333' },
  timer: { fontSize: 32, fontWeight: 'bold', color: '#007AFF', marginBottom: 8 },
  status: { fontSize: 14, fontWeight: 'bold' },
  running: { color: '#28a745' },
  paused: { color: '#dc3545' },
});