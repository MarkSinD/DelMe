import { styled } from "@mui/material/styles"
import { Paper } from "@mui/material"

type ItemProps = {
  gridColumn?: string
  gridRow?: string
}

export const Item = styled(Paper)<ItemProps>(
  ({ theme, gridColumn, gridRow }) => ({
    backgroundColor: "antiquewhite",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    gridColumn: gridColumn,
    gridRow: gridRow,
  }),
)
