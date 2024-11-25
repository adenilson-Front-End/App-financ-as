import { useState } from "react";
import { Container, AreaDate, Modal, ModalContent, ButtonFiltrar, TextButton } from "./style";
import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";

export default function CalendarModal({ fechaModal, handleFilter }) {
    LocaleConfig.locales[ 'pt-br' ] = {
        monthNames: [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ],
        monthNamesShort: [
            'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
        ],
        dayNames: [
            'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
        ],
        dayNamesShort: [
            'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'
        ],
        today: 'Hoje'
    };
    LocaleConfig.defaultLocale = 'pt-br';

    const [ dateNow, setDateNow ] = useState(new Date());
    const [ markeddates, setMarkedDates ] = useState({})

    function handleOnPress(date) {
        setDateNow(new Date(date.dateString));
        let markedDay = {};
        markedDay[ date.dateString ] = {
            selected: true,
            selectedColor: '#3d3bff',
            selectedText: '#fff'
        }
        setMarkedDates(markedDay)

    }

    function handleFilterDate() {
        handleFilter(dateNow)
        fechaModal(true)

    }


    return (

        <Container>
            <TouchableWithoutFeedback onPress={fechaModal}>
                <View style={{ flex: 1 }}>

                </View>
            </TouchableWithoutFeedback>

            <ModalContent>
                <Calendar
                    onDayPress={handleOnPress}
                    markedDates={markeddates}
                    enableSwipeMonths={true} // faz mudar a o mes ap deslizar
                    theme={{
                        calendarBackground: '#000', // cor do calendario
                        textSectionTitleColor: '#fff',// cor dos dias da semana
                        todayTextColor: '#000',// cor do dia atual
                        selectedDayBackgroundColor: '#00ad', // cor do fundo do dia selecionado
                        selectedDayTextColor: '#fff', //cor de dentro dexto
                        todayBackgroundColor: '#fff',// cor do fundo dia atual
                        textDayFontWeight: 'bold',
                        monthTextColor: '#fff'
                    }}
                />

                <ButtonFiltrar activeOpacity={.8} onPress={handleFilterDate}  >
                    <TextButton>Filtrar</TextButton>
                </ButtonFiltrar>
            </ModalContent>

        </Container>
    )
}