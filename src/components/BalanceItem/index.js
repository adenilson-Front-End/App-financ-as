import { useMemo } from "react";
import { Container,Label,Saldo,AreaSaldo } from "./style";
import Feather from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/Feather";

export default function BalanceItem({data}){

    const labelColor = useMemo(()=>{
        if(data.tag === 'receita'){
            return {
                label:'Receita',
                color:'#1F51FF',
                icon:'trending-up'
                
            }
        
        }    else if(data.tag === "saldo"){
            return {
                label:'Saldo',
                color:'#39FF14',
                icon:'dollar-sign'
            }
        
        }
        else{
            return {
                label:'Despesas',
                color:'#FF073A',
                icon:'trending-down'
            }
        }
    })

return(
    <Container borderColor = {labelColor.color} >
        <Label>{labelColor.label}</Label>
        <AreaSaldo>
        <Icon name={labelColor.icon} color={labelColor.color} size={40}/>
        <Saldo>{data.saldo}</Saldo>
        </AreaSaldo>
    </Container>
)
}