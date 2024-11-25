import { Alert, TouchableWithoutFeedback } from "react-native";
import { Container, Label, label } from "./styled";
import Icon from 'react-native-vector-icons/Feather'

export default function ItemMoviments({ data, deleteItem }) {


    function handleDelete() {
        Alert.alert('Atenção!', 'Tem certeza que deseja deletar esse registro?', [
            {
                text: "Cancelar",
                style: 'cancel'
            },
            {
                text: 'Deletar',
                onPress: () => deleteItem(data.id)
            }
        ])
    }
    return (
        <TouchableWithoutFeedback onLongPress={handleDelete}>
            <Container>

                <Icon name={data.type === 'receita' ? 'trending-up' : 'trending-down'} color={data.type === 'receita' ? '#1F51FF' : '#FF073A'} size={30} />
                <Label>R${data.value} </Label>
                <Label>{data.description}</Label>
            </Container>
        </TouchableWithoutFeedback>
    )
}