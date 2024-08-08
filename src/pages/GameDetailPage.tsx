import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { CriticScore } from "../components/CriticScore";
import { DefinitionItem } from "../components/DefinitionItem";
import EpandableText from "../components/EpandableText";
import { GameAttributes } from "../components/GameAttributes";
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
    </>
  );
};
