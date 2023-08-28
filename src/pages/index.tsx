import { SWRConfig } from 'swr';
import { GetServerSideProps } from 'next';
import Image from 'next/image'
import { useCallback } from 'react';
import { Row } from '@tanstack/react-table';

import { Head } from '@/components/Head/Head'
import { Table } from '@/components/Table/Table';
import { Exchange, exchangesSchema } from '@/domain/exchanges';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/utils/constants';

import { fetcher } from '@/utils/fetcher';
import { URLBuilder } from '@/utils/URLBuilder';
import { Header, Title, Wrapper } from '@/components/Main';


export const API_URL = 'https://api.coingecko.com/api/v3/exchange'

export default function Home({ fallback }: { fallback: { data: Exchange[] } }) {

  const onRowClick = useCallback((row: Row<Exchange>) => {
    window.open(row.original.url, '_blank', 'noopener, noreferrer')
  }, []);

  return (
    <SWRConfig value={{ fallback }}>
      <Head />
      <Header>
        <Image src="/rated.svg" alt="Rated logo" width="125" height="49" priority={true} />
      </Header>
      <Wrapper>
        <Title>
          Top Crypto Exchanges 🎉
        </Title>
        <Table schema={exchangesSchema} apiUrl={API_URL} onRowClick={onRowClick} />
      </Wrapper>
    </SWRConfig>
  )
}

export const getServerSideProps: GetServerSideProps<{ fallback: { [x: string]: Exchange } }> = async ({ query }) => {
  const url = new URLBuilder(API_URL)
    .setParams(
      {
        page: String(query.page) || DEFAULT_PAGE + 1,
        per_page: DEFAULT_PAGE_SIZE
      })
    .toString();
  const exchanges = await fetcher(url)

  return {
    props: {
      fallback: {
        [url]: exchanges
      }
    }
  };
}