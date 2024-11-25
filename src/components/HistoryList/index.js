import ItemMoviments from "../ItemMoviments";
import { Container, List } from "./styled";

export default function HistoryList({ data, deleteRegister }) {
    return (
        <Container>
            <List
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={(id) => id.id}
                renderItem={({ item }) => <ItemMoviments data={item} deleteItem={deleteRegister} />}
            />
        </Container>
    )
}