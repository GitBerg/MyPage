import styled from "styled-components";

export const Container = styled.h2`
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

        @media (max-width: 425px){
          div{
            .typical{
              font-size: 1rem;
            }
          }
        }
`