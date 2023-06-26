import styled from '@emotion/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NavigationProps, ROUTES } from 'constants/navigation';
import { View } from 'react-native';
import { LeftArrow, Plus } from '../../../assets/icons';

const IconContainer = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: ${({ align }: { align: 'flex-start' | 'flex-end' }) =>
    align ? align : 'center'};
  justify-content: center;
`;

export const HeaderLeft = () => {
  const { name } = useRoute();
  const { goBack } = useNavigation<NavigationProps>();
  const onBack = () => goBack();

  return (
    <IconContainer onPress={onBack} align="flex-start">
      {name === ROUTES.MAIN ? <View /> : <LeftArrow />}
    </IconContainer>
  );
};

export const HeaderRight = () => {
  const { name } = useRoute();
  const { navigate } = useNavigation<NavigationProps>();
  const onAdd = () => navigate(ROUTES.CARD);

  return (
    <IconContainer onPress={onAdd} align="flex-end">
      {name === ROUTES.CARD ? <View /> : <Plus />}
    </IconContainer>
  );
};
