import styled from '@emotion/native';
import { ReactNode } from 'react';

const SafeAreaView = styled.SafeAreaView`
  flex: 1,
  flexGrow: 1
`;

export const Layout = ({ children }: { children: ReactNode }) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};
