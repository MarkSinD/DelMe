import { styled } from "@mui/material/styles"
import { Box } from "@mui/material"

export const Header = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 10,
}))