/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        //step1. source 찾기
        source: '/contact',
        // step2. 감지해서 dest로 보내기
        destination: '/',
        //permanent : 브라우저나 검색엔진이 이 정보를 기억하는 지 여부를 결정.
        permanent: false,
      },
      {
        // * 붙여주면 뒤에 붙는 모든 것 catch 가능.
        source: '/old-blog/:path*',
        destination: '/new-blog/:path*',
        permanent: false,
      },
    ];
  },

  //redirects는 유저가 url이 바뀌는 현상을 알아채릴 수 있음.
  //rewrites는 다른 url로 redirect 시키긴 하지만 url의 변화가 없음.
  async rewrites() {
    return [
      {
        //http://localhost:3000/api/movies 여기 들어가보면 해당 api data 확인 가능.
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: '/api/movies/:id',
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
