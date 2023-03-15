import NavBar from './NavBar';

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
/*
children은 react.js가 제공하는 prop으로 
하나의 컴포넌트를 다른 컴포넌트에 전달할 수 있다.
*/
