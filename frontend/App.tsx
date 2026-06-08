import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/Home/HomeScreen';
import LojaDetalhes from './src/screens/Details/LojaDetalhes';
import CadastroLoja from './src/screens/cadastroLoja/CadastroLoja';
import LojaCard from './src/components/LojaCard';
import { Loja } from './src/@types/loja';
import { RootStackParamList } from './src/@types/loja';

//const Stack = createStackNavigator();
const Stack = createStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        id="mainStack"
        screenOptions={{ headerTintColor: '#27ae60' }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'LocalShop' }}
        />
        <Stack.Screen
          name="Detalhes"
          component={LojaDetalhes}
          options={({ route }) => ({ title: route.params.loja.nome })}
        />
        <Stack.Screen
          name="Cadastro"
          component={CadastroLoja}
          options={{title:"Novo Local"}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

