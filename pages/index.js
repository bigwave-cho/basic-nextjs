import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Seo from '../components/Seo';

export default function Home({ results }) {
  const movies = results;
  const router = useRouter();
  // const onClick = (id, title) => {
  //   // Link와 똑같이 작동.
  //   router.push(
  //     {
  //       pathname: `/movies/${id}`,
  //       // query도 담아 보내기 가능.
  //       query: {
  //         title,
  //       },
  //     },
  //     // 위 정보를 masking 하기 가능
  //     // useRouter로 확인 가능!
  //     `/movies/${id}`
  //   );
  // };
  useEffect(() => {
    (async function get() {
      const res = await (await fetch(`/api/movies`)).json();
      console.log(res.results);
    })();
  }, []);

  const onClick = (id, title) => {
    //[...params] 이용할 땐 아래와 같이 url에 정보 보내기.
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <div>
      <div className="container">
        <Seo title="Home" />
        {movies?.map((movie) => (
          <div
            onClick={() => {
              onClick(movie.id, movie.original_title);
            }}
            key={movie.id}
            className="movie"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="movie_photo"
            />
            <Link
              // // Link도 router.push와 같이 아래처럼 설정 가능.
              // href={{
              //   pathname: `/movies/${movie.id}`,
              //   // query도 담아 보내기 가능.
              //   query: {
              //     title: movie.original_title,
              //   },
              // }}
              // as={`/movies/${movie.id}`}
              href={`/movies/${movie.original_title}/${movie.id}`}
            >
              <h4>{movie.original_title}</h4>
            </Link>
          </div>
        ))}
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
          }
          .movie {
            cursor: pointer;
          }
          .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          }
          .movie:hover img {
            transform: scale(1.05) translateY(-10px);
          }
          .movie h4 {
            font-size: 18px;
            text-align: center;
          }
        `}</style>
      </div>
    </div>
  );
}

// 여기 코드는 서버에서만 실행되는 것이기 때문에
// 외부로 노출되지도 않고. 그럼 api key를 위해서 rewrite 등을 할 필요도 없겠군.
export async function getServerSideProps() {
  const { results } = await // 절대경로만 지원하기 때문에 URI 다 넣어야 함.
  (await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: { results },
  };
}
