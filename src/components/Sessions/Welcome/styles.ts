import styled from "styled-components";

export const Container = styled.section`
background: #F6F6F6;
flex-direction: column;
width: 100%;
height: calc(80vh + 70px);
display: flex;
scroll-snap-align: start;
align-items: center;
box-sizing: border-box;
position: relative;

.banner{
    z-index: 1;
    display: flex;
    width: 70%;
    height: calc(100% - 70px);
    justify-content: center;
    align-items: center;
    position: relative;
    top: 70px;
    
    .title{
       display: flex;
       width: 50%;
       height: 100%;
       justify-content: center;
       flex-direction: column;
       position: relative;
       span{
            font-weight: 800;
            font-size: 7rem;
            display: block;
            color: #159A9C;
            text-align: center;
         }
         .initial{
              font-size: 1.5rem;
              color: #002323;
              display: flex;
              align-items: center;
            }
        h1{
            text-align: center;
            margin: 10px 0 0 0;
            font-size: 3.5rem;
            color: #002323;        
        }
    h2{
        text-align: center;
        position: absolute;
        line-height: 0.5rem;
        color: #002323;
        width: 100%;
        white-space: nowrap;
        div{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 10px;
            .typical{
                font-size: 2.5rem;
                font-weight: 800;
                color: #8269AB;
            }
        .line{
           margin: 0px;
         }
        } 
    }
    }  


    .image{
        width: 50%;
        height: 100%;
        overflow: hidden;
        .img{
            width: 100%;
            height: 100%;
            object-fit: fill;
            object-position: left ;
            overflow: hidden;
        }
    }

}

.scrollDown{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: -60px;
        z-index: 100;
        color: #002323;
        font-weight: 600;
        font-size: 1.5rem;
    }

@media (max-width: 1024px) {
    .banner{
        width: 100%;
        .title{
            left: 30px;
            span{
                    font-size: 5rem;
                }
            h1{
                font-size: 3rem;
            }
        }
        .image{
            .img{
                object-fit: cover;
                object-position: left ;
            }
        }
    }
}

@media (max-width: 768px) {
    .banner{
        width: 100%;
        .title{
            width: 70%;
            span{
                    font-size: 4.5rem;
                }
            h1{
                font-size: 2rem;
            }
        }
    }
}

@media (max-width: 500px) {
    height: calc(100vh - 20px);
    .banner{
        overflow: hidden;
        width: 100vw;
        .title{
            left: 0px;
            bottom: 90px;
            width: 100%;
            z-index: 1;
            text-align: center;
            p{
                font-size: 1.4rem;
            }
            span{
                margin-bottom: 15px;
            }
            .initial{
              font-size: 1.2rem;
              position: relative;
              top: 8px;
            }
            h2{
                div{
                    .typical{
                        font-size: 2rem;
                    }
                }
            }
            
        }
        .image{
            width: 0%;
            z-index: 0;
            .img{
                position: absolute;
                left: 150px;
                object-fit: cover;
                object-position: left ;
                opacity: 0.4;
            }
        }
    }

    .scrollDown{
        bottom: 30px;
    }
}
`