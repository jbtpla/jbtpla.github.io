import Leaderboard from './components/leaderboard'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  @media (prefers-color-scheme: dark) {
    background-color: #282c34;
  }
`

function App() {
  return (
    <Container>
      <Leaderboard />
    </Container>
  )
}

export default App