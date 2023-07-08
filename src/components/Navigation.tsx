import { NavLink } from '@/components/NavLink'
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'
import { VscClose } from 'react-icons/vsc'

const links = [
  {
    description: 'Home',
    href: '/',
  },
  {
    description: 'About',
    href: '/about',
  },
  {
    description: 'Challenges',
    href: '/challenges',
  },
]

const renderNavLinks = (navLinks: typeof links) =>
  navLinks.map((link) => (
    <NavLink key={link.description} href={link.href}>
      {link.description}
    </NavLink>
  ))

export const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box
        bg={useColorModeValue('gray.100', 'gray.900')}
        position='fixed'
        px={4}
        w='100%'
      >
        <Box maxW='1440px' margin='auto'>
          <Flex h={12} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={
                isOpen ? (
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <VscClose />
                  </div>
                ) : (
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <RxHamburgerMenu />
                  </div>
                )
              }
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
              aria-label={'Navigation menu'}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Box fontWeight='bold'>Learn JS</Box>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}
              >
                {renderNavLinks(links)}
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
              </Button>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {renderNavLinks(links)}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </Box>
      <Box h={12} pos='relative' pointerEvents='none' />
    </>
  )
}
