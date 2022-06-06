import { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import './styles.css';
import donationsStore from '../../store/donationsStore';

const DonationsCounter: FC = observer(() => {
  const [amount, setAmount] = useState<number>(donationsStore.donationsTotalAmount);
  
  useEffect(() => {
    setAmount(donationsStore.donationsTotalAmount);
  }, [donationsStore.donationsTotalAmount]);

  return (
    <div className='flex flex-col items-center donations-container'>
      <p className='donations-title'>Donations made so far:</p>
      <p
        className={'amount animate'}>{amount}€</p>
    </div>
  );
});

export default DonationsCounter;