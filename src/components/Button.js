import { useState, useEffect } from "react"
import styled from "styled-components"

export const Button = (props) => {
  return <Wrapper {...props} />
}

const Wrapper = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: var(--darkest);
  height: 40px;
  padding: 0px 24px;
  border: none;
  outline: none;
  border-radius: 4px;
  color: var(--white);
  font-family: var(--visbyFont);
  font-weight: 900;
  letter-spacing: -1px;
  font-size: 18px;
`
