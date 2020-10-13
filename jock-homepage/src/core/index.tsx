import React, { FC } from 'react';
import Modal from '../uikit/Modal';

export const App: FC = ({ children }) => {
  return (
    <div>
      <Modal isOpen animationSettings={{ name: 'bounceInLeft', count: 1, time: 1.5}}>
      </Modal>
      {children}
    </div>
  );
}
