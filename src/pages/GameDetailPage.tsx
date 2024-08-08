import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import EpandableText from "../components/EpandableText";
import { GameAttributes } from "../components/GameAttributes";
import { GameScreenshots } from "../components/GameScreenshots";
import { GameTrailer } from "../components/GameTrailer";
import useGame from "../hooks/useGame";

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <EpandableText>{game.description_raw}</EpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshots gameId={game.id} />
    </>
  );
};
