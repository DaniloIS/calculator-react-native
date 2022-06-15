import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Display = ({ value }) => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue} numberOfLines={1}>
        {value}
      </Text>
    </View>
  )
}

export default Display;