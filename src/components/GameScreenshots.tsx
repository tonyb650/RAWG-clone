import useScreenshots from '../hooks/useScreenshots'
import { Box, Image, SimpleGrid } from '@chakra-ui/react'
import getCroppedImageUrl from '../services/image-url'

type Props = {
  gameId: number
}

const GameScreenshots = ({ gameId }: Props) => {
  const {data, isLoading, error} = useScreenshots(gameId)
  
  if (isLoading) return (<>Loading...</>)
    
  if (error) throw error
  
  return (
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={3} >
      {data?.results.map((screenshot) => (
          <Box key={screenshot.id}>
            <Image src={getCroppedImageUrl(screenshot.image)} />
          </Box>
      )
    )}
    </SimpleGrid>
  )
}

export default GameScreenshots