import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  // Component는 url 패스에 따라서 렌더링될 컴포넌트를 받음.
  // Layout의 children은 Layout 컴포 사이의 컴포넌트.
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
