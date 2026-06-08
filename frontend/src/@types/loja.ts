export interface Loja {
  id: string;
  nome: string;
  categoria: string;
  imagem: string;
  distancia: string;
  descricao?: string;
}

export type RootStackParamList = {
  Home: undefined;
  Detalhes: { loja: Loja };
  Cadastro: undefined;
};