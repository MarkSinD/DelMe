import { styled } from "@mui/material/styles"
import { Box } from "@mui/material"

type FlexBoxProps = {
  width?: string
}
export const FlexBox = styled(Box)<FlexBoxProps>(({ width = "100%" }) => ({
  display: "flex",
  backgroundColor: "yellow",
  justifyContent: "center",
  alignItems: "center",
  width: width,
  height: "100%",
}))
