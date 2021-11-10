import { useState, useEffect } from "react"
import styled from "styled-components"

export const PageWrapper = (props) => {
  return <Wrapper {...props} />
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`
