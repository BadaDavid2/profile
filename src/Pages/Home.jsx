import React from 'react'
import styled from 'styled-components'
import Back from '../bg.png'
import Img from '../img2.jpg'
import BottomH from './BottomH'
const Home = () => {
  return (
    <>
        <HomeBg bgImage={Back} id='home'>
            <Container >
                <Wrapper>
                    <Text>
                        I'm the Bada O. David
                        <br /> 
                        <small>
                            I'm a Frontend Web and Mobile Developer based in Lagos.
                        </small>
                        <Btn>
                            Connect Me
                        </Btn>
                    </Text>
                    <Image>
                        <img src={Img} alt="" />
                    </Image> 
                </Wrapper>
            </Container>
            <BottomH/>
        </HomeBg>
    </>
  )
}

export default Home
const HomeBg = styled.div`
    background-image: url(${(props)=>(props.bgImage)});
    background-color: #ffffff42;
    background-blend-mode: color-dodge;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh; 
`
const Container = styled.div`
    width: 100%;
    position: absolute;
    padding-top: 100px;

`
const Wrapper = styled.div`
    width: 87%;
    margin: auto;
    height: calc(75vh - 100px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
`
const Text = styled.div`
    width:70%;
    font-size: 60px;
    line-height: 50px;
    font-family: 'Times New Roman', Times, serif;
    small{
        font-size: 16px;
    }
`
const Image = styled.div`
    width: 30%;
    img{
        width:25rem;
        height: 40rem;
        /* margin: auto; */
        border-radius: 46%;
        opacity: 0.854;
        @media screen and (max-width:1200px){
            width: 100%;
            height: 100%;
        }
    }
`
const Btn = styled.div`
    font-size: 16px;
    background-color: #2f6aa2;
    text-transform: uppercase;
    color: white;
    width: 180px;
    display: flex;

    align-items: center;
    justify-content: center;
    border-radius: 50px;
`