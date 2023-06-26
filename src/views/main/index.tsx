import styled from '@emotion/native';
import { Container } from 'components/container';
import { Text } from 'components/themed/text';
import { TouchableOpacity } from 'react-native';
import { Card as CardIcon } from '../../../assets/icons';

const NoCardsContainer = styled.View`
  align-items: center;
  padding: 32px;
  gap: 16px;
`;

const ButtonText = styled(Text)`
  font-family: FC-Subject-Rounded-Bold;
  color: #4ad8da;
`;

const NoCards = () => {
  return (
    <NoCardsContainer>
      <CardIcon width={40} height={40} />
      <Text>No Cards Found</Text>
      <Text style={{ textAlign: 'center' }}>
        We recommend adding a cardfor easy payment
      </Text>
      <TouchableOpacity>
        <ButtonText>Add New Card</ButtonText>
      </TouchableOpacity>
    </NoCardsContainer>
  );
};

export const Main = () => {
  return (
    <Container>
      <NoCards />
    </Container>
  );
};
