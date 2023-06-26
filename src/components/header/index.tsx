import styled from '@emotion/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NavigationProps, ROUTES } from 'constants/navigation';
import { View } from 'react-native';
import { LeftArrow, Plus } from '../../../assets/icons';

const IconContainer = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderLeft = () => {
  const { name } = useRoute();
  const { goBack } = useNavigation<NavigationProps>();
  const onBack = () => goBack();

  return (
    <IconContainer onPress={onBack}>
      {name === ROUTES.MAIN ? <View /> : <LeftArrow />}
    </IconContainer>
  );
};

export const HeaderRight = () => {
  const { name } = useRoute();
  const { navigate } = useNavigation<NavigationProps>();
  const onAdd = () => navigate(ROUTES.CARD);

  return (
    <IconContainer onPress={onAdd}>
      {name === ROUTES.CARD ? <View /> : <Plus />}
    </IconContainer>
  );
};
