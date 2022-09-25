import { InputBox } from '@components/atoms/Input';
import { SelectBox } from '@components/atoms/Select';
import { Box } from 'native-base';
import React from 'react';

const typePetOptions: { label: string; value: string }[] = [
  {
    label: 'Dog',
    value: 'dog',
  },
  {
    label: 'Cat',
    value: 'cat',
  },
  {
    label: 'Bird',
    value: 'bird',
  },
  {
    label: 'Other',
    value: 'other',
  },
];

export function PetForm() {
  return (
    <Box>
      <SelectBox
        label="Pet Kind"
        placeholder="Choose an option"
        options={typePetOptions}
        errorMessage="Error Message Pet Kind"
      />

      <InputBox
        label="Pet Name"
        placeholder="Tobby"
        errorMessage="Error Message Pet Name"
      />

      <InputBox
        label="Breed"
        placeholder="Poodle"
        errorMessage="Error Message Breed"
      />
    </Box>
  );
}
