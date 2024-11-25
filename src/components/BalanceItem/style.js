import styled from "styled-components/native";

export const Container = styled.View`
min-width: 200px;
min-height: 190px;
margin-right: 14px;
margin-left: 14px;
align-items: center;
justify-content: center;
border-bottom-right-radius: 8px;
border-bottom-left-radius: 8px;
border-bottom-width: 8px;
position: relative;
 border-bottom-color: ${props=> props.borderColor}; 



`;

export const AreaSaldo = styled.View`

margin: 0 20px;
flex-direction: row;
align-items: center;

justify-content: center;
`;
export const Label = styled.Text`
color:#fff;
position: absolute;
font-size: 30px;
top: 0;
font-weight: 900;
`;
export const Saldo = styled.Text`
color:#fff;
margin:0 10px;
font-size: 25px;
`;