import { ReactNode } from 'react';
import { ScrollView } from 'react-native';

export const Container = ({ children }: { children: ReactNode }) => (
  <ScrollView
    contentContainerStyle={{
      padding: 16,
      flex: 1,
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    }}
  >
    {children}
  </ScrollView>
);
