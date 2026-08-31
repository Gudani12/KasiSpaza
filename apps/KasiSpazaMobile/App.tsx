import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>KasiSpaza</Text>
      <Text style={styles.subtitle}>Offline-first retail management</Text>
      <Text style={styles.body}>Mobile app foundation is live and ready for the next development phases.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 8,
    color: '#111827',
  },
  subtitle: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 12,
  },
  body: {
    fontSize: 14,
    color: '#374151',
    textAlign: 'center',
  },
});
