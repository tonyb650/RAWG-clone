import {
  Card,
  CardBody,
  Image,
  Heading,
  HStack,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import Rating from "./Rating";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";
import Game from "../entities/Game";

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
          <Rating score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
          
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
