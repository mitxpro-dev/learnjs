import { Box, Heading, Text } from '@chakra-ui/react'
const imgUrl =
  'url(https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&w=1440=&q=80)'

export default function Home() {
  const outerBoxStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '90vh',
    p: '25',
    background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), ${imgUrl} center/cover no-repeat`,
  }

  const innerBoxStyles = {
    justify: 'center',
    textAlign: 'center',
    color: 'white',
  }

  return (
    <Box sx={outerBoxStyles}>
      <Box sx={innerBoxStyles}>
        <Heading>JS Learning Site</Heading>
        <Text>
          Learn practical coding skills by solving real-world problems.
        </Text>
      </Box>
    </Box>
  )
}
