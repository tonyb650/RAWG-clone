import { Grid, GridItem, Show, HStack, Box } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import PlatformPicker from "../components/PlatformPicker";
import SortPicker from "../components/SortPicker";
import GameGrid from "../components/GameGrid";

function HomePage() {

  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`, // > 1024 px
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside" px={5}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading />
            <HStack spacing={5} marginBottom={3}>
              <PlatformPicker />
              <SortPicker />
            </HStack>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default HomePage;
