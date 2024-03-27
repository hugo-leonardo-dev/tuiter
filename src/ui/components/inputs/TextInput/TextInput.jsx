import React from 'react'
import styles from './TextInput.module.css'

const TextInput = (props) => {
  return (
    <textarea className={styles['input']} {...props}/>
  )
}

export default TextInput