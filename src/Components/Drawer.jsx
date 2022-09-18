import React from 'react'
import styled from 'styled-components'
import {AiFillCloseCircle} from 'react-icons/ai'
const Drawer = ({toggle, open, Links}) => {
  return (
    <>
      <Container open={open}>
      <div onClick={toggle} className='close'><AiFillCloseCircle/></div>
        <Wrapper>
            {
                Links.map((el)=>(
                    <Nav to={el.route} key={el.name}>{el.name}</Nav>
                ))
            }
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
  background-color: rgba(255, 255, 255, 0.903);
  transition: ease-in-out 0.3s;
  z-index: 90;
  top: 0;
  left: 0;
  .close{
    margin: 30px 0px;
    font-size: 30px;
    color: red;
    margin-left: 85%;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`
const Nav = styled.div`
  font-size: 30px;
  text-transform: capitalize;
  margin: 30px 0px;
  position: relative;
  font-weight: 300;
  ::after{
      content: " ";
      position: absolute;
      width: 40px;
      bottom: -5px;
      background-color: #2f6aa2;
      height: 3px;
      margin: auto;
      left: 4px;
      border-radius: 10px;
      }
      :hover{
        ::after{
        width: 55px;
        }
      }
`
