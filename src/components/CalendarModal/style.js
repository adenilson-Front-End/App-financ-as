import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;

background-color: rgba(255,255,255,.3);
`;

export const ModalContent = styled.View`

flex: 2;
background-color: #000;
`;

export const ButtonFiltrar = styled.TouchableOpacity`
height: 45px;
border-radius: 4px;
align-items: center;
justify-content: center;
  margin-left: 8px;
  margin-right: 8px;
  background: #3d3ffa;
`;

export const TextButton = styled.Text`
font-size:18px;
font-weight: bold;
color: #fff;
`;