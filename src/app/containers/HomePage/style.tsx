import styled from "styled-components"
import tw from 'twin.macro'

export const PageContainer=styled.div`
${tw`
   flex
   flex-col
   w-full
   h-full
   items-center
   overflow-x-hidden
` }
`

export const TopSectionContainer =styled.div`

min-height: 400px;
margin-top: 6em;
${tw`
  w-full
  max-w-screen-2xl
  flex
  justify-between
  pl-3
  pr-3
  lg:pl-12
  lg:pr-12
`};

`