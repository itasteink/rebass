import { useState, useEffect } from "react"
import styled from "styled-components"
import { useRouter } from "next/router"

export default function PackPage(props) {
  const router = useRouter()

  return (
    <Wrapper>
      <h1>{router.query.packUid} page!</h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
`
