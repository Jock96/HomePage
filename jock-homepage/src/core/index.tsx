import React, { FC } from 'react';
import Modal from '../uikit/Modal';

export const App: FC = ({ children }) => {
  return (
    <div>
      <Modal isOpen isAnimated>
        Test
      </Modal>
      {children}
    </div>
  );
}
