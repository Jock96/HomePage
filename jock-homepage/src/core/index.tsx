import React, { FC, useState } from 'react';
import Input from '../uikit/Input';
import Modal from '../uikit/Modal';
import { AnimationSettings } from './../uikit/Animation/interfaces';

export const App: FC = ({ children }) => {
  const modalAnimationSettings: AnimationSettings = { 
    name: 'bounceInLeft', 
    count: 1, 
    time: 1.5
  };
  return (
    <div>
      <Modal isOpen animationSettings={modalAnimationSettings}>
        <Input />
      </Modal>
      {children}
    </div>
  );
}
