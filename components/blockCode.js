import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'

// limitation of only being able to render python code
// https://thetombomb.com/posts/adding-code-snippets-to-static-markdown-in-Next%20js
const BlockCode = ({ children }) => {
  return (
    <SyntaxHighlighter
      language='python'
      style={tomorrow}
      wrapLines
      showLineNumbers
    >
      {children}
    </SyntaxHighlighter>
  )
}

export default BlockCode
