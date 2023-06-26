import { ReactNode } from 'react';
import { ScrollView, ViewStyle } from 'react-native';

export const Container = ({
  children,
  contentContainerStyle,
}: {
  children: ReactNode;
  contentContainerStyle?: ViewStyle;
}) => (
  <ScrollView
    contentContainerStyle={{
      padding: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      ...contentContainerStyle,
    }}
  >
    {children}
  </ScrollView>
);
