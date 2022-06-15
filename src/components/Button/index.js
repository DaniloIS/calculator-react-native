import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

import styles from './styles';

const Button = ({ onclick = () => {}, label = '' }) => {
  return (
    <TouchableHighlight onPress={onclick}>
      <Text  style={styles.button}>{label}</Text>
    </TouchableHighlight>
  )
}

export default Button;