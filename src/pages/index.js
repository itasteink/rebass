import Head from "next/head"
import Image from "next/image"
import styled from "styled-components"
import * as React from "react"
import { HomePageSection } from "../components/HomePageSection"
import { PackPreview } from "../components/PackPreview"
import { PageWrapper } from "./../components/PageWrapper"
import { mockData } from "../mockData"
import { FileUploader } from "../components/FileUploader"

export default function Home(props) {
  const [files, setFiles] = React.useState([])

  return (
    <Wrapper>
      <FileUploader onFilesUploaded={setFiles} />

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
    </Wrapper>
  )
}

const Wrapper = styled(PageWrapper)`
  margin-top: 24px;
`

const ItemGrid = styled.div`
  display: flex;
  grid-gap: 24px;
  flex-wrap: wrap;
`
