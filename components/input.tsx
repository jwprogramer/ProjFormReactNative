import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import CheckBox from 'expo-checkbox';
import { TextInputMask } from 'react-native-masked-text';
import RNPickerSelect from 'react-native-picker-select';

// Componente Input
const Input = ({ label, type, value, onChange, mask, values, items, placeholder }) => {
  switch (type) {
    case 'text':
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChange}
          />
        </View>
      );

    case 'mask':
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <TextInputMask
            type={'datetime'}
            options={{ format: mask }}
            value={value}
            onChangeText={onChange}
            style={styles.input}
          />
        </View>
      );

    case 'radio':
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          {Object.keys(values).map((key) => (
            <View key={key} style={styles.radioOption}>
              <RadioButton
                value={key}
                status={value === key ? 'checked' : 'unchecked'}
                onPress={() => onChange(key)}
              />
              <Text style={styles.radioLabel}>{values[key]}</Text>
            </View>
          ))}
        </View>
      );

    case 'checkbox':
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          {Object.keys(values).map((key) => (
            <View key={key} style={styles.checkboxOption}>
              <Text style={styles.checkboxLabel}>{values[key]}</Text>
              <CheckBox
                value={value[key]}
                onValueChange={() => onChange(key)}
              />
            </View>
          ))}
        </View>
      );

      case 'select':
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <RNPickerSelect
            onValueChange={onChange}
            value={value}
            items={items}
            style={pickerSelectStyles}
            placeholder={placeholder}
          />
        </View>
      );

    default:
      return null;
  }
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  radioLabel: {
    marginLeft: 8,
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
   person: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, 
   }
  });

export default Input;