import styled from '@emotion/native';
import { useRoute } from '@react-navigation/native';
import { Text } from 'components/themed/text';
import { LeftArrow, Plus } from '../../../assets/icons';
import { View } from 'react-native';

const Container = styled.View`
  height: 40px;
  padding-horizontal: 16px;
  padding-vertical: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled(Text)`
  font-family: FC-Subject-Rounded-Bold;
`;

export const Header = ({ title }: { title?: string }) => {
  const { name } = useRoute();

  return (
    <Container>
      {name === 'main' ? <View /> : <LeftArrow />}
      <Title>{title}</Title>
      <Plus />
    </Container>
  );
};
