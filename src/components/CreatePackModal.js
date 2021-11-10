import { useState, useEffect } from "react"
import styled from "styled-components"
import { userNewPackStore } from "../stores/newPackStore"
import { FileUploader } from "./FileUploader"
import { Modal } from "./Modal"
import { Spacer } from "./Spacer"
import { Button } from "./Button"
import { useUpload } from "../hooks/useUpload"
import { TextField } from "./inputs/TextField"

const setStateEvent = (setState) => (event) => {
  setState(event.target.value)
}

export const CreatePackModal = (props) => {
  const { upload, progress, isLoading, isDone, response } = useUpload()
  const [description, setDescription] = useState("")
  const [artworkUrl, setArtworkUrl] = useState("")
  const [assets, setAssets] = useState([])
  const [title, setTitle] = useState("")
  const [tags, setTags] = useState([])

  const reset = () => {
    setAssets("")
    setTitle("")
    setDescription("")
    setArtworkUrl("")
    setTags([])
  }

  const onClose = () => {
    reset()
    props.onClose()
  }

  return (
    <Modal onClose={onClose}>
      <Wrapper>
        <h1>Create a new pack</h1>

        <Spacer size="24px" />
        <TextField id="title" label="Title" value={title} onChange={setStateEvent(setTitle)} />

        <Spacer size="12px" />
        <TextField
          id="description"
          label="Description"
          value={description}
          onChange={setStateEvent(setDescription)}
        />

        <Spacer size="12px" />
        <TextField id="tags" label="Tags" value={title} onChange={setStateEvent(setTags)} />

        <Spacer size="24px" />
        <FileUploader onFiles={setAssets} />

        <Spacer size="48px" />
        <Button onClick={reset}>Reset</Button>
      </Wrapper>
    </Modal>
  )
}

const Wrapper = styled.div``
