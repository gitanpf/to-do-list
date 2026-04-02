import { useSelector } from 'react-redux'
import { ContainerMain, Titulo } from '../../styles'
import { RootReducer } from '../../store'
import TarefaClass from '../../models/Tarefa'
import Tarefa from '../../components/Tarefa'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro,
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item: TarefaClass) =>
          item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0,
      )
      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item: TarefaClass) => item.prioridade === valor,
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item: TarefaClass) => item.status === valor,
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementoMensagem =
      termo !== undefined && termo.length > 0 ? `"${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: todas ${complementoMensagem}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: "${`${criterio}=${valor}`}" ${complementoMensagem}`
    }
    return mensagem
  }

  const tarefasFiltradas = filtraTarefas()
  const mensagem = exibeResultadoFiltragem(tarefasFiltradas.length)

  return (
    <ContainerMain>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {tarefasFiltradas.map((t: TarefaClass) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </ContainerMain>
  )
}

export default ListaDeTarefas
