import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import styles from './styles';
import CssStyles from '../../CssStyles/CssStyles';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const OTPVerification = ({ value, onChangeText, cellCount, ...rest }) => {
  // const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value,cellCount });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue:onChangeText,
  });
  // console.log(value+"=="+onChangeText+"=="+cellCount+"==")
  
    return (
      <View style={styles.root}>
        <CodeField
            ref={ref}
            {...props}
            {...rest}
          value={value}
          onChangeText={onChangeText}
          cellCount={cellCount}
          rootStyle={styles.codeFiledRoot}
          keyboardType="number-pad"
          // textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[styles.cellRoot, isFocused && styles.focusCell]}>
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />

      </View>
    );
  };

export default OTPVerification;
