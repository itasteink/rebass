import { useState, useEffect } from "react"
import Portal from "@reach/portal"
import styled from "styled-components"

export const Modal = (props) => {
  const onWrapperClick = (event) => {
    if (event.target.id === "Modal") props.onClose()
  }

  return (
    <Portal>
      <Wrapper id="Modal" onClick={onWrapperClick}>
        <Container>{props.children}</Container>
      </Wrapper>
    </Portal>
  )
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background: var(--darkestAlpha9);
  width: 100vw;
  height: 100vh;
  padding: 100px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--white);
  min-width: 50vw;
  max-width: 600px;
  min-height: 300px;
  padding: 48px;
  margin: 0 auto;
`
