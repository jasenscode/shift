import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS, SIZES } from '../../../constants/theme';
import { Card } from '../../../components/Card';

export default function Weight() {
  return (
    <ScrollView style={styles.mainContainer}>
      <View>
        <Card>
          <Text style={[styles.text, { fontSize: SIZES.large }]}>Current Weight</Text>
          <Text style={[styles.text, { fontSize: SIZES.xxLarge }]}>75.5kg</Text>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.dark,
    padding: SIZES.medium,
    color: COLORS.white,
  },
  text: { color: COLORS.white },
});
