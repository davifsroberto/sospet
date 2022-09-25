import { Box, FormControl, Select, WarningOutlineIcon } from 'native-base';
import React from 'react';

type SelectBoxProps = {
  label: string;
  placeholder: string;
  errorMessage: string;
  options: { label: string; value: string }[];
};

export function SelectBox(selectBox: SelectBoxProps) {
  return (
    <Box mb="2">
      <FormControl.Label>{selectBox.label}</FormControl.Label>

      <Select placeholder={selectBox.placeholder} mt="1">
        {selectBox.options.map((option, index) => (
          <Select.Item key={index} label={option.label} value={option.value} />
        ))}
      </Select>

      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        Please make a selection!
      </FormControl.ErrorMessage>
    </Box>
  );
}
