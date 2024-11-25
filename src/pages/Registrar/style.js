import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Background = styled(LinearGradient).attrs({
  colors: ['rgba(12,12,12,13)', 'rgba(11,11,11,0.9)'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
`;

export const Container = styled.View`
flex: 1;
align-items: center;
`;
export const AreaForm = styled.View`
width: 90%;
align-items: center;
padding: 8px;
`;
export const Input = styled.TextInput`
  width: 100%;
  font-size: 18px;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  color:#121212;
  background-color: #ffff;
`;
export const ButtonRegistrar = styled.TouchableOpacity`
width: 100%;
height: 45px;
align-items: center;
justify-content: center;
margin-top: 20px;
border-radius: 8px;
background-color: #3b3dbf;
`;
export const TextButton = styled.Text`
color: #FFF;
font-size: 18px;
font-weight: bold;
`;

