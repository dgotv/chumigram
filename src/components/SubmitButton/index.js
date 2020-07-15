import React from 'react'
import { Button } from './styles'

export const SubmitButton = ({ children, disableb, onClick }) => {
  return <Button disableb={disableb} onClick={onClick}>{children}</Button>
}
