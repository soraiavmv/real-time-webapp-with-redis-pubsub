import { FC, useState } from 'react';
import './styles.css';

const DonationsCounter: FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [animate, setAnimate] = useState(false);

  return (
    <div className='flex flex-col items-center donations-container'>
      <p className='donations-title'>Donations made so far:</p>
      <p
        className={`amount animate ${animate && 'grow'}`}
      >{amount}€</p>
    </div>
  );
}

export default DonationsCounter;