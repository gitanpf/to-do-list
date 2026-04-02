import { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import * as enums from '../../utils/enums'
import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

type Props = {
  titulo: string
  descricao: string
  prioridade: enums.Prioridade
  status: enums.Status
  id: number
}

const Tarefa = ({
  descricao: descricaoOriginal,
  titulo,
  prioridade,
  status,
  descricao,
  id,
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricaoEditada, setDescricaoEditada] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricaoEditada(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricaoEditada(descricaoOriginal)
  }

  function editando() {
    dispatch(
      editar({
        id,
        titulo,
        descricao,
        prioridade,
        status,
      }),
    )
    setEstaEditando(false)
  }

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alteraStatus({
        id,
        finalizado: evento.target.checked,
      }),
    )
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          onChange={alteraStatusTarefa}
          checked={status === enums.Status.CONCLUIDA}
        />
        <S.Titulo>
          {estaEditando && <em>Editando tarefa: </em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricaoEditada}
        onChange={(evento) => setDescricaoEditada(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar onClick={editando}>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
