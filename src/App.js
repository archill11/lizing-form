import React from 'react';
import { Input2 } from './components/input2/Input2';
import { Input13 } from './components/input13/Input13';
import { fetchData } from './services/fetchData';
import './App.scss';


function App() {

  const carСoastMin = 1e6
  const carСoastMax = 6e6
  const initailPaymentPercentMin = 10
  const initailPaymentPercentMax = 60
  const leasingTermMin = 1
  const leasingTermMax = 60
  const [fetching, setFetching] = React.useState(false)
  const [carСoast, setCarСoast] = React.useState(3_300_000)
  const [initailPaymentPercent, setinitailPaymentPercent] = React.useState(10)
  const [leasingTerm, setLeasingTerm] = React.useState(10)
  const initailPayment = Math.round((initailPaymentPercent/100 * carСoast))
  const monthlyPayment = Math.round((carСoast - initailPaymentPercent) * ((0.035 * Math.pow((1 + 0.035), leasingTerm)) / (Math.pow((1 + 0.035), leasingTerm) - 1)))
  const totalSum = Math.round(initailPayment + (leasingTerm * monthlyPayment))


  const checkout = async (e) => {
    e.preventDefault()
    try {
      setFetching(true)

      const data = {
        car_coast: carСoast,
        initail_payment: initailPayment,
        initail_payment_percent: initailPaymentPercent,
        lease_term: leasingTerm,
        monthly_payment_from: monthlyPayment,
        total_sum: totalSum,
      }

      await fetchData(data)

    } catch (err) {
      console.log(err);
    }
    setFetching(false)
  }


  return (
    <div className="App">
      <h1 className='main-title'>Рассчитайте стоимость автомобиля в лизинг</h1>

      <form className='lizing-form' onSubmit={e => checkout(e)}>
        <div className="form-body">

          <Input13 title={'Стоимость автомобиля'} rightSpan={'₽'}
            initialValue={carСoast}
            setValue={setCarСoast}
            min={carСoastMin} max={carСoastMax}
            fetching={fetching}
          />
      
          <Input2 title={'Первоначальный взнос'}
            initialValue={initailPaymentPercent}
            initailPayment={initailPayment}
            carСoast={carСoast}
            setValue={setinitailPaymentPercent}
            min={initailPaymentPercentMin} max={initailPaymentPercentMax}
            fetching={fetching}
          />
        
          <Input13 title={'Срок лизинга'} rightSpan={'мес.'}
            initialValue={leasingTerm}
            setValue={setLeasingTerm}
            min={leasingTermMin} max={leasingTermMax}
            fetching={fetching}
          />
        
        </div>

        <div className="form-bottom">
          <div className="finaData">
            <div className="totalSum">
              <span className='finaDatat__subtitle'>Сумма договора лизинга</span>
              <span className='finaDatat__total'>{totalSum.toLocaleString() + ' ₽'}</span>
            </div>
            <div className="monthlyPayment">
              <span className='finaDatat__subtitle'>Ежемесячный платеж от</span>
              <span className='finaDatat__total'>{monthlyPayment.toLocaleString() + ' ₽'}</span>
            </div>
          </div>

          <button disabled={fetching} className='checkout' type='submit'>{fetching ? 'preloader...' : 'Оставить заявку'}</button>
        </div>

      </form>

    </div>
  );
}

export default App;
