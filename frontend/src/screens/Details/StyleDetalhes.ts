import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },

  image: {
    width: '100%',
    height: 260,
    resizeMode: 'cover',
  },

  content: {
    flex: 1,
    padding: 20,
  },

  nome: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
    marginBottom: 6,
  },

  categoria: {
    fontSize: 17,
    color: '#777',
    marginBottom: 16,
  },

  descricao: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
    marginBottom: 30,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },

  buttonEdit: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1c40f',
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3,
  },

  buttonDel: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e74c3c',
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3,
  },

  buttonHome: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#27ae60',
    paddingVertical: 14,
    borderRadius: 10,
    elevation: 3,
  },
});

export default styles;