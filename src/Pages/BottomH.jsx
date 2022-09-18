import React from 'react'
import styled from 'styled-components'
import {AiFillHtml5} from 'react-icons/ai'
import {ImCss3} from 'react-icons/im'
import {FaReact} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
const BottomH = () => {
  return (
    <>
      <Conatiner>
        <Wrapper>
            <span>
            Trusted by high grwoth startups and investors
            </span>
            <div className='red'><AiFillHtml5/> HTML</div>
            <div className='green'><ImCss3/>CSS</div>
            <div ><FaReact/>ReactJs</div>
            <div className='yellow'><SiJavascript/>JavaScript</div>
        </Wrapper>
      </Conatiner>
    </>
  )
}

export default BottomH

const Conatiner = styled.div`
    height: 15vh;
    width: 100%;
    position: absolute;
    bottom: 0;
`
const Wrapper = styled.div`
    height: 100%;
    width: 87%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: grey;
    span{
        flex: 0.5;
        margin-right: 100px;
        text-transform: uppercase;
        font-size: 14px;
    }
    div{
        flex: 1;
        color: grey;
        font-weight: 400;
        font-size: 35px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: 300;
    }
`

