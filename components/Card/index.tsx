import { View, StyleSheet } from 'react-native';
import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import { SIZES, COLORS, SHADOWS } from '../../constants/theme';

type Props = { children: ReactNode; style?: ViewStyle };

export const Card = ({ children, style }: Props) => {
  return <View style={[defaultStyles.container, style]}>{children}</View>;
};

const defaultStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.dark,
    borderWidth: 1,
    borderColor: COLORS.grey4,
    borderRadius: 10,
    padding: SIZES.medium,
    // ...SHADOWS.medium,
  },
});
