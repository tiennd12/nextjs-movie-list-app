import Image from "next/image";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }));
}

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 10 } }
  );
  const res = await data.json();
  return (
    <div className="text-center">
      <div>
        <h2 className="text-xs sm:text-2xl mt-5">{res.title}</h2>
        <h2 className="text-xs sm:text-lg">{res.release_date}</h2>
        <h2 className="text-xs sm:text-lg">Runtime: {res.runtime}</h2>
        <h2 className="bg-green-600 inline-block my-2 py-1 sm:py-2  px-4 rounded-md text-xs sm:text-sm">
          {res.status}
        </h2>
        <Image
          className="my-5 sm:my-12 w-full"
          src={imagePath + res.backdrop_path}
          width={1000}
          height={1000}
          alt={res.tagline}
          priority
        />
        <p className="mb-5 text-xs sm:text-base">{res.overview}</p>
      </div>
    </div>
  );
}
