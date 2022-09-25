import { Box, FormControl, Input, WarningOutlineIcon } from 'native-base';
import React from 'react';

type InputBoxProps = {
  label: string;
  placeholder: string;
  errorMessage: string;
};

export function InputBox(inputBox: InputBoxProps) {
  return (
    <Box mb="2">
      <FormControl.Label>{inputBox.label}</FormControl.Label>

      <Input placeholder={inputBox.placeholder} type="text" />

      <FormControl.ErrorMessage
        leftIcon={<WarningOutlineIcon size="xs" />}
        mt="0"
      >
        {inputBox.errorMessage}
      </FormControl.ErrorMessage>
    </Box>
  );
}
