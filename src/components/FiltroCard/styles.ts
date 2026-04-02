import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#e1a32a' : '#a1a1a1')};
  background-color: ${variaveis.branco};
  color: ${(props) => (props.ativo ? '#e1a32a' : '#5e5e5e')};
  cursor: pointer;
  text-align: center;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
