import React from 'react'
import styled from 'styled-components'
import Img from '../img.jpg'
const About = () => {
  return (
    <>
        <Container id='about'>
            <Wrapper>
                <h2>About</h2>
                <Contain>
                    <Image><img src={Img} alt="" /></Image>
                    <Text>
                        <p>My names are <em>Bada Oluwatimilehin David</em> and I'm a <strong>Front End Web Developer</strong> based in Lagos, Nigeria. <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quos! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla aliquam ex eum dolor veritatis non blanditiis aperiam unde sed iusto minus quasi, labore dicta in eveniet velit sit sapiente eligendi ipsam repellat eos tempora mollitia at laudantium! Ad doloribus omnis provident esse harum sequi illo consectetur voluptate, nostrum, impedit dolores?</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, officia.</p>
                        <div>
                            <span>
                                <dir><b>Birthday :</b><p>4th May</p></dir>
                                <dir><b>Phone :</b><p>+234 806 1646 761</p></dir>
                                <dir><b>City :</b><p>Lagos</p></dir>
                                <dir><b>City :</b><p>Lagos</p></dir>
                            </span>
                            <span>
                                <dir><b>Email :</b><p>badadavid04@gmail.com</p></dir>
                                <dir><b>Niche :</b><p>React Js and NextJs</p></dir>
                                <dir><b>Freelance :</b><p>Available</p></dir>
                                <dir><b>Freelance :</b><p>Available</p></dir>
                            </span>
                        </div>
                    </Text>
                </Contain>
            </Wrapper>
        </Container>
    </>
  )
}

export default About

const Container = styled.div`
    padding-top: 100px;
    width:100% ;
    height: 100vh;
`
const Wrapper = styled.div`
    width: 87% ;
    margin: auto;
    
    h2{
        width: 50px;
        position: relative;
        font-size: 50px;
        font-weight: 300;
        text-transform: uppercase;
        margin: auto;
        ::after{
            content: " ";
            position: absolute;
            width: 50px;
            bottom: 0;
            background-color: #2f6aa2;
            height: 3px;
            left: -1px;
            border-radius: 10px;
            -webkit-animation: mover 2s infinite  alternate;
            animation: mover 2s infinite  alternate;
        }
        @-webkit-keyframes mover {
            0% { transform: translateX(0); }
            100% { transform: translateX(40px); }
        }
        @keyframes mover {
            0% { transform: translateX(0); }
            100% { transform: translateX(40px); }
        }
    }

`
const Contain = styled.div`
    display: flex;
    margin-top: 30px;
    align-items: center;
    flex-wrap: wrap;
`
const Image = styled.div`
    flex: 45%;
    img{
        width: 60%;
    }
    
`
const Text = styled.div`
    /* flex: 55%; */
    @media screen and(max-width:900px){
        flex: 1 !important;
        /* justify-content: center; */
        /* display: flex;
        flex-direction: column; */
    }
    div{
        display:flex;
        width: 600px;
        justify-content: space-between;
        flex-wrap: wrap !important;
        @media screen and(max-width:900px){
            width:100%;
        }
        span{
            dir{
                display: flex;
                margin: 20px 0px;
                align-items: center;
                b{
                    font-size: 20px;
                    font-weight: 300;
                }
                p{
                    font-size: 18px;
                    color: grey;
                    margin-left: 3px;
                    font-weight: 400;
                }
            } 
        }
    }
`
