import * as React from "react"
import { createContextHook } from "@kensie/create-context-hook"
import { useUpload } from "../hooks/useUpload"

const context = createContextHook(() => {
  const [assets, setAssets] = React.useState([])
  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [artworkUrl, setArtworkUrl] = React.useState("")
  const [tags, setTags] = React.useState([])
  const { upload, progress, isLoading, isDone, response } = useUpload()

  const reset = () => {
    setAssets("")
    setTitle("")
    setDescription("")
    setArtworkUrl("")
    setTags([])
  }

  return {
    assets,
    setAssets,
    title,
    setTitle,
    description,
    setDescription,
    artworkUrl,
    setArtworkUrl,
    tags,
    setTags,
    reset,

    upload,
    progress,
    isLoading,
    isDone,
    response,
  }
})

export const [NewPackProvider, userNewPackStore] = context
