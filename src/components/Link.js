import { useState, useEffect } from "react"
import styled from "styled-components"
import NextLink from "next/link"

export const Link = (props) => {
  const { href, ...otherProps } = props

  return (
    <NextLink href={props.href} passHref>
      <Anchor {...otherProps} />
    </NextLink>
  )
}

const Anchor = styled.a`
  cursor: pointer;
  color: ${(props) => props.theme.colors.mediumGreen};
`
