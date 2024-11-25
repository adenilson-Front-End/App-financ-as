import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const Background = styled(LinearGradient).attrs({
  colors: [ 'rgba(0,0,0,.9)', 'rgba(11,11,11,0.8)' ],
  start: { x: 1, y: 0 },
  end: { x: 0, y: 0 },
})`
  flex: 1;
`;

export const Container = styled.View`
flex:1;

align-items: center;
`;

export const AreaText = styled.View`
width: 40%;
flex-direction: row;
`;
export const TextSaudacao = styled.Text`
font-size: 22px;
color:#fff;
`;

export const NomeUser = styled.Text`
font-size: 22px;
color:#fff;
`;
export const ButtonRegister = styled.TouchableOpacity`
width: 90%;
height: 45px;
align-items: center;
justify-content: center;
border-radius: 4px;
margin: 14px 0;
background-color:  #3b3dbf;
`;
export const TextButton = styled.Text`
font-size: 18px;
font-weight: bold;
color:#fff;
`;
export const ButtonLogOut = styled.TouchableOpacity`
width: 90%;
height: 45px;
border-width: 1px;
border-color: #fff;
align-items: center;
justify-content: center;
border-radius: 4px;
`;
export const TextLogOut = styled.Text`
font-size: 18px;
font-weight: bold;
color:#FF3E4D;
`;



