import { useState, useEffect } from "react"
import styled from "styled-components"

import { Chatbubble } from "@styled-icons/ionicons-sharp/Chatbubble"
import { Notifications } from "@styled-icons/material/Notifications"

import { NavLink } from "./NavLink"
import { Link } from "./Link"
import { Logo } from "./Logo"
import { Button } from "./Button"
import { Avatar } from "./Avatar"

export const TopBar = (props) => {
  return (
    <Wrapper>
      <Container>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/assets">Assets</NavLink>
          <NavLink href="/tutorials">Tutorials</NavLink>
          <NavLink href="/blog">Blog</NavLink>
        </NavLinksContainer>
        <UserContainer>
          <Chatbubble width={24} height={24} />
          <Notifications width={26} height={26} />
          <Avatar url="https://randomuser.me/api/portraits/women/95.jpg" />
        </UserContainer>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 64px;
  padding: 0px 24px;
  background: ${(props) => props.theme.colors.white};
`

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
`

const LogoContainer = styled.div`
  display: flex;
`

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 24px;
  margin-left: 80px;
`

const UserContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  grid-gap: 24px;
`
