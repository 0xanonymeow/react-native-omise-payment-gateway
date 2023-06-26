import styled from '@emotion/native';
import { ReactNode } from 'react';
import { ViewProps } from 'react-native';

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  flex-grow: 1;
  background-color: white;
`;

export const Layout = ({
  children,
  ...props
}: { children: ReactNode } & ViewProps) => {
  return <SafeAreaView {...props}>{children}</SafeAreaView>;
};
