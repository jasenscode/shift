import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

type Props = { title: string; onPress: () => void; style?: ViewStyle };

export const Button = ({ title, onPress, style }: Props) => {
  return (
    <Pressable
      style={[styles.btn, style]}
      onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: { backgroundColor: COLORS.primary, paddingVertical: SIZES.small, borderRadius: 10 },
  btnText: {
    fontFamily: 'regular',
    fontSize: SIZES.medium,
    color: COLORS.white,
    textAlign: 'center',
  },
});
