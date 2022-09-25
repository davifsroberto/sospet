import { InputBox } from '@components/atoms/Input';
import { SelectBox } from '@components/atoms/Select';
import { Box } from 'native-base';
import React from 'react';

const typePhoneOptions: { label: string; value: string }[] = [
  {
    label: 'Yes, is WhatsApp too.',
    value: 'yes',
  },
  {
    label: 'No, is not WhatsApp.',
    value: 'noe',
  },
];

export function PetOwer() {
  return (
    <Box>
      <InputBox
        label="Owner Name"
        placeholder="Jhon Doe"
        errorMessage="Error Message Owner Name"
      />

      <InputBox
        label="Email"
        placeholder="353 89 478 4620"
        errorMessage="Error Message Email"
      />

      <InputBox
        label="Phone"
        placeholder="353 89 478 4620"
        errorMessage="Error Message Phone"
      />

      <SelectBox
        label="This phone is WhatsApp too?"
        placeholder="Choose an option"
        options={typePhoneOptions}
        errorMessage="Error Message Phone Type"
      />
    </Box>
  );
}
