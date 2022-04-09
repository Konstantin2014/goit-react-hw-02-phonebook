import React from 'react';
import { Label, Input } from '../Filter/Filter.styled';

export const Filter = ({ filter, onFilterHandleChange }) => {
  const onHandleChange = event => {
    onFilterHandleChange(event.currentTarget.value);
  };
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={onHandleChange}
      />
    </Label>
  );
};
