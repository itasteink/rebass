import { useState, useEffect } from "react"
import styled from "styled-components"

export const PageWrapper = (props) => {
  return <Wrapper {...props} />
}

const Wrapper = styled.div`
  margin-top: 24px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
`
