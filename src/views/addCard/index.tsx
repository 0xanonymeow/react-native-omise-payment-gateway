import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'components/button';
import { Container } from 'components/container';
import { TextInput } from 'components/input';
import { NavigationProps } from 'constants/navigation';
import { useMemo, useRef, useState } from 'react';
import {
  TextInput as DefaultTextInput,
  KeyboardAvoidingView,
  Platform,
  ViewStyle,
} from 'react-native';
import { useCardStore } from 'store/useCardStore';
import {
  JCB,
  Mastercard,
  MastercardSecurecode,
  Omise,
  VerifiedByVisa,
  VisaH16,
} from '../../../assets/icons';

const Content = styled.View`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

const TextGroup = styled.View`
  gap: 24px;
  flex: 1;
`;

const Row = styled.View<ViewStyle>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${(props) => props.gap && `gap: ${props.gap}px`}
  ${(props) => props.width && `width: ${props.width}`};
  ${(props) => props.alignSelf && `align-self: ${props.alignSelf}`}
`;

const CardNumberRightIcons = () => (
  <>
    <VisaH16 width={24} height={16} />
    <Mastercard width={24} height={16} />
    <JCB width={24} height={16} />
  </>
);

export const AddCard = () => {
  const [card, setCard] = useState<{
    number: string;
    name: string;
    exp: string;
    cvv?: string;
  }>({
    number: '',
    name: '',
    exp: '',
    cvv: '',
  });
  const numberRef = useRef<DefaultTextInput>(null);
  const nameRef = useRef<DefaultTextInput>(null);
  const expRef = useRef<DefaultTextInput>(null);
  const cvvRef = useRef<DefaultTextInput>(null);
  const { goBack } = useNavigation<NavigationProps>();
  const disabled = useMemo(() => Object.values(card).some((c) => !c), [card]);

  const addCard = useCardStore((state) => state.add);

  const onAddCard = () => {
    const { number, name, exp } = card;
    addCard({
      number: number.replace(/\s/g, ''),
      name,
      exp: exp.replace(/\s/g, ''),
    });
    goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={100}
    >
      <Container contentContainerStyle={{ flexGrow: 1 }}>
        <Content>
          <TextGroup>
            <TextInput
              ref={numberRef}
              label="ATM/Debit/Credit card number"
              placeholder="0000 0000 0000 0000"
              value={card.number}
              setValue={(value: string) => setCard({ ...card, number: value })}
              returnKeyType="next"
              onSubmitEditing={() => nameRef.current?.focus()}
              RightIcons={CardNumberRightIcons()}
              inputMode="numeric"
              maxLength={19}
              pattern={[/(\d{4})(?=\d)/g, '$1 ']}
            />
            <TextInput
              ref={nameRef}
              label="Name on Card"
              placeholder="John Doe"
              value={card.name}
              setValue={(value: string) => setCard({ ...card, name: value })}
              returnKeyType="next"
              onSubmitEditing={() => expRef.current?.focus()}
              inputMode="text"
              maxLength={64}
            />
            <Row gap={18}>
              <TextInput
                ref={expRef}
                label="Expiry Date"
                placeholder="MM/YY"
                value={card.exp}
                setValue={(value: string) => setCard({ ...card, exp: value })}
                returnKeyType="next"
                onSubmitEditing={() => cvvRef.current?.focus()}
                inputMode="numeric"
                maxLength={5}
                pattern={[/(\d{2})(\d{2})/, '$1/$2']}
                containerProps={{
                  width: '47.5%',
                }}
              />
              <TextInput
                ref={cvvRef}
                label="CVV"
                value={card.cvv || ''}
                setValue={(value: string) => setCard({ ...card, cvv: value })}
                returnKeyType="send"
                inputMode="numeric"
                secureTextEntry
                maxLength={3}
                containerProps={{
                  width: '47.5%',
                }}
              />
            </Row>
            <Row gap={20} width="50%" alignSelf="center" marginTop={40}>
              <VerifiedByVisa />
              <MastercardSecurecode />
              <Omise />
            </Row>
          </TextGroup>
          <Button title="Add Card" onPress={onAddCard} disabled={disabled} />
        </Content>
      </Container>
    </KeyboardAvoidingView>
  );
};
