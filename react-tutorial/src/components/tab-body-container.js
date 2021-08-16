import styled from "styled-components";

const Container = styled.div`
    padding: 12px 64px;
    `

export const TabBodyContainer = ({ children, title }) => {
    return (
        <Container>
            <h3>{title}</h3>
            {children}
        </Container>
    )
}