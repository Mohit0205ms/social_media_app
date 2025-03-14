import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function PostCard(props) {
  const {
    itemData: {username, post, postDate, postTitle, location, discoverLocation, filterTitle},
  } = props;
  const [like, setLike] = useState(false);
  const [follow, setFollow] = useState(false);

  const handleFollowClick = () => {
    setFollow(!follow);
  }

  const handleLikeClick = () => {
    setLike(!like);
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerRow}>
        <View style={styles.userInfoSection}>
          <Icon name="account-outline" size={30} color="black" />
          <Text style={styles.username}>{username}</Text>
        </View>
        <TouchableOpacity
          style={
            follow ? styles.activefollowButton : styles.inActiveFollowButton
          }
          onPress={handleFollowClick}>
          <Text
            style={
              follow ? styles.activeFollowText : styles.inActiveFollowText
            }>
            {follow ? 'Unfollow' : 'Follow'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.thumbnail}>
        <Image
          source={post}
          style={styles.thumbnailImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.postInfoRow}>
        <Text style={styles.postDate}>{postDate}</Text>
        <Text style={styles.postCategory}>Category: {filterTitle}</Text>
      </View>

      <Text style={styles.postTitle}>{postTitle}</Text>

      <Text style={styles.postLocation}>
        {location}
      </Text>

      <View style={styles.footerRow}>
        <View style={styles.actionbar}>
          <TouchableOpacity onPress={handleLikeClick}>
            <Icon name={like ? "heart" : "heart-outline"} size={25} />
          </TouchableOpacity>
          <Icon name="share-outline" size={25} />
          <Icon name="comment-outline" size={25} />
        </View>
        <Text style={styles.discoverLocation}>{discoverLocation}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 8,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  username: {
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10
  },
  thumbnail: {
    marginVertical: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  thumbnailImage: {
    width: '100%',
    height: 200,
  },
  postInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postDate: {
    color: '#666',
    fontSize: 12,
  },
  postCategory: {
    color: '#666',
    fontSize: 12,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 4,
  },
  postLocation: {
    color: '#777',
    fontSize: 12,
    marginBottom: 6,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activefollowButton: {
    backgroundColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 22,
  },
  inActiveFollowButton: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 22,
    borderWidth: 1,
  },
  activeFollowText: {
    color: 'white',
    fontWeight: '600',
  },
  inActiveFollowText: {
    color: 'black',
    fontWeight: '600',
  },
  discoverLocation: {
    color: '#888',
    fontSize: 13,
  },
  userInfoSection: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  actionbar: {
    width: 100,
    flexDirection:'row',
    justifyContent:'space-between',
  }
});
