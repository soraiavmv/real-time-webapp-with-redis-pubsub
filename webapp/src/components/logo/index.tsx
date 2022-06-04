import { FC } from 'react';
import './styles.css';

const Logo: FC = () => {
  return (
    <img
      src={require('../../assets/images/donate.png')}
      className='max-w-full h-auto rounded-full logo'
    />
  );
}

export default Logo;