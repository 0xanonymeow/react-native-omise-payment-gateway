import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { Container } from 'components/container';
import { Heading, Subheading } from 'components/text';
import { NavigationProps, ROUTES } from 'constants/navigation';
import { TouchableOpacity } from 'react-native';
import { Card as CardIcon } from '../../../assets/icons';

const NoCardsContainer = styled.View`
  align-items: center;
  padding: 32px;
  gap: 16px;
`;

const ButtonText = styled(Heading)`
  color: #4ad8da;
`;

const NoCards = () => {
  const { navigate } = useNavigation<NavigationProps>();
  const onAdd = () => navigate(ROUTES.CARD);

  return (
    <NoCardsContainer>
      <CardIcon width={40} height={40} />
      <Subheading>No Cards Found</Subheading>
      <Subheading style={{ textAlign: 'center' }}>
        We recommend adding a cardfor easy payment
      </Subheading>
      <TouchableOpacity onPress={onAdd}>
        <ButtonText>Add New Card</ButtonText>
      </TouchableOpacity>
    </NoCardsContainer>
  );
};

export const Main = () => {
  return (
    <Container contentContainerStyle={{ flex: 1 }}>
      <NoCards />
    </Container>
  );
};
