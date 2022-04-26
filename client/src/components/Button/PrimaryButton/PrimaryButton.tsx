import { ButtonProps } from '@mui/material';
import React from 'react';
import * as S from './PrimaryButton.styles';

const PrimaryButton: React.FC<ButtonProps> = ({ children }) => (
  <S.PrimaryButton>{children}</S.PrimaryButton>
);

export default PrimaryButton;
