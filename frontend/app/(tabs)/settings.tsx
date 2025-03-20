import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { Bell, Shield, User, Phone, Heart, Activity } from 'lucide-react-native';
import { useState, useEffect } from 'react';
import { SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function SettingsScreen() {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-SemiBold': Inter_600SemiBold,
    'Inter-Bold': Inter_700Bold,
  });

  const [notifications, setNotifications] = useState(true);
  const [sosAlerts, setSosAlerts] = useState(true);
  const [healthMonitoring, setHealthMonitoring] = useState(true);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Customize your experience</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingIcon}>
            <User size={24} color="#007AFF" />
          </View>
          <View style={styles.settingContent}>
            <Text style={styles.settingTitle}>Personal Information</Text>
            <Text style={styles.settingDescription}>Update your profile details</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingIcon}>
            <Phone size={24} color="#007AFF" />
          </View>
          <View style={styles.settingContent}>
            <Text style={styles.settingTitle}>Emergency Contacts</Text>
            <Text style={styles.settingDescription}>Manage SOS contact list</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Health Monitoring</Text>
        <View style={styles.settingItem}>
          <View style={styles.settingIcon}>
            <Heart size={24} color="#FF3B30" />
          </View>
          <View style={styles.settingContent}>
            <Text style={styles.settingTitle}>Heart Rate Monitoring</Text>
            <Text style={styles.settingDescription}>Enable continuous monitoring</Text>
          </View>
          <Switch
            value={healthMonitoring}
            onValueChange={setHealthMonitoring}
            trackColor={{ false: '#767577', true: '#4CD964' }}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingIcon}>
            <Activity size={24} color="#FF9500" />
          </View>
          <View style={styles.settingContent}>
            <Text style={styles.settingTitle}>Activity Tracking</Text>
            <Text style={styles.settingDescription}>Track steps and movement</Text>
          </View>
          <Switch
            value={healthMonitoring}
            onValueChange={setHealthMonitoring}
            trackColor={{ false: '#767577', true: '#4CD964' }}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.settingItem}>
          <View style={styles.settingIcon}>
            <Bell size={24} color="#007AFF" />
          </View>
          <View style={styles.settingContent}>
            <Text style={styles.settingTitle}>Push Notifications</Text>
            <Text style={styles.settingDescription}>Health alerts and reminders</Text>
          </View>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#767577', true: '#4CD964' }}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingIcon}>
            <Shield size={24} color="#FF3B30" />
          </View>
          <View style={styles.settingContent}>
            <Text style={styles.settingTitle}>SOS Alerts</Text>
            <Text style={styles.settingDescription}>Emergency notification settings</Text>
          </View>
          <Switch
            value={sosAlerts}
            onValueChange={setSosAlerts}
            trackColor={{ false: '#767577', true: '#4CD964' }}
          />
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
  section: {
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
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#000000',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#000000',
  },
  settingDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#666666',
    marginTop: 2,
  },
});