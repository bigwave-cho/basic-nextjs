import Seo from '@/components/Seo';
import { useRouter } from 'next/router';

export default function Detail({ params }) {
  const router = useRouter();
  /*
  ## push나 link에 쿼리를 담도 as로 마스킹한 경우.
  router 확인하면 as로 전달된 query 확인 가능

  단 as 로 마스킹해서 쿼리를 전달하는 경우엔
  홈페이지 -> 상세페이지가 아닌 경우에는 
  쿼리를 전달받지 못한다.
  ex) 바로 상세페이지로 접근
  
  */

  // [...id].js
  // [...id]로 파일명 바꿔주면 query.id가 배열로 들어옴.

  // const [title, id] = router.query.params || [];
  // 홈을 거치지 않고 해당 페이지 url로 바로 접속하면
  // router는 프론트에서만 실행되기 때문에
  // pre-render 단계에서 서버는 params에 대한 정보가 없다.
  // 이를 위해 ||[] 를 추가하면 됨.

  // const [title, id] = router.query.params; 에러뜸
  // const [title, id] = router.query.params || [];

  // 1. 바로접속 -> 2. 정보없음(검색엔진 소스코드엔 title, id 없음)
  // -> 3. CSR에서 해당 params 할당.
  // 대안은 getServerSideProps를 통해서도 가능

  const [title, id] = params;

  return (
    <div>
      <Seo title={title} />
      <h4>{title || 'Loading...'}</h4>
    </div>
  );
}

// 위처럼 router를 통해 data를 받아 페이지를 구성하게 되면
// useRouter는 클라이언트 단에서만 실행되기 때문에
// 페이지 소스에는 해당 data가 없는 채로 html이 구성된다.
// 따라서 SEO에서 장점을 잃음.
// getServerSideProps을 통해 해결하면 됨.
export function getServerSideProps({ params: { params } }) {
  return {
    props: { params },
  };
}
