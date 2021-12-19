import styled from 'styled-components'

const ShoutOut = styled.h3`
  bottom: 0;
  font-size: 1em;
  padding: 12px;
  position: fixed;
  text-align: center;
  width: 100%;
`

const BSGrad = styled.span`
  background: linear-gradient(135deg, #CB5EEE 0%, #4BE1EC 100%);
  background-image: linear-gradient(135deg, rgb(203, 94, 238) 0%, rgb(75, 225, 236) 100%);
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-color: initial;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`
const BSLogo = styled.span`
  color: rgb(157, 142, 238);
`

export default () => <ShoutOut>built with <BSGrad><BSLogo>buildspace</BSLogo></BSGrad> 🦄</ShoutOut>
