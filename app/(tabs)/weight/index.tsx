import { View, Text, StyleSheet, Modal, FlatList } from 'react-native';
import { COLORS, SIZES } from '../../../constants/theme';
import { Card } from '../../../components/Card';
import { Button } from '../../../components/Button';

import { useState } from 'react';

const WeightListItem = ({ date, weight }: { date: string; weight: number }) => {
  return (
    <View style={styles.weightListItem}>
      <Text style={styles.weightListText}>{date}</Text>

      <Text style={styles.weightListText}>
        <Text style={styles.weightListTextValue}>{weight}</Text>kg
      </Text>
    </View>
  );
};

export default function Weight() {
  const [modalVisible, setModalVisible] = useState(false);
  const [logList, setLogList] = useState([
    { weight: 75.5, date: '15 Jan 2023' },
    { weight: 75.1, date: '14 Jan 2023' },
    { weight: 74.9, date: '13 Jan 2023' },
    { weight: 74.5, date: '12 Jan 2023' },
    { weight: 74.2, date: '11 Jan 2023' },
    { weight: 73.9, date: '10 Jan 2023' },
    { weight: 73.5, date: '09 Jan 2023' },
    { weight: 73.7, date: '08 Jan 2023' },
    { weight: 73.2, date: '07 Jan 2023' },
  ]);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        ListHeaderComponent={() => {
          return (
            <View>
              <Card style={styles.currentWeightCard}>
                <Text style={[styles.text, styles.currentWeightHeader]}>Current Weight</Text>
                <Text style={[styles.text, styles.currentWeightValue]}>
                  75.5<Text style={styles.weightUnitText}>kg</Text>
                </Text>
              </Card>
              <View style={styles.targetWeightContainer}>
                <Card style={styles.targetWeightCard}>
                  <Text style={[styles.text, styles.targetWeightHeader]}>Target</Text>
                  <Text style={[styles.text, styles.targetWeightValue]}>
                    78<Text style={styles.weightUnitText}>kg</Text>
                  </Text>
                </Card>

                <Card style={styles.targetWeightCard}>
                  <Text style={[styles.text, styles.targetWeightHeader]}>Left</Text>
                  <Text style={[styles.text, styles.targetWeightValue]}>
                    2.5<Text style={styles.weightUnitText}>kg</Text>
                  </Text>
                </Card>
              </View>
              <Button
                title='Log Weight'
                onPress={() => setModalVisible(true)}
                style={styles.btn}
              />
            </View>
          );
        }}
        data={logList}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => {
          return (
            <WeightListItem
              weight={item.weight}
              date={item.date}
            />
          );
        }}
      />

      <Modal
        animationType='slide'
        visible={modalVisible}
        transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Log weight here</Text>
            <Button
              style={styles.btn}
              onPress={() => setModalVisible(!modalVisible)}
              title='Add'
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.dark,
    padding: SIZES.medium,
    color: COLORS.white,
  },
  text: { color: COLORS.white, fontFamily: 'regular' },

  weightUnitText: { fontSize: SIZES.medium, color: COLORS.primary },

  targetWeightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SIZES.large,
  },

  currentWeightCard: { alignItems: 'center', marginBottom: SIZES.large },

  targetWeightCard: { flex: 1, alignItems: 'center' },

  currentWeightHeader: {
    fontFamily: 'regular',
    fontSize: SIZES.large,
    textTransform: 'uppercase',
  },
  targetWeightHeader: {
    fontFamily: 'regular',
    fontSize: SIZES.medium,
    alignSelf: 'flex-start',
    textTransform: 'uppercase',
  },

  currentWeightValue: { fontSize: SIZES.xxxLarge },

  targetWeightValue: { fontSize: SIZES.xxLarge },

  btn: { marginVertical: SIZES.large },

  weightListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SIZES.small,
    borderBottomWidth: 1,
    borderColor: COLORS.grey4,
  },

  weightListText: { color: COLORS.white },

  weightListTextValue: { fontSize: SIZES.medium, fontFamily: 'semibold' },

  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },

  modalContent: {
    borderTopStartRadius: SIZES.medium,
    borderTopEndRadius: SIZES.medium,
    padding: SIZES.medium,
    backgroundColor: COLORS.white,
    alignItems: 'stretch',
    width: '100%',
  },
});
