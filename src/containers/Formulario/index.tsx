import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ContainerMain, Titulo, Campo } from '../../styles'
import {
  Form,
  Paragrafo,
  Radio,
  Label,
  Opcoes,
  Opcao,
  BotaoSalvar,
} from './styles'
import * as enums from '../../utils/enums'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState(' ')
  const [descricao, setDescricao] = useState(' ')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)
  const [status, setStatus] = useState(enums.Status)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE,
      }),
    )
    navigate('/')
  }
  return (
    <ContainerMain>
      <Titulo>Nova tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Digite o título da sua tarefa"
        />
        <Campo
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          as="textarea"
          placeholder="Digite a descrição da sua tarefa"
        />
        <Opcoes>
          <Paragrafo>Prioridade</Paragrafo>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade as string}>
              <Radio
                value={prioridade}
                name="prioridade"
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
                type="radio"
                id={prioridade as string}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />{' '}
              <Label htmlFor={prioridade as string}>
                {prioridade as string}
              </Label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Salvar tarefa</BotaoSalvar>
      </Form>
    </ContainerMain>
  )
}

export default Formulario
