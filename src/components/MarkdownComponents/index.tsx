import { NavLink } from '@/components/NavLink'
import {
  Heading,
  Image,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import { Components } from 'react-markdown'
import Blockquote from './Blockquote'
import Code from './Code'
import Hr from './Hr'
import Table from './Table'

export default {
  code: Code,
  h1: ({ children }) => <Heading size='4xl'>{children}</Heading>,
  h2: ({ children }) => <Heading size='3xl'>{children}</Heading>,
  h3: ({ children }) => <Heading size='2xl'>{children}</Heading>,
  h4: ({ children }) => <Heading size='xl'>{children}</Heading>,
  h5: ({ children }) => <Heading size='lg'>{children}</Heading>,
  table: Table,
  a: ({ children, href }) => <NavLink href={href || ''}>{children}</NavLink>,
  hr: Hr,
  p: ({ children }) => <Text>{children}</Text>,
  strong: ({ children }) => <Text as='b'>{children}</Text>,
  i: ({ children }) => <Text as='i'>{children}</Text>,
  s: ({ children }) => <Text as='s'>{children}</Text>,
  blockquote: Blockquote,
  li: ({ children }) => <ListItem>{children}</ListItem>,
  ul: ({ children }) => <UnorderedList>{children}</UnorderedList>,
  ol: ({ children }) => <OrderedList>{children}</OrderedList>,
  img: ({ src, alt }) => <Image src={src} alt={alt} />,
} as Components
