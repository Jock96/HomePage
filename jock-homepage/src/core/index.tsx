import React, { FC } from 'react';
import Modal from '../uikit/Modal';
import { AnimationSettings } from './../uikit/Animation/interfaces';
import HelloWindow from './HelloWindow';

export const App: FC = ({ children }) => {
  const modalAnimationSettings: AnimationSettings = { 
    name: 'bounceInLeft', 
    count: 1, 
    time: 1.5
  };

  return (
    <div>
      <Modal isOpen animationSettings={modalAnimationSettings}>
        <HelloWindow />
      </Modal>
      {children}
    </div>
  );
}
