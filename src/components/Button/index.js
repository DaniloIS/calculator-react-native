import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

import styles from './styles';

const Button = ({ onclick = () => {}, label = '', double, triple }) => { 
  const styleButton = [styles.button]
  if (double) styleButton.push(styles.buttonDouble)
  if (triple) styleButton.push(styles.buttonTriple)
  return (
    <TouchableHighlight onPress={onclick}>
      <Text  style={styles.button}>{label}</Text>
    </TouchableHighlight>
  )
}

export default Button;