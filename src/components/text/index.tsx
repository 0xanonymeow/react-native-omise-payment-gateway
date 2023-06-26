import styled from '@emotion/native';
import { TextStyle } from 'react-native';

const Base = styled.Text<TextStyle>`
  font-family: FC-Subject-Rounded-Regular;
  ${(props) => props.color && `color: ${String(props.color)}`}
`;

export const Heading = styled(Base)`
  font-family: FC-Subject-Rounded-Bold;
  font-size: 18px;
`;

export const Subheading = styled(Base)`
  font-family: FC-Subject-Rounded-Regular;
  font-size: 18px;
`;

export const Paragraph = styled(Base)`
  font-family: FC-Subject-Rounded-Regular;
  font-size: 15px;
`;

export const Body = styled(Base)`
  font-family: FC-Subject-Rounded-Regular;
  font-size: 10px;
`;

export const Dot = styled(Base)`
  font-family: FC-Subject-Rounded-Bold;
  font-size: 32px;
  line-height: 40px;
`;
