import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const Background = styled(LinearGradient).attrs({
  colors: [ 'rgba(12,12,12,13)', 'rgba(11,11,11,0.9)' ],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
`;

export const ListBalance = styled.FlatList`

  max-height: 190px;
`;


export const ButtonCalendar = styled.TouchableOpacity`
flex-direction: row;
align-items: baseline;
`;
export const Area = styled.View`
width: 100%;
flex-direction: row;
padding: 10px;
margin-top: 8px;



`;

export const Label = styled.Text`
color: #fff;
font-size: 18px;
margin-left: 8px;
`;
