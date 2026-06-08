import { View, Text, Image, Button, TouchableOpacity, Alert } from 'react-native';
import { styles } from './StyleDetalhes';
import { useState } from 'react';
import { api } from '../../services/api';

export default function LojaDetalhes({ route, navigation }) {

  const [deletando, setDeletando] = useState(false);



  // Pegamos os dados passados pela navegação
  const { loja } = route.params;

    const handleDeletear = () => {
    Alert.alert(
      'Confirmar exclusão',
      `Tem certeza que deseja deletar "${loja.nome}"?`,
      [
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Deletar',
          onPress: async () => {
            try {
              setDeletando(true);
              await api.delete(`/lojas/${loja.id}`);
              Alert.alert('Sucesso', 'Loja deletada com sucesso!', [
                { text: 'OK', onPress: () => navigation.goBack() }
              ]);
            } catch (error) {
              console.error('Erro ao deletar:', error);
              Alert.alert('Erro', 'Não foi possível deletar a loja');
            } finally {
              setDeletando(false);
            }
          },
          style: 'destructive',
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: loja.imagem }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.nome}>{loja.nome}</Text>
        <Text style={styles.categoria}>{loja.categoria}</Text>
        <Text style={styles.descricao}>Bem-vindo à {loja.nome}! Aqui você encontra os melhores produtos da região com entrega rápida.</Text>
        
        <TouchableOpacity
        style={styles.buttonEdit}
          onPress={() => navigation.navigate('Cadastro', { loja })} 
        >
          <Text style={styles.buttonText}>
            Editar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.buttonDel}
          onPress={handleDeletear}
          disabled={deletando}
        >
          <Text style={styles.buttonText}>
            Deletar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.buttonHome}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>
            Voltar para Home
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}