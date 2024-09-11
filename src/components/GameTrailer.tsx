import useTrailers from "../hooks/useTrailers"

type Props = {
  gameId: number
}
const GameTrailer = ({ gameId }: Props) => {
  // const {data, error, isLoading} = useGenres()
  const { data, error, isLoading } = useTrailers(gameId)
  console.log(data)

  if (isLoading) return null

  if (error) throw error

  const first = data?.results[0]
  if (!first) return null

  return first ? (
    <video poster={first.preview} controls src={first.data[480]} />
  ) : null
};

export default GameTrailer;
