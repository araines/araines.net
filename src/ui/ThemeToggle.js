import { useEffect, useState } from "react"
import { Box, IconButton, useColorMode } from "theme-ui"
import Button from "./Button"
import Icon from '@mdi/react'
import { mdiMoonWaningCrescent } from '@mdi/js';

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
        aria-label='Toggle dark mode'
        onClick={e => {
          setColorMode(colorMode === "default" ? "dark" : "default")
        }}
      >
        <Icon
          path={mdiMoonWaningCrescent}
          rotate={-35}
        />
      </IconButton>
    </Box>
  )
}

export default ThemeToggle
