import { API_URL } from '@/pages';
import useSWR from 'swr'

export const Table = () => {
  const { data, error, isLoading } = useSWR(API_URL);
  console.log({ error, isLoading });
  return (
    <main>
      table here {JSON.stringify(data)}
    </main>
  )
}
