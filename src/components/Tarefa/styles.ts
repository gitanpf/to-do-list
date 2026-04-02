import styled from 'styled-components'
import variaveis from './../../styles/variaveis'
import * as enums from '../../utils/enums'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'status') {
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
  } else props.parametro === 'prioridade'
  {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.amarelo
  }
  return variaveis.cinza
}

export const Card = styled.div`
  background-color: ${variaveis.amareloCard};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  label {
    display: flex;
    margin-bottom: 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  background-color: ${(props) => retornaCorDeFundo(props)};
  margin-right: 8px;
  border-radius: 8px;
  padding: 4px 8px;
  color: ${variaveis.branco};
  font-weight: bold;
  font-size: 10px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: ${variaveis.cinza};
  font-size: 14px;
  line-height: 24px;
  font-family: 'Raleway', sans-serif;
  border: none;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: ${variaveis.branco};
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  margin-right: 10px;
  cursor: pointer;
  background-color: ${variaveis.cinza};
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
