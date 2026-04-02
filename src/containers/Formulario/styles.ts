import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  max-width: 550px;
  width: 100%;

  textarea {
    resize: none;
    height: 200px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`

export const Paragrafo = styled.p`
  padding-bottom: 10px;
  font-weight: bolder;
  margin-left: 14px;
  font-weight: bolder;
`

export const Opcoes = styled.div`
  margin-bottom: 16px;
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`

export const Radio = styled.input`
  padding: 5px;
  margin: 0 5px;
`

export const Label = styled.label`
  font-weight: bolder;
  margin-right: 15px;
  font-size: 14px;
`

export const BotaoSalvar = styled.button`
  margin-top: 20px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  color: ${variaveis.branco};
  font-weight: Bolder;
  background-color: ${variaveis.verde};
  justify-content: center;
  display: block;
  cursor: pointer;
`
