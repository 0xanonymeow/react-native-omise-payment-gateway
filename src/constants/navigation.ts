import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Main: undefined;
  AddCard: undefined;
};
export type NavigationProps =
  NativeStackScreenProps<RootStackParamList>['navigation'];
export enum ROUTES {
  MAIN = 'Main',
  ADD_CARD = 'AddCard',
}
