import {
  Code as ChakraCode,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react'
import { get } from 'lodash'
import { BiCaretRight } from 'react-icons/bi'
import { CodeProps } from 'react-markdown/lib/ast-to-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import WindowSizeButton, { WindowSizeButtonType } from './WindowButton'

const Code = ({ inline, className, children, ...props }: CodeProps) => {
  const match = /language-(\w+)/.exec(className || '')
  const lang = get(match, '1', 'js')
  return (
    <VStack
      bg={'blackAlpha.800'}
      align='start'
      rounded='lg'
      spacing={0}
      overflow='hidden'
    >
      <HStack
        w='full'
        p={4}
        bg='whiteAlpha.50'
        borderBottomStyle='solid'
        borderBottomWidth={1}
        borderBottomColor='whiteAlpha.100'
        justify='space-between'
      >
        <HStack role='group'>
          <WindowSizeButton type={WindowSizeButtonType.CLOSE} />
          <WindowSizeButton type={WindowSizeButtonType.MINIMIZE} />
          <WindowSizeButton type={WindowSizeButtonType.MAXIMIZE} />
        </HStack>
        <HStack justify='end' spacing={1}>
          <Icon as={BiCaretRight} color='whiteAlpha.400' />
          <Text fontFamily='mono' fontSize='xs' color='yellow.400'>
            {lang}
          </Text>
        </HStack>
      </HStack>
      <ChakraCode
        rounded='none'
        bg='none !important'
        as={SyntaxHighlighter}
        style={vscDarkPlus}
        language={lang}
        children={String(children).replace(/\n$/, '')}
        showLineNumbers={!inline}
        {...props}
      />
    </VStack>
  )
}

export default Code
