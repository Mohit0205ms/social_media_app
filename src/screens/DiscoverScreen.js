import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import { allPosts } from '../data/response';

export default function DiscoverScreen() {
  const [filteredList, setFilteredList] = useState();
  const [resultedList, setResultedList] = useState(allPosts);
  const changeFilter = (filter) => {
    console.tron.log(filter,"filter");
    setFilteredList(filter);
  }

  const getFilteredList = (filteredList) => {
    if(filteredList === 'All'){
      setResultedList(allPosts);
      return;
    }
    const res = allPosts.filter((item)=> item.filterTitle === filteredList);
    setResultedList(res);
  }
  
  useEffect(()=>{
    getFilteredList(filteredList);
  },[filteredList])

  const renderItem  = ({item,index}) => {
    return <PostCard itemData={item} />
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header setFilteredList={changeFilter} />
        <FlatList
          data={resultedList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  safeArea: {
    flex: 1,
    marginTop: 10
  }
});
