import styled from '@emotion/native';
import { Gesture } from 'components/gesture';
import { Body, Dot, Paragraph } from 'components/text';
import { getVendor } from 'constants/cardVendor';
import * as Haptics from 'expo-haptics';
import { useMemo } from 'react';
import { Alert, View, ViewStyle } from 'react-native';
import { CardProps, useCardStore } from 'store/useCardStore';
import { JCB, Mastercard, VisaH16 } from '../../../assets/icons';

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

const vendors: Record<string, JSX.Element> = {
  visa: <VisaH16 width={66} height={22} />,
  mastercard: <Mastercard width={66} height={22} />,
  jcb: <JCB width={66} height={22} />,
};

export const Card = ({ id, number, name, exp }: CardProps) => {
  const vendor = useMemo(() => getVendor(number), [number]);
  const remove = useCardStore((state) => state.remove);
  const update = useCardStore((state) => state.update);

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

  const onPress = () => {
    return true;
  };

  return (
    <Gesture onLongPress={onLongPress} onPress={onPress}>
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
        {vendor && vendors[vendor]}
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
    </Gesture>
  );
};
