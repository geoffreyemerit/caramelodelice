import React from 'react';
import DealersSection from '../components/dealers/DealersSection';

const Dealers = () => {
  return (
    <div>
      <DealersSection id={6} idSupplier={1} />
      <DealersSection id={7} idSupplier={2} />
      <DealersSection id={8} idSupplier={3} />
      <DealersSection id={9} idSupplier={4} />
      <DealersSection id={10} idSupplier={5} />
    </div>
  );
};

export default Dealers;
