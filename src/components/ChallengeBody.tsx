import MarkdownComponents from '@/components/MarkdownComponents'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
const testMarkdownContent = `
# This is a header

And this is a paragraph

## This is a subheader

And this is another paragraph

### This is a subsubheader

And this is yet another paragraph

#### This is a subsubsubheader

And this is yet another paragraph

##### This is a subsubsubsubheader

And this is yet another paragraph

**This is bold text**

*This is italic text*

~~This is strikethrough text~~

> This is a blockquote

\`\`\`js
console.log("This is a code block")

function thisIsAFunction() {
  console.log("This is a function with long text")
}
\`\`\`

\` console.log("This is inline code") \`

- This is a list item

1. This is a numbered list item

[This is a link](https://www.google.com)

![This is an image](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)

| This | is   |
| :-: | :-: |
| a    | table|

This is a horizontal rule

---

`
interface IChallengeBodyProps {
  markdown?: string
}

const ChallengeBody = ({
  markdown = testMarkdownContent,
}: IChallengeBodyProps) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={MarkdownComponents}>
      {markdown}
    </ReactMarkdown>
  )
}

export default ChallengeBody
