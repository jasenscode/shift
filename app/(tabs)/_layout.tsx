import { Tabs } from 'expo-router';
import { COLORS } from '../../constants/theme';
import { Image } from 'react-native';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

interface Options {
  headerTitle: (props: any) => React.ReactNode;
  headerTitleAlign: 'center';
  headerStyle: { backgroundColor: string };
}

export default function TabsLayout() {
  const tabScreenOptions: BottomTabNavigationOptions = {
    headerTitle: (props) => <LogoTitle {...props} />,
    headerTitleAlign: 'center',
    headerStyle: { backgroundColor: COLORS.dark },
    tabBarInactiveTintColor: 'white',
    tabBarActiveTintColor: COLORS.primary,
    tabBarLabelStyle: { fontFamily: 'semibold', fontSize: 10 },
  };

  const tabBarOptions = {
    tabBarStyle: {
      backgroundColor: COLORS.dark,
    },
  };

  return (
    <Tabs screenOptions={tabBarOptions}>
      <Tabs.Screen
        name='index'
        options={{
          ...tabScreenOptions,
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name='home'
              size={20}
              color={focused ? COLORS.primary : COLORS.white}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='weight/index'
        options={{
          ...tabScreenOptions,
          title: 'Weight Log',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name='scale'
              size={20}
              color={focused ? COLORS.primary : COLORS.white}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='workouts/index'
        options={{
          ...tabScreenOptions,
          title: 'Workouts',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name='barbell'
              size={20}
              color={focused ? COLORS.primary : COLORS.white}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='settings/index'
        options={{
          ...tabScreenOptions,
          title: 'Settings',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name='settings-sharp'
              size={20}
              color={focused ? COLORS.primary : COLORS.white}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const LogoTitle = () => {
  return (
    <Image
      style={{ height: 30, width: 100 }}
      source={require('../../assets/icons/logo-nobg.png')}
    />
  );
};
