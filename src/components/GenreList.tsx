import useGenres from "../hooks/useGenres.ts";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <>
      <ul>{genres?.map((genre) => <li>{genre.name}</li>)}</ul>
    </>
  );
};

export default GenreList;
