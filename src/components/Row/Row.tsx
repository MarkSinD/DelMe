import { memo } from "react"
import { Item } from "../Item"
import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"

export const RowContainer = styled(Box)(() => ({
  display: "grid",
  gridTemplateRows: "repeat(2, 1fr)",
  gridTemplateColumns: "100px 1fr 100px",
  gap: 3,
}))

export const Row = memo(() => {
  return (
    <RowContainer>
      <Item gridColumn="1 / 2" gridRow="1 / 3">
        xs=123123
      </Item>
      <Item>xs=4</Item>
      <Item gridColumn="3 / 4" gridRow="1 / 3">
        xs=123123
      </Item>
      <Item>xs=4</Item>
    </RowContainer>
  )
})

Row.displayName = "Row"
