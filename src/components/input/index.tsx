import styled from '@emotion/native';
import { Paragraph } from 'components/text';
import { ReactNode, forwardRef, useState } from 'react';
import {
  TextInput as DefaultTextInput,
  TextInputProps as DefaultTextInputProps,
  ViewStyle,
} from 'react-native';

const TextInputContainer = styled.View`
  gap: 8px;
`;

const InputContainer = styled.View`
  border-width: 1px;
  border-style: solid;
  border-color: #b7b7b7;
  border-radius: 5px;
  height: 56px;
  padding-horizontal: 16px;
  display: flex;
  justify-content: center;
`;

const Row = styled.View<{ gap?: number }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${(props) => props.gap && `gap: ${props.gap}px`}
`;

interface TextInputProps extends DefaultTextInputProps {
  label: string;
  RightIcons?: ReactNode;
  containerProps?: ViewStyle;
}

export const TextInput = forwardRef<DefaultTextInput, TextInputProps>(
  ({ label, RightIcons, placeholder, containerProps, ...props }, ref) => {
    const [value, setValue] = useState('');
    const onChangeText = (value: string) => setValue(value);

    return (
      <TextInputContainer {...containerProps}>
        <Paragraph>{label}</Paragraph>
        <InputContainer>
          <Row gap={24}>
            <DefaultTextInput
              ref={ref}
              value={value}
              onChangeText={onChangeText}
              placeholder={placeholder}
              style={{
                minWidth: '70%',
              }}
              {...props}
            />
            {RightIcons && <Row>{RightIcons}</Row>}
          </Row>
        </InputContainer>
      </TextInputContainer>
    );
  },
);
