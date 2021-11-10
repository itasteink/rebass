import * as React from "react"
import styled from "styled-components"

export const FileUploader = (props) => {
  const onChange = (event) => {
    const files = Array.from(event.target.files)
    const fileCount = files.length
    props.onFiles(fileCount ? files : [])
  }

  return (
    <Wrapper>
      <FileInput type="file" onChange={onChange} data-testid="FileInput" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const FileInput = styled.input`
  height: 100px;
  border: 1px solid var(--darkest);
  border-radius: 2px;
  padding: 24px;
`
