import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Images } from '../assets';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { filterList } from '../data/response';

export function FilterList(props) {
  const { setFilteredList = () => {} } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelector = (index) =>{
    setSelectedIndex(index);
  }

  const renderItem = ({item, index, separators}) =>{
    console.tron.log(item);
    const style = index === selectedIndex ? styles.activePill : styles.inActivePill;
    const titleStyle = index === selectedIndex ? styles.activePillText: styles.inActivePillText;
    if(index === selectedIndex){
      setFilteredList(item.title);
    }
    return (
      <TouchableOpacity
        onPress={()=>handleSelector(index)}
        style={style}
        onShowUnderlay={separators.highlight}
        onHideUnderlay={separators.unhighlight}>
        <Text style={titleStyle}>{item.title}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.categoryContainer}>
      <FlatList
        data={filterList}
        horizontal
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default function Header(props) {
  const { hideFilter = false, setFilteredList = () => {} } = props;
  return (
    <View style={styles.container}>
      <View style={styles.headerActionBar}>
        <Icon name="menu" size={30} />
        <Text style={styles.logo}>BWstory</Text>
        <Icon name="magnify" size={30} />
      </View>
      {!hideFilter && <FilterList setFilteredList={setFilteredList} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    elevation: 2,
    marginTop: 10
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
    paddingHorizontal: 10,
  },
  categoryText: {
    fontSize: 14,
    color: '#888',
  },
  activeCategory: {
    color: '#0084ff',
    fontWeight: 'bold',
  },
  inActivePill: {
    height: 30,
    borderRadius: 15,
    backgroundColor: 'lightgrey',
    marginLeft: 5,
    justifyContent:'center',
    alignItems:'center',
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  activePillText: {
    fontSize: 12,
    color: 'white',
    fontWeight: '600'
  },
  inActivePillText: {
    fontSize: 12,
    color: 'black',
    fontWeight: '500'
  },
  activePill: {
    height: 30,
    borderRadius: 15,
    backgroundColor: 'black',
    marginLeft: 5,
    justifyContent:'center',
    alignItems:'center',
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  headerActionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5
  }
});
