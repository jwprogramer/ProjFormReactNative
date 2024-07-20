import React, { useState } from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import Input from '@/components/input'; 
import { SafeAreaView } from 'react-native-safe-area-context';

const Tela = () => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [sexo, setSexo] = useState('');
  const [uf, setUf] = useState('');
  const [linguagens, setLinguagens] = useState({
    java: false,
    javascript: false,
    python: false,
    PHP: false,
  });

  const handleCheckboxChange = (key: string | number) => {
    setLinguagens((prevLinguagens) => ({
      ...prevLinguagens,
      [key]: !prevLinguagens[key],
    }));
  };

  const handleSubmit = () => {
    console.log({
      nome,
      dataNascimento,
      sexo,
      linguagens: Object.keys(linguagens).filter((key) => linguagens[key]),
    });
    alert('Dados enviados!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>FORMULÁRIO DE CADASTRO</Text>
      <Input label="Nome" type="text" value={nome} onChange={setNome} />
      <Input label="Data de nascimento" type="mask" mask="DD/MM/YYYY" value={dataNascimento} onChange={setDataNascimento} />
      <Input
        label="Sexo"
        type="radio"
        value={sexo}
        onChange={setSexo}
        values={{ 'm': 'Masculino', 'f': 'Feminino' }}
      />
      <Input
        label="UF"
        type="select"
        value={uf}
        onChange={setUf}
        items={[
          { label: 'AC', value: 'AC' },
          { label: 'AL', value: 'AL' },
          { label: 'AP', value: 'AP' },
          { label: 'AM', value: 'AM' },
          { label: 'BA', value: 'BA' },
          { label: 'CE', value: 'CE' },
          { label: 'DF', value: 'DF' },
          { label: 'ES', value: 'ES' },
          { label: 'GO', value: 'GO' },
          { label: 'MA', value: 'MA' },
          { label: 'MG', value: 'MG' },
          { label: 'MT', value: 'MT' },
          { label: 'MS', value: 'MS' },
          { label: 'PA', value: 'PA' },
          { label: 'PB', value: 'PB' },
          { label: 'PR', value: 'PR' },
          { label: 'PE', value: 'PE' },
          { label: 'PI', value: 'PI' },
          { label: 'RJ', value: 'RJ' },
          { label: 'RN', value: 'RN' },
          { label: 'RS', value: 'RS' },
          { label: 'RO', value: 'RO' },
          { label: 'RR', value: 'RR' },
          { label: 'SC', value: 'SC' },
          { label: 'SE', value: 'SE' },
          { label: 'SP', value: 'SP' },
          { label: 'TO', value: 'TO' },
        ]}
        placeholder={{ label: 'Selecione um estado...', value: '' }}
      />
      <Input
        label="Linguagens"
        type="checkbox"
        value={linguagens}
        onChange={handleCheckboxChange}
        values={{ 'java': 'Java', 'javascript': 'JavaScript', 'python': 'Python', 'PHP': 'PHP' }}
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800',
  }
});

export default Tela;