import styled, { createGlobalStyle } from 'styled-components'
import variaveis from '../styles/variaveis'

const EstiloGlobal = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Raleway", sans-serif;
        list-style: none;
    }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const ContainerMain = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  border-radius: 8px;
  border: solid 2px ${variaveis.cinza};
  background-color: ${variaveis.branco};
  color: ${variaveis.cinza};
  padding: 8px;
  width: 100%;
`

export default EstiloGlobal
