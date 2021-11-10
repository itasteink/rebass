import { useState, useEffect } from "react"
import styled from "styled-components"
import Link from "next/link"

export const TextField = (props) => {
  return (
    <Wrapper className="TextField">
      <Label htmlFor={props.id}>{props.label}</Label>
      <Input id={props.id} value={props.value} onChange={props.onChange} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 700;
  letter-spacing: 0px;
  font-size: 1.8rem;
`

const Input = styled.input`
  background: var(--white);
  border: 1px solid var(--darkest);
  padding: 4px 8px;
  height: 40px;
`
