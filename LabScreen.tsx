import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, Button, StyleSheet } from 'react-native';
import { PracticeTracker } from './PracticeTracker';
import { Stopwatch } from './Stopwatch';
import { useStopwatch } from './useStopwatch';

export const LabScreen: React.FC = () => {
  // Lifted state
  const [solved, setSolved] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const { seconds } = useStopwatch(isRunning);

  // Event handlers passed as function references
  const handleSolve = () => setSolved((s) => s + 1);
  const handleReset = () => setSolved(0);
  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>Lab Session Tracker</Text>

        <PracticeTracker 
          solved={solved} 
          onSolve={handleSolve} 
          onReset={handleReset} 
        />

        <Stopwatch 
          seconds={seconds} 
          isRunning={isRunning} 
        />

        <View style={styles.controlCard}>
          <Text style={styles.controlTitle}>Timer Controls</Text>
          <View style={styles.buttonRow}>
            <Button title="Start" onPress={handleStart} color="#28a745" />
            <Button title="Stop" onPress={handleStop} color="#dc3545" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  scrollContent: { padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#212529' },
  controlCard: { backgroundColor: '#ffffff', padding: 16, borderRadius: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 3, elevation: 2 },
  controlTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 12, color: '#333' },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-around' },
});