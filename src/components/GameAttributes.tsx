import { SimpleGrid, Text } from "@chakra-ui/react"
import Game from "../entities/Game"
import DefinitionItem from "./DefinitionItem"
import Rating from "./Rating"

type Props = {
  game: Game | undefined,
}

const GameAttributes = ({game}: Props) => {
  if (!game) return null

  return (
    <SimpleGrid columns={2} as='dl'>
    <DefinitionItem term='Platforms'>
      {game?.parent_platforms?.map(({platform}) => 
        <Text key={platform.id}>{platform.name}</Text>
      )}
    </DefinitionItem>
    <DefinitionItem term='Metascore'>
      <Rating score={game?.metacritic}/>
    </DefinitionItem>
    <DefinitionItem term='Genres'>
      {game?.genres?.map((genre) => 
        <Text key={genre.id}>{genre.name}</Text>
      )}
    </DefinitionItem>
    <DefinitionItem term='Genres'>
      {game?.publishers?.map((publisher) => 
        <Text key={publisher.id}>{publisher.name}</Text>
      )}
    </DefinitionItem>
  </SimpleGrid>
  )
}

export default GameAttributes