import {View, Text, Image, FlatList, StyleSheet, Dimensions} from 'react-native';
import { data } from '../../data/response';

export default function Grid(props) {
  const { isButtonActive } = props;
  const numColumns = 2;
  const cardSpacing = 10;
  const screenWidth = Dimensions.get('window').width;
  const cardWidth = (screenWidth - (numColumns + 2) * cardSpacing) / numColumns;

  const renderItem = ({ item }) => (
    <View style={[styles.card, { width: cardWidth , margin: 5 }]}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data.filter(item => item.type === isButtonActive)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.list}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  list: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
  },
  cardImage: {
    width: '100%',
    height: 200,
    marginBottom: 8,
  },
  cardName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});
