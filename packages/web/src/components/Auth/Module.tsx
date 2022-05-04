import styled from "styled-components"

const Module = ({ children }: { children: React.ReactNode }) => {
    return <StyledModule>{children}</StyledModule>
}

const StyledModule = styled.div`
    display: flex;
    flex-flow: column;
    padding: 52px 38px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: ${({ theme }) => theme.borderRadius};
    width: 100%;
    max-width: 480px;
    margin: auto;
    box-shadow: ${({ theme }) => theme.boxShadow};

    h1 {
        margin-bottom: 42px;
    }
`

export default Module
