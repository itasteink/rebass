import { useState, useEffect } from "react"
import styled from "styled-components"
import { useRouter } from "next/router"
import { Link } from "./Link"

export const NavLink = (props) => {
  const router = useRouter()
  const isActive = isLinkActive(router.route, props.href)

  return (
    <Wrapper href={props.href} isActive={isActive}>
      {props.children}
    </Wrapper>
  )
}

const isLinkActive = (route, href) => {
  return href === "/" ? route === "/" : route.startsWith(href)
}

const Wrapper = styled(Link)`
  font-family: var(--visbyFont);
  font-weight: 900;
  letter-spacing: -1px;
  font-size: 18px;

  color: ${(props) => {
    return props.isActive
      ? props.theme.colors.darkest
      : props.theme.colors.mediumGray
  }};
`
