import { useCallback, useEffect, useState, useMemo } from 'react';
import { CurrencyBlock } from './CurrencyBlock/index';

import './App.css';

export type Rates = Record<string, any>;

function App() {
  const [rates, setRates] = useState<Rates | null>(null);
  const [fromCurrency, setFromCurrency] = useState('MDL');
  const [toCurrency, setToCurrency] = useState('USD');
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const currencies = useMemo(() => Object.keys(rates || []), [rates]); //the best string

  const onChangeToValue = useCallback(
    (value: number, arcRates?: Rates) => {
      const r = arcRates || rates;
      setToValue(value);
      const price = value / (+r?.[toCurrency] || 1);
      const result = price * (+r?.[fromCurrency] || 1);
      setFromValue(+result.toFixed(4) || 1);
    },
    [fromCurrency, rates, toCurrency]
  );

  const onChangeFromValue = useCallback(
    (value: number, arcRates?: Rates) => {
      const r = arcRates || rates;
      setFromValue(value);
      const price = value / (+r?.[fromCurrency] || 1);
      const result = price * (+r?.[toCurrency] || 1);
      setToValue(+result.toFixed(4) || 1);
    },
    [fromCurrency, rates, toCurrency]
  );

  const onChangeFromCurrency = (value: string) => {
    setFromCurrency(value);
  };

  const onChangeToCurrency = (value: string) => {
    setToCurrency(value);
  };

  useEffect(() => {
    fetch('https://api.currencyfreaks.com/latest?apikey=a6cb1272ac8c4cb2a6cb0e28e7d00981')
      .then((response) => response.json())
      .then((json) => {
        setRates(json.rates);
        onChangeToValue(1, json.rates);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    onChangeFromValue(fromValue);
  }, [fromValue, onChangeFromValue]);

  return (
    <div className='App'>
      <CurrencyBlock
        rates={rates}
        fullList={currencies}
        value={fromValue}
        currency={fromCurrency}
        onChangeValue={onChangeFromValue}
        onChangeCurrency={onChangeFromCurrency}
      />
      <CurrencyBlock
        rates={rates}
        fullList={currencies}
        value={toValue}
        currency={toCurrency}
        onChangeValue={onChangeToValue}
        onChangeCurrency={onChangeToCurrency}
      />
    </div>
  );
}

export default App;
