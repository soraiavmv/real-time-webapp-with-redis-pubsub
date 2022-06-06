import axios from 'axios';
import { FC, useCallback, useState } from 'react';
import Logo from '../logo';
import './styles.css';

const DonationsInput: FC = () => {
  const [donationValue, setDonationValue] = useState<string>('');

  const onDonationSave = useCallback(async () => {
    await axios.post('http://localhost:8000/donations', { amount: donationValue});
    setDonationValue('');
  }, [donationValue]);
  
  return (
    <div className='flex flex-col items-center outer-container'>
      <div className='flex flex-row items-center mb-16'>
        <Logo />
        <h1 className='title'>Fake Donations</h1>
        <Logo />
      </div>
      <div>
        <div className='flex flex-row items-center input-container'>
          <input
            type='number'
            value={donationValue}
            min='1'
            placeholder='insert amount'
            className='input'
            onChange={(event) => setDonationValue(event.currentTarget.value)}
          />
          <p className='euro'>€</p>
        </div>
      </div>
      <button className='button' onClick={onDonationSave}>Fake Donate</button>
    </div>
  );
}

export default DonationsInput;