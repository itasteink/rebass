import * as React from "react"
import { createContextHook } from "@kensie/create-context-hook"
import store from "store"

const context = createContextHook(() => {
  const [data, setData] = React.useState()

  return {
    data,
  }
})

export const [UserProvider, useUserStore] = context
