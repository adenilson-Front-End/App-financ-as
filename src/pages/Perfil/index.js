import Header from "../../components/Header/header";
import { Background, Container, TextSaudacao, NomeUser, AreaText, ButtonRegister, TextButton, ButtonLogOut, TextLogOut } from "./style";

import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { useNavigation } from '@react-navigation/native';

export default function Perfil() {
    const { logOut, user } = useContext(AuthContext);
    const navigation = useNavigation();
    async function handleLogOut() {
        await logOut();
    }
    return (
        <Background>
            <Header title={'Meu perfil'} />
            <Container>
                <AreaText>
                    <TextSaudacao>Olá, </TextSaudacao>
                    <NomeUser numberOfLines={1}>{user && user.name}</NomeUser>
                </AreaText>

                <ButtonRegister onPress={() => navigation.navigate('Registrar')}>
                    <TextButton>Novo registro</TextButton>
                </ButtonRegister>

                <ButtonLogOut onPress={handleLogOut}>
                    <TextLogOut >Sair</TextLogOut>
                </ButtonLogOut>
            </Container>
        </Background>
    )
}