import { Head } from '@/components/Head/Head'
import { Table } from '@/components/Table/Table';

import { fetcher } from '@/utils/fetcher';
import { SWRConfig } from 'swr';

export const API_URL = 'https://api.coingecko.com/api/v3/exchanges'


export default function Home({ fallback }: { fallback: { [key: string]: any } }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Head />
      <Table />
    </SWRConfig>
  )
}

export const getServerSideProps = async () => {
  const exchanges = await fetcher(API_URL)

  return {
    props: {
      fallback: {
        [API_URL]: exchanges
      }
    }
  };
}