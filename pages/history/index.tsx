import Table from '../../components/Table';
import Head from 'next/head'
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

function History() {
  const { data, error } = useSWR('/api/tokens', fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  const tokenInfo = data
  return (
    <>
      <Head>
        <title>Invalidated History</title>
      </Head>
      <div className='h-screen w-screen fixed bg-gradient-to-br from-blue-101 to-fuchsia-101 overflow-auto'>
        <div className='rounded-3xl m-5 w-5/6 mx-auto backdrop-blur-10px bg-white/30 backdrop-opacity-xl rounded-3xl'><h1 className="text-white text-center justify-self-center font-semibold text-3xl mb-8 px-3 py-3">
          Token History 
        </h1>
          
        </div>
        <Table tokenData={tokenInfo} />
      </div>

    </>
  );
}
export default History