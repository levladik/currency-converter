import React from 'react'

const defaultCurrencies = ['RUB', 'USD', 'EUR', 'GBP'];

function Block() {
  return (
    <div className='block'>
      <ul className='currencies'>
        {defaultCurrencies.map((cur, idx) => (
          <li 
            key={idx}>
            {cur}
          </li>
        ))}
        <li>
          <svg height="50px" viewBox="0 0 50 50" width="50px">
            <rect fill="none" height="50" width="50" />
            <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
          </svg>
        </li>
      </ul>
      <input 
        type='number'
        placeholder={0}
      />
    </div>
  );
}

export default Block;
