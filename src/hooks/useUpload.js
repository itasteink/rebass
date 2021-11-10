import * as React from "react"

export const useUpload = (setUp) => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [isDone, setIsDone] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const [response, setResponse] = React.useState({})

  const upload = createUploader({
    setResponse,
    setIsLoading,
    setIsDone,
    setProgress,
    setUp,
  })

  return {
    upload,
    progress,
    response,
    isLoading,
    isDone,
  }
}

export const createUploader = (props) => {
  const upload = async (files) => {
    props.setIsLoading(true)

    const formData = new FormData()
    files.forEach((file) => formData.append(file.name, file))

    const options = {
      method: "PUT",
      url: "http://localhost:3000/api/uploadAssets",
      body: formData,
    }

    const xhr = new XMLHttpRequest()
    xhr.open(options.method, options.url)

    xhr.upload.addEventListener("progress", (event) => {
      props.setProgress(Math.round((event.loaded / event.total) * 100))
    })

    xhr.addEventListener("load", () => {
      let data

      try {
        data = JSON.parse(xhr.response)
      } catch (e) {
        data = xhr.response
      }

      const responseHeaders = xhr
        .getAllResponseHeaders()
        .trim()
        .split(/[\r\n]+/)
        .map((line) => line.split(": "))
        .reduce((final, [header, value]) => {
          final[header] = value
          return final
        }, {})

      props.setResponse({ xhr, data, responseHeaders })
      props.setIsLoading(false)
      props.setIsDone(true)
    })

    xhr.addEventListener("error", (error) => {
      props.setResponse({ xhr, error })
      props.setIsLoading(false)
      props.setIsDone(true)
    })

    xhr.addEventListener("abort", (error) => {
      props.setResponse({ xhr, error })
      props.setIsLoading(false)
      props.setIsDone(true)
    })

    xhr.send(options.body)
  }

  return upload
}
