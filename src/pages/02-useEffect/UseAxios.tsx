import { useAxios } from '@/hooks/useAxios';

interface AccountDetailResponse {
  accountId: number;
  email: string;
  nickname: string;
  bio: string;
}

const UseAxios = () => {
  const { loading, data, error, refetch } = useAxios<AccountDetailResponse>({
    url: '',
  });

  console.log(
    `Loading: ${loading}\nError:${error}\nData:${JSON.stringify(data)}`
  );

  return (
    <div>
      <h1>{data && data.nickname}</h1>
      <h2>{loading && 'Loading...'}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default UseAxios;
