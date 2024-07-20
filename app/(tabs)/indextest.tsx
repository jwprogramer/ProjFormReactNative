import { Formulario } from '@/components/form';
import {  StyleSheet, View } from 'react-native';



export default function TelaPrincipal() {
  return (
    <View style={styles.container}>
      <Formulario />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
