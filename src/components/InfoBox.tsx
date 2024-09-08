import { Box, Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
  heading: string,
  children: ReactNode
}
const InfoBox = ({heading, children}: Props) => {
  return (
    <Box>
      <Heading>{heading}</Heading>
      {children}
    </Box>
  )
}

export default InfoBox