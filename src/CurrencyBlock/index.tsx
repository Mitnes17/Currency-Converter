import { FC } from 'react';
import { Props } from './CurrencyBlock';
import * as S from './styled';

const defaultCurrencies = ['MDL', 'USD', 'EUR', 'GBP', 'RON'];

export const CurrencyBlock: FC<Props> = ({
  value,
  currency,
  rates,
  onChangeValue,
  onChangeCurrency,
}) => {
  console.log(value);
  console.log(rates);
  return (
    <div>
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
        onChange={(e) => onChangeValue(+e.target.value)}
        value={rates ? value : 0}
        type='number'
        placeholder={'0'}
      />
    </div>
  );
};
