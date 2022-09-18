import React from 'react'
import styled from 'styled-components'
import {MdOutlineEmail} from 'react-icons/md'
import {FaBars} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
const Navbar = ({Links, toggle}) => {
  return (
    <>
      <Container>
        <Wrapper>
            <span>
                <Logo to='/'>Dave</Logo>
                <Navs>
                    {
                        Links.map((el)=>(
                            <Nav to={el.route} key={el.name}>{el.name}</Nav>
                        ))
                    }
                </Navs>
            </span>
            <Maill>
                <MdOutlineEmail className='mail-icon'/>
                <Mail>hello@myfolio.com</Mail>
            </Maill>
            <Ham onClick={toggle}>
                <FaBars/>
            </Ham>
        </Wrapper>
      </Container>
    </>
  )
}

export default Navbar

const Container = styled.div`
    width: 100%;
    height: 100px;
    position: absolute;
    z-index: 80;
`
const Wrapper = styled.div`
    @media screen and (min-width: 900px){
        width: 87%;
    }
    margin: auto;
    height: 100%;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
        display: flex;
        align-items: center;
        width: 700px;
        justify-content: space-between;
    }
`
const Logo = styled(NavLink)`
    font-size: 25px;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    color: rgb(42, 42, 42);
    @media screen and (max-width: 900px){
        margin-left: 50px;
    }
`
const Navs = styled.div`
    display: flex;
    width: 400px;
    justify-content: space-between;
    @media screen and (max-width: 900px){
        display: none;
    }
`
const Nav = styled(NavLink)`
    color: rgb(42,42,42);
    text-transform: capitalize;
    font-weight: 400;
    text-decoration: none;
    padding: 5px;
    border-radius: 6px;
    transition: 0.3s all;
    :hover{
        box-shadow: 0px 0px 50px #2f6aa2;
        color: white;
        background-color: #b4d1ec;
    }
`
const Maill = styled.div`
    display: flex;
    align-items: center;
    width: 100px I !important;
    justify-content: space-between;
    @media screen and (max-width: 900px){
        display: none;
    }
    .mail-icon{
        margin-right: 5px;
        padding: 5px;
        border: 1px solid rgb(42,42,42);
        height: 30px;
        width: 30px;
        border-radius: 50%;
    }
`
const Mail = styled.div`
    border-bottom: 2px solid rgb(42,42,42);
`
const Ham = styled.div`
    color: rgb(42,42,42);
    font-size: 30px;
    margin-right: 50px;
    @media screen and (min-width: 900px){
        display: none;
    }
`
