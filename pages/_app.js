import Layout from '@/components/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  // Component는 url 패스에 따라서 렌더링될 컴포넌트를 받음.
  // Layout의 children은 Layout 컴포 사이의 컴포넌트.
  // pageProps는 서버사이드에서 넘겨주는 prop들을 컴포넌트에 넘기는 역할을 함.
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
