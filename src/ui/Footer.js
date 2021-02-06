import { Box, Text } from "theme-ui"

const Footer = (props) => (
  <Box
    sx={{
      p: 4,
      color: "#666",
      textAlign: "left",
      fontSize: 1,
    }}
  >
    <Text sx={{ mx: 3, display: "inline-block" }}>Andy Raines</Text>
    <Text sx={{ mx: 3, display: "inline-block" }}>
      GitHub <a href="https://github.com/araines">araines</a>
    </Text>
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Follow <a href="https://twitter.com/andyraines">@andyraines</a>
    </Text>
  </Box>
)

export default Footer
