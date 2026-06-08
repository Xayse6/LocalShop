import React from "react";

import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Text,
  Alert,
} from "react-native";

import { useCadastroLoja } from "../../hooks/useCadastroLoja";
import styles from "./CadastroLojaStyles";
import { api } from "../../services/api";
import { useNavigation } from "@react-navigation/native";

export default function CadastroLoja({route}) {

  const loja = route?.params?.loja;

  const { formData, updateField } =
    useCadastroLoja(loja);

  const navigation=useNavigation();

  async function handleSalvar() {

    const {
      nome, 
      categoria, 
      distancia, 
      imagem, 
      descricao,
    } = formData;
    
    if(!nome || !categoria || !distancia){
    Alert.alert(
      "Aviso", 
      "Preencha os campos obrigatorios"
    );
    return;
  }
  try {
    //Envia os dados do formulario no corpo do POST
    if (loja?.id) {
      await api.put(`/lojas/${loja.id}`, {
        nome,
        categoria,
        distancia,
        imagem,
        descricao,
      });
      Alert.alert(
        "Sucesso",
        "Loja atualizada com sucesso!"
      );
    } else {
      await api.post("/lojas", {
        nome,
        categoria,
        distancia,
        imagem,
        descricao,
      });
      Alert.alert(
        "Sucesso",
        "Loja cadastrada com sucesso!"
      );
    }
    navigation.goBack();
  } catch (error) {
    console.error(error);
    Alert.alert(
      "Erro",
      loja?.id
        ? "Não foi possível atualizar a loja"
        : "Não foi possível salvar a loja"
      );
    }
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : undefined
      }
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>
          {loja?.id
            ? "Editar Local"
            : "Cadastrar Local"}
        </Text>

        <Text style={styles.label}>
          Nome do local *
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Café Central"
          value={formData.nome}
          onChangeText={(v) =>
            updateField("nome", v)
          }
        />

        <Text style={styles.label}>
          Categoria *
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Restaurante"
          value={formData.categoria}
          onChangeText={(v) =>
            updateField("categoria", v)
          }
        />

        <Text style={styles.label}>
          Link da imagem
        </Text>
        <TextInput
          style={styles.input}
          placeholder="https://..."
          keyboardType="url"
          autoCapitalize="none"
          value={formData.imagem}
          onChangeText={(v) =>
            updateField("imagem", v)
          }
        />

        <Text style={styles.label}>
          Distância *
        </Text>
        <TextInput
          style={styles.input}
          placeholder="200"
          keyboardType="numeric"
          value={formData.distancia}
          onChangeText={(v) =>
            updateField("distancia", v)
          }
        />

        <Text style={styles.label}>
          Descrição
        </Text>
        <TextInput
          style={styles.input}
          value={formData.descricao}
          onChangeText={(v) =>
            updateField("descricao", v)
          }
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSalvar}
        >
          <Text style={styles.buttonText}>
            {loja?.id
              ? "Atualizar Local"
              : "Salvar Local"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
