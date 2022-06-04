import { FC } from 'react';
import './styles.css';

const DonationsCounter: FC = () => {
  return (
    <div className='flex flex-col items-center donations-container'>
      <p className='donations-title'>Donations made so far:</p>
      <p></p>
    </div>
  );
}

export default DonationsCounter;