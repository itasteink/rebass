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
  font-size: 18px;

  font-weight: ${(props) => {
    return props.isActive ? "900" : "700"
  }};

  letter-spacing: ${(props) => {
    return props.isActive ? "-1px" : "0px"
  }};

  color: ${(props) => {
    return props.isActive ? props.theme.colors.darkest : props.theme.colors.mediumGray
  }};
`
