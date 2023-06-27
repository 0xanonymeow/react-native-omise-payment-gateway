import styled from '@emotion/native';
import { LongPressGesture } from 'components/longPressGesture';
import { Body, Dot, Paragraph } from 'components/text';
import * as Haptics from 'expo-haptics';
import { Alert, View, ViewStyle } from 'react-native';
import { CardProps, useCardStore } from 'store/useCardStore';
import { VisaH16 } from '../../../assets/icons';

const Container = styled.Pressable<ViewStyle>`
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

export const Card = ({ id, number, name, exp }: CardProps) => {
  const remove = useCardStore((state) => state.remove);

  const onRemove = (id: number) => remove(id);

  const onLongPress = () => {
    Alert.alert(
      'Remove Card',
      'Do you want to remove this card from your account?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          onPress: () => onRemove(id),
        },
      ],
    );
  };

  return (
    <LongPressGesture onLongPress={onLongPress}>
      <Container
        onLongPress={() =>
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
        }
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
    </LongPressGesture>
  );
};
