import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import DefinitionItem from "../components/DefinitionItem";
import Rating from "../components/Rating";
import GameAttributes from "../components/GameAttributes";

const GameDetail = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <>
      <Heading>{game?.name}</Heading>

      <ExpandableText text={game?.description_raw} />

      <GameAttributes game={game} />
    </>
  );
};

export default GameDetail;
