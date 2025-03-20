import { Modal, View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { X, Phone, TriangleAlert as AlertTriangle } from 'lucide-react-native';

interface SOSModalProps {
  visible: boolean;
  onClose: () => void;
  onCallEmergency: () => void;
}

export default function SOSModal({ visible, onClose, onCallEmergency }: SOSModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <AlertTriangle size={32} color="#DC2626" />
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <X size={24} color="#64748B" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.modalTitle}>Emergency SOS</Text>
          <Text style={styles.modalDescription}>
            This will immediately contact emergency services and notify your emergency contacts.
          </Text>

          <TouchableOpacity
            style={styles.emergencyButton}
            onPress={onCallEmergency}
            activeOpacity={0.8}>
            <Phone size={24} color="#ffffff" />
            <Text style={styles.emergencyButtonText}>Call Emergency Services</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={onClose}
            activeOpacity={0.8}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    ...Platform.select({
      web: {
        maxWidth: 400,
      },
    }),
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  closeButton: {
    padding: 8,
  },
  modalTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#1E293B',
    marginBottom: 12,
  },
  modalDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#64748B',
    marginBottom: 24,
    lineHeight: 24,
  },
  emergencyButton: {
    backgroundColor: '#DC2626',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    gap: 12,
    marginBottom: 12,
  },
  emergencyButtonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#ffffff',
  },
  cancelButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  cancelButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#64748B',
  },
});