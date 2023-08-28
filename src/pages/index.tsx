import { SWRConfig } from 'swr';
import Image from 'next/image'

import { Head } from '@/components/Head/Head'
import { Table } from '@/components/Table/Table';
import { Exchange, exchangesSchema } from '@/domain/exchanges';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/utils/constants';

import { fetcher } from '@/utils/fetcher';
import { URLBuilder } from '@/utils/URLBuilder';
import { Header, Title, Wrapper } from '@/components/Main';
import { useCallback } from 'react';
import { Row } from '@tanstack/react-table';


export const API_URL = 'https://api.coingecko.com/api/v3/exchanges'

export default function Home({ fallback }: { fallback: { data: Exchange[] } }) {

  const onRowClick = useCallback((row: Row<Exchange>) => {
    window.open(row.original.url, '_blank', 'noopener, noreferrer')
  }, []);

  return (
    <SWRConfig value={{ fallback }}>
      <Head />
      <Header>
        <Image src="/rated.svg" alt="Rated logo" width="125" height="49" />
      </Header>
      <Wrapper>
        <Title>
          Top Crypto Exchanges
        </Title>
        <Table schema={exchangesSchema} apiUrl={API_URL} onRowClick={onRowClick} />
      </Wrapper>
    </SWRConfig>
  )
}

export const getServerSideProps = async () => {
  const url = new URLBuilder(API_URL).setParams({ page: DEFAULT_PAGE + 1, per_page: DEFAULT_PAGE_SIZE }).toString();
  const exchanges = await fetcher(url)

  return {
    props: {
      fallback: {
        [API_URL]: exchanges
      }
    }
  };
}