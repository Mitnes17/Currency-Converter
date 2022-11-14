import { useCallback, useEffect, useRef, useState } from 'react';
import { CurrencyBlock } from './CurrencyBlock/index';

import './App.css';

function App() {
  type RefType = {
    [key: string]: any;
  };

  const ratesRef = useRef<RefType>({});

  const currencies = Object.keys(ratesRef.current);

  useEffect(() => {
    fetch('https://api.currencyfreaks.com/latest?apikey=a6cb1272ac8c4cb2a6cb0e28e7d00981')
      .then((response) => response.json())
      .then((json) => {
        ratesRef.current = json.rates;
        onChangeToValue('1');
      })
      .catch((error) => console.log(error));
  }, []);

  const [fromValue, setFromValue] = useState('0');

  const [toValue, setToValue] = useState('0');
  const onChangeToValue = (value: any) => {
    setToValue(value);
    const price: number = +value / ratesRef.current[toCurrency];
    const result = price * ratesRef.current[fromCurrency];
    setFromValue(result.toString());
  };

  const [fromCurrency, setFromCurrency] = useState('MDL');
  const onChangeFromCurrency = (value: string) => {
    setFromCurrency(value);
  };

  const [toCurrency, setToCurrency] = useState('USD');
  const onChangeToCurrency = (value: string) => {
    setToCurrency(value);
  };

  const onChangeFromValue = useCallback(
    (value: any) => {
      setFromValue(value);
      const price: number = +value / ratesRef.current[fromCurrency];
      const result = price * ratesRef.current[toCurrency];
      setToValue(result.toString());
    },
    [fromCurrency, ratesRef, toCurrency]
  );

  useEffect(() => {
    onChangeFromValue(fromValue);
  }, [fromValue, onChangeFromValue]);

  return (
    <div className='App'>
      <CurrencyBlock
        fullList={currencies}
        value={fromValue}
        currency={fromCurrency}
        onChangeValue={onChangeFromValue}
        onChangeCurrency={onChangeFromCurrency}
      />
      <CurrencyBlock
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
