import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components"
import FontStyles from "../theme/fontStyles"
import GlobalStyles from "../theme/globalStyles"
import Theme from "../theme/theme"

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <StyledComponentsThemeProvider theme={Theme}>
            <>
                <FontStyles />
                <>
                    <GlobalStyles />
                    {children}
                </>
            </>
        </StyledComponentsThemeProvider>
    )
}

export default ThemeProvider
