import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Image
        className="img"
        // public폴더접근은 '/'로 시작
        src="/vercel.svg"
        width={100}
        height={100}
        alt="Logo"
      />
      <div>
        <Link href="/">
          <span className={router.pathname === '/' ? 'active' : ''}>Home</span>
        </Link>
        <Link
          className={router.pathname === '/about' ? 'active' : ''}
          href="/about"
        >
          <span className={router.pathname === '/about' ? 'active' : ''}>
            About
          </span>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
