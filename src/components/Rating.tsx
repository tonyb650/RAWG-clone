import { Badge } from '@chakra-ui/react'

type Props = {
  score: number | undefined,
}
const Rating = ({score} : Props) => {
  if (!score) return null
  
  let color = score > 90 ? 'green' : score > 80 ? 'yellow' : ''

  
  return (
    <Badge fontSize={'14'} colorScheme={color} borderRadius='4px' paddingX='2'>{score}</Badge>
  )
}

export default Rating