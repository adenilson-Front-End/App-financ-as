import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Background = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #0f101b;
`;
export const TextTitulo = styled.Text`
  font-size: 55px;
  text-align: center;
  font-weight: bold;
  margin-top: 100px;
  color: #fff;
`;

export const Header = styled.SafeAreaView`
  flex-direction: row;
  position: absolute;
  width: 100%;
  margin-top: 5px;
  top: 5%;
  left: 10px;
  align-items: center;
  justify-content: flex-start;
`;
export const AreaIcon = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-width: 3px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  border-color: #fff;
  background-color: transparent;
`;
export const Elipse = styled(LinearGradient).attrs({
  colors: [ 'rgba(255, 255, 255,0.8)', 'rgba(12, 18, 12, 0.8)' ],
  start: { x: 1, y: 0 },
  end: { x: 1, y: 0.8 },
})`
  width: 400px;
  height: 400px;
  position: absolute;
  top: -50px;
  left: -80px;
  opacity: 0.2;
  align-self: flex-start;
  border-radius: 250px;
  border: none;
`;
export const AreaForm = styled.View`
  width: 100%;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding: 14px;
`;

export const Title = styled.Text`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 50px;
  color: #fff;
  font-size: 35px;
  font-weight: bold;
`;

export const Label = styled.Text`
  align-self: flex-start;
  font-weight: 800;
  margin-bottom: 10px;
  color: #fff;
`;
export const AreaInput = styled.View`
  width: 100%;
  align-items: center;
`;
export const Input = styled.TextInput`
  width: 100%;
  border-bottom-width: 1px;
  font-size: 18px;
  color: #fff;
  margin-bottom: 30px;
  padding: 0 8px;
  border-color: #fff;
`;

export const SubmitButton = styled.TouchableOpacity`
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 18px;
  background-color: #3b3dbf;
`;
export const SubmitText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
