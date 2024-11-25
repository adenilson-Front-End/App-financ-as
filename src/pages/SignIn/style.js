import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #D3D3D3;
`;

export const AreaImage = styled.View`
  flex: 1;

  align-items: center;
  justify-content: flex-end;
`;

export const Logo = styled.Image`
width: 300px;
height: 300px;
top: 15px;
`;
export const AreaForm = styled.View`
  flex: 1.3;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding: 14px;
  background-color: #0f101b;
`;

export const Title = styled.Text`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 50px;
  color:#fff;
  font-size: 35px;
  font-weight: bold;
`;

export const Label = styled.Text`
align-self: flex-start;
font-weight: 800;
margin-bottom: 10px;
color:#fff;
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
export const Link = styled.TouchableOpacity`
justify-content: center;
align-items: center;
margin-top: 18px;
`;
export const TextLink = styled.Text`
font-size: 18px;
color: #fff;
`;


