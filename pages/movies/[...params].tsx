import { useRouter } from "next/router"
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Seo from "../../components/Seo";

type MovieDetail = [string, string]

function Detail({ params } : InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();
  const [title, id] = params as MovieDetail
  return(
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({params:{params}}: any) {
  return {
    props: {
      params,
    },
  };
}

export default Detail;