import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'components/card';
import { Container } from 'components/container';
import { Body, Heading, Subheading } from 'components/text';
import { NavigationProps, ROUTES } from 'constants/navigation';
import { map } from 'lodash';
import { TouchableOpacity } from 'react-native';
import { useCardStore } from 'store/useCardStore';
import { Card as CardIcon } from '../../../assets/icons';

const NoCardsContainer = styled.View`
  align-items: center;
  padding: 32px;
  gap: 16px;
`;

const ButtonText = styled(Heading)`
  color: #4ad8da;
`;

const CardsContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
`;

const InfoContainer = styled.View`
  position: absolute;
  bottom: 1px;
`;

const NoCards = () => {
  const { navigate } = useNavigation<NavigationProps>();
  const onAdd = () => navigate(ROUTES.ADD_CARD);

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
  const cards = useCardStore((state) => state.cards);

  return (
    <Container
      contentContainerStyle={{
        flex: 1,
      }}
    >
      {cards.length ? (
        <>
          <CardsContainer>
            {map(cards, (card) => (
              <Card key={card.id} {...card} />
            ))}
          </CardsContainer>
          <InfoContainer>
            <Body color="grey">Press and Hold on the item to remove</Body>
          </InfoContainer>
        </>
      ) : (
        <NoCards />
      )}
    </Container>
  );
};
