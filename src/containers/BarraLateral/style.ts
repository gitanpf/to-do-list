import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${variaveis.branco};
  height: 100vh;
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px;
  margin-top: 16px;
`

export const BotaoVoltar = styled.button`
  border-radius: 8px;
  background-color: ${variaveis.cinza};
  font-weight: bolder;
  font-size: 14px;
  border: none;
  padding: 10px;
  color: ${variaveis.branco};
  cursor: pointer;
  align-items: center;
  display: flex;
  &::before {
    content: '<';
    margin-right: 5px;
    font-size: 24px;
    font-weight: bold;
    align-items: center;
    display: inline-flex;
    line-height: 1;
    margin-bottom: 4px;
  }
`
