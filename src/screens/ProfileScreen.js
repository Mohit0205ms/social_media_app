import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Header';
import { Images } from '../assets';
import Grid from '../components/lists/Grid';

export default function ProfileScreen() {
  const [isButtonActive, setIsButtonActive] = useState('trash');
  const handleActionButton = (index) => {
    setIsButtonActive(index);
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header hideFilter={true} />
      <View style={styles.container}>
        <View style={[styles.headerContainer, styles.shadowStyle]}>
          <View style={styles.userInfoSection}>
            <View style={styles.avatarWrapper}>
              <Image source={Images.empty_profile} style={styles.avatar} />
            </View>
            <View style={styles.userDetails}>
              <Text style={styles.userName}>Mohit Singh</Text>
              <View style={styles.locationRow}>
                <Icon name="map-marker-outline" size={16} color="#777" />
                <Text style={styles.userLocation}>Gurugram, Haryana</Text>
              </View>
              <Text style={styles.userTitle}>Software developer</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.statsRow, styles.shadowStyle]}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>10</Text>
            <Text style={styles.statLabel}>Feed</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>150</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>90</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>2</Text>
            <Text style={styles.statLabel}>Blocked</Text>
          </View>
        </View>
        <View style={[styles.tabRow, styles.shadowStyle]}>
          <TouchableOpacity
            style={styles.tabButton}
            onPress={() => handleActionButton('trash')}>
            <Text
              style={
                isButtonActive === 'trash'
                  ? styles.isActiveTabButtonText
                  : styles.tabButtonText
              }>
              Trash
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabButton}
            onPress={() => handleActionButton('draft')}>
            <Text
              style={
                isButtonActive === 'draft'
                  ? styles.isActiveTabButtonText
                  : styles.tabButtonText
              }>
              Drafts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabButton}
            onPress={() => handleActionButton('history')}>
            <Text
              style={
                isButtonActive === 'history'
                  ? styles.isActiveTabButtonText
                  : styles.tabButtonText
              }>
              History
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.aboutSection, styles.shadowStyle]}>
          <Text style={styles.aboutTitle}>About me</Text>
          <Text style={styles.aboutText}>Mohit Singh</Text>
        </View>
        <View style={styles.noPostContainer}>
          <Grid isButtonActive={isButtonActive} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const TEXT_COLOR = '#333';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    marginTop: 10,
  },

  shadowStyle: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
      },
    }),
  },

  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    marginBottom: 5,
  },
  userInfoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarWrapper: {
    marginRight: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    resizeMode: 'cover',
  },
  userDetails: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: TEXT_COLOR,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  userLocation: {
    marginLeft: 4,
    fontSize: 14,
    color: '#777',
  },
  userTitle: {
    marginTop: 2,
    fontSize: 14,
    color: '#666',
  },
  editButton: {
    backgroundColor: 'black',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 15,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: '600',
  },

  statsRow: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: 5,
    paddingVertical: 10,
    justifyContent: 'space-around',
    borderRadius: 12,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: TEXT_COLOR,
  },
  statLabel: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },

  tabRow: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: 5,
    paddingVertical: 8,
    justifyContent: 'space-around',
    borderRadius: 12,
  },
  tabButton: {
    paddingHorizontal: 10,
  },
  tabButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
  },

  aboutSection: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 12,
  },
  aboutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: TEXT_COLOR,
    marginBottom: 5,
  },
  aboutText: {
    fontSize: 14,
    color: '#777',
  },

  noPostContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noPostText: {
    fontSize: 16,
    color: '#999',
  },
  isActiveTabButton:{
    paddingHorizontal: 10,
  },
  isActiveTabButtonText:{
    fontSize: 14,
    fontWeight: '600',
    color: 'blue',
  }
});
