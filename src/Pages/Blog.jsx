import React from 'react'
import styled from 'styled-components'
const Blog = () => {
  return (
    <>
        <Container>
            <Wrapper>
                Blog
            </Wrapper>
        </Container>
    </>
  )
}

export default Blog
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

