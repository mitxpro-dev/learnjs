import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { Box, Center } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => (
  <>
    <Navigation />
    <Center w='full'>
      <Box p={0} maxW='1440px' overflow='hidden' w='full'>
        <Outlet />
      </Box>
    </Center>
    <Footer />
  </>
)

export default RootLayout
