import { FC } from 'react';
import Logo from '../logo';
import './styles.css';

const DonationsInput: FC = () => {
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
            min='1'
            placeholder='insert amount'
            className='input'
          />
          <p className='euro'>€</p>
        </div>
      </div>
      <button className='button'>Fake Donate</button>
    </div>
  );
}

export default DonationsInput;