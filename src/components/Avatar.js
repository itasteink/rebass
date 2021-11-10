import { useState, useEffect } from "react"
import styled from "styled-components"
import Link from "next/link"

export const Avatar = (props) => {
  const { url, ...otherProps } = props
  return <Wrapper {...otherProps} src={url} />
}

Avatar.defaultProps = {
  size: "medium",
}

const SIZES = {
  small: "24px",
  medium: "32px",
  large: "40px",
}

const Wrapper = styled.img`
  display: inline-flex;
  border-radius: 4px;
  border: 2px solid var(--darkest);
  /* filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.5)); */
  max-width: 40px;

  width: ${(props) => {
    return SIZES[props.size]
  }};
`
