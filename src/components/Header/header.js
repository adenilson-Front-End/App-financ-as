import { TouchableOpacity } from "react-native-gesture-handler";
import { Container, Title } from "./style";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

export default function Header({ title }) {
    const navigation = useNavigation();
    return (
        <Container>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icon name="menu" size={30} color={'#fff'} />
            </TouchableOpacity>
            <Title>{title}</Title>
        </Container>
    )
}