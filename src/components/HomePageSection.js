import { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "./Link"

export const HomePageSection = (props) => {
  return (
    <Wrapper>
      <TitleRow>
        <Title>{props.title}</Title>

        {props.links && (
          <SectionLinks>
            {props.links.map((link) => (
              <SectionLink key={link.text} href={link.url}>
                {link.text}
              </SectionLink>
            ))}
          </SectionLinks>
        )}
      </TitleRow>
      {props.children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  width: 100%;
  margin-bottom: 24px;
`

const Title = styled.p`
  font-size: 32px;
  font-weight: 900;
  letter-spacing: -2px;
  font-family: var(--font0);
`

const SectionLinks = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 40px;
  margin-left: 80px;
`

const SectionLink = styled(Link)`
  font-size: 18px;
  letter-spacing: 1px;
  text-transform: lowercase;
  color: var(--mediumGray);
  font-weight: 700;
`
