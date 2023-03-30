import Link from "next/link";
import Image from "next/image";

export default function Movie({
  title,
  id,
  poster_path,
  release_date,
  tagline,
}) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <div className="mh-2">
        <div
  
         style={{ minHeight: 90 }}
         >
          <h1 className="text-xs sm:text-xl">{title}</h1>
          <h2 className="text-xs sm:text-xl">{release_date}</h2>
        </div>
      </div>
      <Link href={`${id}`}>
        <Image
          className="max-w-[60%] sm:max-w-full -mt-10 sm:mt-0"
          src={imagePath + poster_path}
          width={800}
          height={800}
          alt={tagline}
        />
      </Link>
    </div>
  );
}
