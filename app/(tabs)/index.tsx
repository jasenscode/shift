import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Welcome, Jasen</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
    paddingTop: SIZES.xLarge,
    paddingHorizontal: SIZES.medium,
  },
  text: { color: COLORS.white, fontFamily: 'semibold', fontSize: SIZES.medium },
  header: {
    backgroundColor: COLORS.primary,
    padding: SIZES.medium,
    borderRadius: SIZES.small,
  },
});
