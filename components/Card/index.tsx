import { View, StyleSheet } from 'react-native';
import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import { SIZES, COLORS, SHADOWS } from '../../constants/theme';

type Props = { children: ReactNode; styles?: ViewStyle };

export const Card = ({ children, styles }: Props) => {
  return <View style={[defaultStyles.container, styles]}>{children}</View>;
};

const defaultStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    padding: SIZES.medium,
    ...SHADOWS.small,
  },
});
