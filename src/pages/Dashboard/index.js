import { useFont, vec, LinearGradient } from "@shopify/react-native-skia";
import { AreaGrafico, AreaTotal, Container } from "./style";
import { Area, CartesianChart, Line } from "victory-native";
import { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { View, Text } from "react-native";
import { AuthContext } from "../../contexts/auth";



export default function DashBoard() {

    const { renderizarGrafico } = useContext(AuthContext)
    const [ dados, setDados ] = useState([

    ]);
    const font = useFont(require('../../fonts/Roboto-Regular.ttf'));



    useEffect(() => {
        async function getData() {
            const resposta = await api.get('/receives')
            const dadosItem = await resposta.data;

            const data = dadosItem.filter((item) =>
                item.description === 'undefined' ? 'ddd' : 'fff'
            ).map((item) => (
                { description: item.description, value: item.value }
            ))

            setDados(data)
        }

        getData();
    }, [ renderizarGrafico ]);







    return (
        <Container>
            <AreaTotal>
                <AreaGrafico>
                    {dados.length === 0 ? (
                        <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center', fontSize: 25, fontStyle: 'bold', color: '#dcdcdc' }}>Ops! Nada para exibir aqui!</Text>
                        </View>
                    ) : (
                        <CartesianChart data={dados} xKey="description" yKeys={[ "value" ]} axisOptions={{
                            font: font
                        }}>

                            {({ points, chartBounds }) => (

                                <>
                                    <Line points={points.value} color="#87CEFA" strokeWidth={3}
                                        animate={{ type: 'timing', duration: 500 }}
                                    />
                                    <Area
                                        points={points.value}
                                        y0={chartBounds.bottom}
                                        animate={{ type: 'timing', duration: 500 }}
                                    >

                                        <LinearGradient
                                            start={vec(chartBounds.bottom, 200)}
                                            end={vec(chartBounds.top, chartBounds.bottom)}
                                            colors={[ '#1E90FF', '#87CEFA' ]}
                                        />

                                    </Area>


                                </>
                            )}
                        </CartesianChart>
                    )}


                </AreaGrafico>
            </AreaTotal>

        </Container>
    );
}
