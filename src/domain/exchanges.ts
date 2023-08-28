import { Name } from "@/components/ExchangesTable/Name";
import { ColumnDef } from "@tanstack/react-table";

export type Exchange = {
  id: string;
  name: string;
  year_established: number;
  country: string;
  description: string;
  url: string;
  image: string;
  has_trading_incentive: boolean;
  trust_score: number;
  trust_score_rank: number;
  trade_volume_24h_btc: number;
  trade_volume_24h_btc_normalized: number;
}

export const exchangesSchema: ColumnDef<Exchange>[] = [
  {
    id: 'name',
    header: 'Name',
    cell: Name
  },
  {
    id: 'year_established',
    header: 'Year established',
    accessorKey: 'year_established',
  },
  {
    id: 'country',
    header: 'Country',
    accessorKey: 'country',
  },
  {
    id: 'trust_score',
    header: 'Trust score',
    accessorKey: 'trust_score',
  },
  {
    id: 'trade_volume_24h_btc',
    header: '24h trade volume in BTC',
    accessorKey: 'trade_volume_24h_btc',
    accessorFn: ({ trade_volume_24h_btc: tradeVolume24hBtc }) => `₿ ${tradeVolume24hBtc.toFixed(4)}`
  },
  {
    id: 'trade_volume_24h_btc_normalized',
    header: 'Normalized 24h trade volume in BTC',
    accessorKey: 'trade_volume_24h_btc_normalized',
    accessorFn: ({ trade_volume_24h_btc_normalized: tradeVolume24hBtcNorm }) => `₿ ${tradeVolume24hBtcNorm.toFixed(4)}`
  }
]