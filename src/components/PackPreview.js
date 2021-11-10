import { useState, useEffect } from "react"
import styled from "styled-components"
import { useRouter } from "next/router"

export const PackPreview = (props) => {
  const router = useRouter()

  const goToPack = () => {
    router.push(`/artist/${props.artistName}/${props.titleId}`)
  }

  const goToArtist = () => {
    router.push(`/artist/${props.artistName}`)
  }

  const goToTag = (event) => {
    event.stopPropagation()
    const tag = event.target.innerText
    router.push(`/assets?tags=${tag}`)
  }

  return (
    <Wrapper>
      <ArtworkContainer artworkUrl={props.artworkUrl} onClick={goToPack}>
        <TagsContainer>
          {props.tags.map((tag) => (
            <Tag onClick={goToTag} key={tag}>
              {tag}
            </Tag>
          ))}
        </TagsContainer>
      </ArtworkContainer>
      <InfoContainer>
        <PackName onClick={goToPack}>{props.title}</PackName>
        <ArtistName onClick={goToArtist}>{props.artistName}</ArtistName>
      </InfoContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`

const ArtworkContainer = styled.div`
  cursor: pointer;
  width: 200px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  border: 2px solid var(--darkest);
  border-radius: 2px;

  background-size: cover;
  background-position: center;
  background-image: ${(props) => {
    return `url(${props.artworkUrl})`
  }};

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`

const TagsContainer = styled.div`
  display: none;
  /* display: flex; */
  flex-direction: column;
  align-items: flex-start;
  grid-gap: 8px;
  margin: 0px 0px 12px 12px;
`

const Tag = styled.span`
  background: var(--darkest);
  color: var(--white);
  border: 2px solid var(--green);
  height: 24px;
  padding: 0px 2px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`

const PackName = styled.p`
  font-size: 16px;
  font-family: var(--font0);
  font-weight: 900;
  letter-spacing: -1px;
  margin-bottom: 4px;
  line-height: 1;
  cursor: pointer;
`

const ArtistName = styled.p`
  font-size: 14px;
  font-family: var(--font0);
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1;
  cursor: pointer;
`
