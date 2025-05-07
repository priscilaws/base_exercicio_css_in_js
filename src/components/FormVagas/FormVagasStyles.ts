import { ComponentProps } from 'react'
import styled from 'styled-components'

export const Form = styled.form<ComponentProps<'form'>>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const Input = styled.input<ComponentProps<'input'>>`
  padding: 0 16px;
  outline-color: var(--cor-principal);
  height: 40px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
`

export const Button = styled.button<ComponentProps<'button'>>`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`
