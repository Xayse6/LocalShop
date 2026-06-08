import { useState, useEffect } from "react";
import {api} from "../services/api";

export interface Loja{
    id: string;
    nome: string;
    categoria: string;
    distancia: string;
    imagem: string;
    descricao?: string;
}
export function useLojas(){
    const [lojas, setLojas]= useState<Loja[]>([]);
    const[loading, setLoading]= useState(true);
    async function caregarLojas() {
        try{
            setLoading(true);

            const response = await api.get<Loja[]>("/lojas");
            setLojas(response.data);
        
        }catch(error){
            console.error("Error ao carregar lojas da API: ", error);
        }finally{
            setLoading(false);
        }
    }
    useEffect(()=>{caregarLojas();},[]);
    return {lojas, loading, recaregarLojas:caregarLojas};
}