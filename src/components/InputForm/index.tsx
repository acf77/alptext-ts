import React from 'react';
import { TextInput,  TextInputProps, View } from 'react-native';
import { styles } from './styles';

type Props = TextInputProps & {
  title: string;
}

export function InputForm({title, ...rest}: Props)  {
  return(
    
    <TextInput
    {...rest}
    style={styles.inputTitulo}
    placeholder={title}
    numberOfLines={100}
    enablesReturnKeyAutomatically={true}
    multiline={true}
    scrollEnabled={true}
  />
  

  )
}

