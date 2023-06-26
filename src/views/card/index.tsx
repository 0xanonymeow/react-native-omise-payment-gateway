import styled from '@emotion/native';
import { Button } from 'components/button';
import { Container } from 'components/container';
import { TextInput } from 'components/input';
import { useRef } from 'react';
import {
  TextInput as DefaultTextInput,
  KeyboardAvoidingView,
  Platform,
  ViewStyle,
} from 'react-native';
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

export const Card = () => {
  const numberRef = useRef<DefaultTextInput>(null);
  const nameRef = useRef<DefaultTextInput>(null);
  const expRef = useRef<DefaultTextInput>(null);
  const cvvRef = useRef<DefaultTextInput>(null);

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
          <Button title="Add Card" />
        </Content>
      </Container>
    </KeyboardAvoidingView>
  );
};
