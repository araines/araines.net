import { useEffect, useState } from "react"
import { Box, IconButton, useColorMode } from "theme-ui"

const ThemeToggle = (props) => {
  const [colorMode, setColorMode] = useColorMode()
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    // fade in animation
    setOpacity(1)
  }, [])

  return (
    <Box
      sx={{
        p: 3,
        position: "absolute",
        top: 0,
        right: 0,
        opacity,
        transition: "opacity .25s ease-in-out",
      }}
    >
      <IconButton
        aria-label="Toggle dark mode"
        onClick={(e) => {
          setColorMode(colorMode === "dark" ? "default" : "dark")
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" transform="rotate(-35,12,12)" d="M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z" />
        </svg>
      </IconButton>
    </Box>
  )
}

export default ThemeToggle
