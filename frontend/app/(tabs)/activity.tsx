import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { LineChart } from 'react-native-chart-kit';
import { Activity, TrendingUp, Timer } from 'lucide-react-native';
import { useEffect } from 'react';
import { SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function ActivityScreen() {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-SemiBold': Inter_600SemiBold,
    'Inter-Bold': Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const weeklyStepsData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [6500, 7800, 8200, 7500, 9000, 8400, 8000],
        color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Activity</Text>
        <Text style={styles.subtitle}>Weekly Overview</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Activity size={24} color="#007AFF" />
          <Text style={styles.statValue}>8,432</Text>
          <Text style={styles.statLabel}>Daily Steps</Text>
        </View>

        <View style={styles.statCard}>
          <TrendingUp size={24} color="#FF9500" />
          <Text style={styles.statValue}>2.5 km</Text>
          <Text style={styles.statLabel}>Distance</Text>
        </View>

        <View style={styles.statCard}>
          <Timer size={24} color="#4CD964" />
          <Text style={styles.statValue}>45 min</Text>
          <Text style={styles.statLabel}>Active Time</Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Weekly Steps</Text>
        <LineChart
          data={weeklyStepsData}
          width={340}
          height={220}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={styles.chart}
        />
      </View>

      <View style={styles.goalsContainer}>
        <Text style={styles.goalsTitle}>Daily Goals</Text>
        <View style={styles.goalItem}>
          <View style={styles.goalInfo}>
            <Text style={styles.goalLabel}>Steps Goal</Text>
            <Text style={styles.goalProgress}>8,432 / 10,000</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '84.32%' }]} />
          </View>
        </View>

        <View style={styles.goalItem}>
          <View style={styles.goalInfo}>
            <Text style={styles.goalLabel}>Active Minutes</Text>
            <Text style={styles.goalProgress}>45 / 60 min</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '75%' }]} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#ffffff',
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: '#000000',
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#666666',
    marginTop: 4,
  },
  statsContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    width: '30%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  statValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#000000',
    marginTop: 8,
  },
  statLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#666666',
    marginTop: 4,
    textAlign: 'center',
  },
  chartContainer: {
    backgroundColor: '#ffffff',
    margin: 20,
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  chartTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#000000',
    marginBottom: 16,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  goalsContainer: {
    backgroundColor: '#ffffff',
    margin: 20,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  goalsTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#000000',
    marginBottom: 16,
  },
  goalItem: {
    marginBottom: 16,
  },
  goalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  goalLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#000000',
  },
  goalProgress: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#007AFF',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E5E5EA',
    borderRadius: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 4,
  },
});