import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Main: undefined;
  Card: undefined;
};
export type NavigationProps =
  NativeStackScreenProps<RootStackParamList>['navigation'];
export enum ROUTES {
  MAIN = 'Main',
  CARD = 'Card',
}
