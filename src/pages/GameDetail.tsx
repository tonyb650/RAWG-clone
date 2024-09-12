import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetail = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <Box>
        <Heading>{game?.name}</Heading>
        <ExpandableText text={game?.description_raw} />
        <GameAttributes game={game} />
      </Box>
      <Box>
        <GameTrailer gameId={game!.id} />
        <GameScreenshots gameId={game!.id} />
      </Box>
    </SimpleGrid>
  );
};

export default GameDetail;
