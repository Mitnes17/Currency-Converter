import { Rates } from '../App';

export type Props = {
  value: number;
  currency: string;
  rates: Rates | null;
  onChangeValue: (e: number) => void;
  onChangeCurrency: (e: string) => void;
  fullList: Array<string>;
};

/////
