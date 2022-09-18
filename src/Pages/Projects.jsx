import React from 'react'
import styled from 'styled-components'
const Projects = () => {
  return (
    <>
        <Container>
            <Wrapper>
                Projects
            </Wrapper>
        </Container>
    </>
  )
}

export default Projects
const Container = styled.div`
    padding-top: 100px;
    width:100% ;
    height: 100vh;
`
const Wrapper = styled.div`
    text-align: center;
    font-size: 50px;
    font-weight: 400;
`

