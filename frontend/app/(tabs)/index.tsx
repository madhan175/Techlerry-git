import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Platform } from 'react-native';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { LineChart } from 'react-native-chart-kit';
import { Heart, Footprints, TriangleAlert as AlertTriangle, TrendingUp, Activity, TrendingDown } from 'lucide-react-native';
import { useEffect, useState, useCallback } from 'react';
import { SplashScreen } from 'expo-router';
import SOSModal from '../../components/SOSModal';
import { useHealthData } from '../../hooks/useHealthData';

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Medium': Inter_500Medium,
    'Inter-SemiBold': Inter_600SemiBold,
    'Inter-Bold': Inter_700Bold,
  });

  const [showSosModal, setShowSosModal] = useState(false);
  const healthData = useHealthData();
  const [heartRateHistory, setHeartRateHistory] = useState<number[]>([75, 78, 82, 79, 76, 80]);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    setHeartRateHistory(current => [...current.slice(1), healthData.heartRate]);
  }, [healthData.heartRate]);

  const handleEmergencyCall = useCallback(() => {
    if (Platform.OS === 'web') {
      window.location.href = 'tel:911';
    }
    setShowSosModal(false);
  }, []);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const heartRateData = {
    labels: ['12:00', '13:00', '14:00', '15:00', '16:00', 'Now'],
    datasets: [
      {
        data: heartRateHistory,
        color: (opacity = 1) => `rgba(37, 99, 235, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greeting}>Good morning,</Text>
            <Text style={styles.userName}>Sarah Johnson</Text>
          </View>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80' }}
            style={styles.avatar}
          />
        </View>
      </View>

      <View style={styles.metricsContainer}>
        <TouchableOpacity style={styles.metricCard} activeOpacity={0.7}>
          <View style={[styles.metricIcon, { backgroundColor: '#EFF6FF' }]}>
            <Heart size={24} color="#2563EB" />
          </View>
          <Text style={styles.metricValue}>{healthData.heartRate}</Text>
          <Text style={styles.metricLabel}>BPM</Text>
          <View style={styles.metricTrend}>
            {healthData.lastHeartRateChange > 0 ? (
              <TrendingUp size={16} color="#10B981" />
            ) : (
              <TrendingDown size={16} color="#DC2626" />
            )}
            <Text style={styles.trendText}>
              {healthData.lastHeartRateChange > 0 ? '+' : ''}
              {healthData.lastHeartRateChange} from last reading
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.metricCard} activeOpacity={0.7}>
          <View style={[styles.metricIcon, { backgroundColor: '#F0FDF4' }]}>
            <Footprints size={24} color="#10B981" />
          </View>
          <Text style={styles.metricValue}>{healthData.steps.toLocaleString()}</Text>
          <Text style={styles.metricLabel}>Steps</Text>
          <View style={styles.metricTrend}>
            <Activity size={16} color="#2563EB" />
            <Text style={styles.trendText}>{healthData.stepsGoalPercentage}% of daily goal</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={[styles.card, styles.sosStatus]} 
        activeOpacity={0.7}
        onPress={() => setShowSosModal(true)}>
        <View style={styles.sosStatusContent}>
          <View style={styles.sosStatusIcon}>
            <Heart size={24} color="#ffffff" />
          </View>
          <View style={styles.sosStatusText}>
            <Text style={styles.sosStatusTitle}>Health Monitor Active</Text>
            <Text style={styles.sosStatusSubtext}>Tap for emergency options</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Heart Rate Trend</Text>
        <Text style={styles.cardSubtitle}>Last 6 readings</Text>
        <LineChart
          data={heartRateData}
          width={340}
          height={200}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(37, 99, 235, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(55, 65, 81, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffffff',
            },
          }}
          bezier
          style={styles.chart}
        />
      </View>

      <TouchableOpacity
        style={styles.sosButton}
        onPress={() => setShowSosModal(true)}
        activeOpacity={0.8}>
        <AlertTriangle size={24} color="#ffffff" />
        <Text style={styles.sosButtonText}>Emergency SOS</Text>
      </TouchableOpacity>

      <SOSModal
        visible={showSosModal}
        onClose={() => setShowSosModal(false)}
        onCallEmergency={handleEmergencyCall}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  greeting: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#64748B',
  },
  userName: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#1E293B',
    marginTop: 4,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#E2E8F0',
  },
  metricsContainer: {
    padding: 20,
    flexDirection: 'row',
    gap: 16,
  },
  metricCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  metricIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  metricValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: '#1E293B',
  },
  metricLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },
  metricTrend: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    backgroundColor: '#F8FAFC',
    padding: 8,
    borderRadius: 8,
    gap: 4,
  },
  trendText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#64748B',
  },
  card: {
    backgroundColor: '#ffffff',
    margin: 20,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#1E293B',
  },
  cardSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
    marginBottom: 16,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  sosStatus: {
    backgroundColor: '#2563EB',
  },
  sosStatusContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  sosStatusIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sosStatusText: {
    flex: 1,
  },
  sosStatusTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#ffffff',
  },
  sosStatusSubtext: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.8,
    marginTop: 4,
  },
  sosButton: {
    backgroundColor: '#DC2626',
    margin: 20,
    padding: 20,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  sosButtonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#ffffff',
  },
});