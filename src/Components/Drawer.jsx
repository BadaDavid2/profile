import React from 'react'
import styled from 'styled-components'
const Drawer = ({toggle, open, Links}) => {
  return (
    <>
      <Container open={open}>
        <Wrapper>
            {
                Links.map((el)=>(
                    <Nav to={el.route} key={el.name}>{el.name}</Nav>
                ))
            }
            <div onClick={toggle}>close</div>
        </Wrapper>
      </Container>
    </>
  )
}

export default Drawer

const Container = styled.div`
    transform: translateY(${(props)=>(props.open ? "0%":"-100%")});
    position: absolute;
    height:100vh;
    width: 100%;
    background-color: red;
    transition: ease-in-out 0.3s;
    z-index: 90;
    top: 0;
    left: 0;
`
const Wrapper = styled.div``
const Nav = styled.div``
