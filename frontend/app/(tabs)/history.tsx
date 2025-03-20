import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { Heart, Activity, Calendar, ChevronRight } from 'lucide-react-native';
import { useEffect } from 'react';
import { SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function HistoryScreen() {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Medium': Inter_500Medium,
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

  const historyItems = [
    {
      date: 'Today',
      items: [
        {
          time: '10:30 AM',
          type: 'heart-rate',
          title: 'High Heart Rate',
          description: 'Heart rate peaked at 120 BPM',
          icon: Heart,
          color: '#DC2626',
        },
        {
          time: '9:15 AM',
          type: 'activity',
          title: 'Daily Goal Achieved',
          description: 'Completed 10,000 steps',
          icon: Activity,
          color: '#2563EB',
        },
      ],
    },
    {
      date: 'Yesterday',
      items: [
        {
          time: '3:45 PM',
          type: 'heart-rate',
          title: 'Normal Heart Rate',
          description: 'Average rate: 75 BPM',
          icon: Heart,
          color: '#10B981',
        },
        {
          time: '11:20 AM',
          type: 'activity',
          title: 'Activity Alert',
          description: 'Low activity detected',
          icon: Activity,
          color: '#F59E0B',
        },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>History</Text>
        <Text style={styles.subtitle}>Your health timeline</Text>
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Calendar size={20} color="#2563EB" />
          <Text style={styles.filterButtonText}>Filter by Date</Text>
        </TouchableOpacity>
      </View>

      {historyItems.map((section, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.date}</Text>
          {section.items.map((item, itemIndex) => (
            <TouchableOpacity key={itemIndex} style={styles.historyItem}>
              <View style={[styles.itemIcon, { backgroundColor: `${item.color}20` }]}>
                <item.icon size={24} color={item.color} />
              </View>
              <View style={styles.itemContent}>
                <Text style={styles.itemTime}>{item.time}</Text>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
              </View>
              <ChevronRight size={20} color="#64748B" />
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: '#1E293B',
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#64748B',
    marginTop: 4,
  },
  filterContainer: {
    padding: 20,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    padding: 12,
    borderRadius: 12,
    gap: 8,
  },
  filterButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#2563EB',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#1E293B',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  itemIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  itemContent: {
    flex: 1,
  },
  itemTime: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748B',
  },
  itemTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1E293B',
    marginTop: 4,
  },
  itemDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748B',
    marginTop: 2,
  },
});