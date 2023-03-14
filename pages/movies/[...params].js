import Seo from '@/components/Seo';
import { useRouter } from 'next/router';

export default function Detail({ params }) {
  const router = useRouter();
  //[...id]로 파일명 바꿔주면 query.id가 배열로 들어옴.

  // const [title, id] = router.query.params || [];
  // 홈을 거치지 않고 해당 페이지 url로 바로 접속하면
  // router는 프론트에서만 실행되기 때문에
  // pre-render 단계에서 서버는 params에 대한 정보가 없다.
  // 이를 위해 ||[] 를 추가하면 됨.

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

export function getServerSideProps({ params: { params } }) {
  console.log(params);
  return {
    props: { params },
  };
}
