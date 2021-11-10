import { useState, useEffect } from "react"
import styled from "styled-components"
import Link from "next/link"

export const Spacer = (props) => {
  const width = props.width || props.size || "12px"
  const height = props.height || props.size || "12px"
  const display = props.inline ? "inline-flex" : "block"

  return <span style={{ width, height, display }}></span>
}
