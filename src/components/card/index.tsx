import styled from '@emotion/native';
import { Body, Dot, Paragraph } from 'components/text';
import { View, ViewStyle } from 'react-native';
import { VisaH16 } from '../../../assets/icons';

const Container = styled.View<ViewStyle>`
  border-radius: 12px;
  display: flex;
  width: 90%;
  justify-content: space-between;
  gap: 12px;
  background-color: white;
  padding-horizontal: 32px;
  padding-vertical: 24px;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  elevation: 2;
`;

const Row = styled.View<ViewStyle>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardNumberContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

interface CardProps {
  number: string;
  name: string;
  exp: string;
}

export const Card = ({ number, name, exp }: CardProps) => {
  return (
    <Container
      style={{
        shadowOffset: {
          width: 0,
          height: 6,
        },
      }}
    >
      <VisaH16 />
      <CardNumberContainer>
        <Dot color="#8F8F8F">····</Dot>
        <Dot color="#8F8F8F">····</Dot>
        <Dot color="#8F8F8F">····</Dot>
        <Paragraph color="#8F8F8F">{number.slice(12)}</Paragraph>
      </CardNumberContainer>
      <Row>
        <View style={{ gap: 8, maxWidth: '50%' }}>
          <Body color="#8F8F8F">Name on Card</Body>
          <Paragraph ellipsizeMode="tail" numberOfLines={1}>
            {name}
          </Paragraph>
        </View>
        <View style={{ gap: 8 }}>
          <Body color="#8F8F8F">Expires</Body>
          <Paragraph>{exp}</Paragraph>
        </View>
      </Row>
    </Container>
  );
};
