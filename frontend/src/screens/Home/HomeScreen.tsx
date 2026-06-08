import { View, FlatList, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import LojaCard from '../../components/LojaCard';
import { useLojas } from '../../hooks/useLojas';
import styles from './StyleHome';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../@types/loja';
import { useCallback } from 'react';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

export default function HomeScreen() {
  const { lojas, loading, recaregarLojas } = useLojas();

  useFocusEffect(
    useCallback(() => {
      recaregarLojas();
    }, [])
  );
  const navigation = useNavigation<HomeScreenNavigationProp>();

  if (loading) return <ActivityIndicator size="large" color="#27ae60"/>;

  return (
    <View style={styles.container}>
      <FlatList
        data={lojas}
        renderItem={({ item }) => <LojaCard loja={item} />}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}