import Head from "next/head"
import Image from "next/image"
import styled from "styled-components"
import * as React from "react"
import { HomePageSection } from "../components/HomePageSection"
import { PackPreview } from "../components/PackPreview"
import { PageWrapper } from "./../components/PageWrapper"
import { mockData } from "../mockData"

export default function Home(props) {
  return (
    <PageWrapper>
      <HomePageSection title="Fresh Packs" links={mockData.freshPacksLinks}>
        <ItemGrid>
          {mockData.newPacks.map((pack) => (
            <PackPreview key={pack._id} {...pack} />
          ))}
        </ItemGrid>
      </HomePageSection>

      <HomePageSection title="Popular Packs" links={mockData.popularPacksLinks}>
        <ItemGrid>
          {mockData.popularPacks.map((pack) => (
            <PackPreview key={pack._id} {...pack} />
          ))}
        </ItemGrid>
      </HomePageSection>
    </PageWrapper>
  )
}

const ItemGrid = styled.div`
  display: flex;
  grid-gap: 24px;
  flex-wrap: wrap;
`
