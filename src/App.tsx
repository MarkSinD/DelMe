import "./test"
import "./App.css"
import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"
import { FlexBox, Header, Row } from "./components"

function App() {
  return (
    <AppContainer>
      <Header>
        <FlexBox width="100px">Logo</FlexBox>
        <FlexBox>Категории</FlexBox>
      </Header>
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </AppContainer>
  )
}

const AppContainer = styled(Box)(() => ({
  display: "grid",
  gridTemplateRows: "repeat(6, 1fr)",
  gap: 10,
  padding: 10,
}))

export default App
