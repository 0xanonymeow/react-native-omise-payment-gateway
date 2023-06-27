import styled from '@emotion/native';
import { Heading } from 'components/text';
import { ButtonProps, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const StyledButton = styled.TouchableOpacity`
  width: ${String(screenWidth - 32)}px;
  background-color: #4ad8da;
  border-radius: 22px;
  padding-horizontal: 18px;
  padding-vertical: 12px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = ({
  title,
  ...props
}: { title: string } & ButtonProps) => {
  return (
    <StyledButton {...props}>
      <Heading color="white">{title}</Heading>
    </StyledButton>
  );
};
