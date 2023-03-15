import Head from 'next/head';
// SEO를 컴포넌트화 하여 관리
export default function Seo({ title }) {
  return (
    <Head>
      <title>{`${title} | Next Movies`}</title>
    </Head>
  );
}
