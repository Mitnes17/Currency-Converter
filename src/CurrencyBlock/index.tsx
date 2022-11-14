import { FC } from 'react';
import { Props } from './CurrencyBlock';
import * as S from './styled';

const defaultCurrencies = ['MDL', 'USD', 'EUR', 'GBP', 'RON'];

export const CurrencyBlock: FC<Props> = ({ value, currency, onChangeValue, onChangeCurrency }) => (
  <S.Container>
    <S.List>
      {defaultCurrencies.map((cur) => (
        <S.Currency
          onClick={() => onChangeCurrency(cur)}
          className={currency === cur ? 'isActive' : ''}
          key={cur}
        >
          {cur}
        </S.Currency>
      ))}
    </S.List>
    <S.Input
      onChange={(e) => onChangeValue(e.target.value)}
      value={value}
      type='number'
      placeholder={'0'}
    />
  </S.Container>
);
