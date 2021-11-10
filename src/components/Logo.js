import { useState, useEffect } from "react"
import styled from "styled-components"
import Link from "next/link"

export const Logo = (props) => {
  return <Wrapper src="/assets/rebassLogo0.svg" />
}

const Wrapper = styled.img`
  max-width: 94px;
`
