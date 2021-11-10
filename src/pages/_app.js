import { ThemeProvider } from "styled-components"
import { TopBar } from "../components/TopBar"
import { theme } from "../styles/theme"
import { NewPackProvider } from "../stores/newPackStore"
import { PlaybackProvider } from "../stores/playbackStore"
import { UserProvider } from "../stores/userStore"

import "../styles/index.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <PlaybackProvider>
          <NewPackProvider>
            <ThemeProvider theme={theme}>
              <TopBar pageProps={pageProps} />
              <Component {...pageProps} />
            </ThemeProvider>
          </NewPackProvider>
        </PlaybackProvider>
      </UserProvider>
    </>
  )
}
