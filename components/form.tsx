import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { RadioButton } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import CheckBox from 'expo-checkbox';
import { SafeAreaView } from 'react-native-safe-area-context';


export const Formulario = () => {
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

  const RadioOption = ({ label, value, status, onPress, color }) => (
    <View style={styles.radioOption}>
      <RadioButton
        value={value}
        status={status === value ? 'checked' : 'unchecked'}
        onPress={() => onPress(value)}
        color={color}
      />
      <Text onPress={() => onPress(value)} style={styles.radioLabel}>
        {label}
      </Text>
    </View>
  );

  const handleCheckboxChange = (val: string) => {
    setLinguagens({ ...linguagens, [val]: !linguagens[val] });
  };

  const handleSubmit = () => {
    console.log({
      nome,
      dataNascimento,
      sexo,
      uf,
      linguagens: Object.keys(linguagens).filter((val) => linguagens[val]),
    });
    alert("Dados enviados!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>FORMULÁRIO DE CADASTRO</Text>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Data de Nascimento</Text>
      <TextInputMask
        type={'datetime'}
        options={{
          format: 'DD/MM/YYYY',
        }}
        value={dataNascimento}
        onChangeText={setDataNascimento}
        style={styles.input}
      />

      <View>
        <Text style={styles.label}>Sexo</Text>
        <View style={styles.radioGroup}>
          <RadioOption
            label="Masculino"
            value="Masculino"
            status={sexo}
            onPress={setSexo}
          />
          <RadioOption
            label="Feminino"
            value="Feminino"
            status={sexo}
            onPress={setSexo}
          />
        </View>
      </View>

      <Text style={styles.label}>UF</Text>
      <RNPickerSelect
        onValueChange={(value) => setUf(value)}
        value={uf}
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
        style={pickerSelectStyles}
        placeholder={{
          label: 'Selecione um estado...',
          value: '',
        }}
      />

      <Text style={styles.label}>Linguagens</Text>
      <View style={styles.checkboxGroup}>
      <View style={styles.checkboxOption}>
        <Text style={styles.checkboxLabel}>Java</Text>
        <CheckBox
          value={linguagens.java}
          onValueChange={() => handleCheckboxChange('java')}
        />
      </View>
      <View style={styles.checkboxOption}>
        <Text style={styles.checkboxLabel}>JavaScript</Text>
        <CheckBox
          value={linguagens.javascript}
          onValueChange={() => handleCheckboxChange('javascript')}
        />
      </View>
      <View style={styles.checkboxOption}>
        <Text style={styles.checkboxLabel}>Python</Text>
        <CheckBox
          value={linguagens.python}
          onValueChange={() => handleCheckboxChange('python')}
        />
      </View>
      <View style={styles.checkboxOption}>
        <Text style={styles.checkboxLabel}>PHP</Text>
        <CheckBox
          value={linguagens.PHP}
          onValueChange={() => handleCheckboxChange('PHP')}
        />
      </View>
    </View>

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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '700',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  radioGroup: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  radioLabel: {
    marginLeft: 8,
  },
  checkboxGroup: {
    marginBottom: 16,
  },
  checkboxOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkboxLabel: {
    marginRight: 8,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
});
