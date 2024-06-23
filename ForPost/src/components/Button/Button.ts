
import styled from 'styled-components'



export const CustomBtn = styled.button <{$color:string, $width:string,$height:string,$colorText:string,$margin:string}>`
   width: ${({$width}) => $width } ;
   height:${({$height}) => $height };
   background-color: ${({$color}) => $color };
   border-radius: 10px;
   margin-top:${({$margin}) => $margin };
   margin-left: 10px;
   margin-right: 10px;
   cursor: pointer;
   -webkit-box-shadow: 0px 6px 10px 1px rgba(0,0,0,0.37); 
   box-shadow: 0px 6px 10px 1px rgba(0,0,0,0.37);

       font-family: "jost-regular", sans-serif;
       font-size: 20px;
       color: ${({$colorText}) => $colorText };
       transition: 0.3s ease;
   
   &:hover{
       color:#D48166;
    
       transition: 0.3s ease;
       background-color: #494D48;
       border-radius: 18px;
   }
   @media (max-width: 1200px) {
       width: ${({ $width }) => `calc(${$width} * 0.9)`};
       height: ${({ $height }) => `calc(${$height} * 0.9)`};
       font-size: 16px;
   }

   @media (max-width: 992px) {
       width: ${({ $width }) => `calc(${$width} * 0.8)`};
       height: ${({ $height }) => `calc(${$height} * 0.8)`};
       font-size: 14px;
   }

   @media (max-width: 768px) {
       width: ${({ $width }) => `calc(${$width} * 0.7)`};
       height: ${({ $height }) => `calc(${$height} * 0.7)`};
       font-size: 12px;
       margin-top: 5px;
   }

   @media (max-width: 576px) {
       width: ${({ $width }) => `calc(${$width} * 0.6)`};
       height: ${({ $height }) => `calc(${$height} * 0.6)`};
       font-size: 10px;
       margin-top: 2px;
   }

 
`
