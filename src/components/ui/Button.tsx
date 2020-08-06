import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: .6rem 1.2rem;
  line-height: var(--line-height);
  font-size: var(--font-size);
  box-shadow: none;
  transition: box-shadow .15s;
  color: var(--c-white);
  background-color: var(--c-main);

  &:hover {
    box-shadow: var(--box-shadow);
  }
`

type Props = {
  children: ReactNode,
  onClick: (e?: React.MouseEvent) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;;

const Button = ({
  children,
  onClick,
  ...other
}: Props) => {
  return (
    <ButtonStyled
      {...other}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  )
}

export {
  Button
};