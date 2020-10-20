import React, { FC } from 'react';
import Modal from '../uikit/Modal';
import { BackgroundTypes } from '../uikit/Modal/shared/ModalOverlay/interfaces';
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
      <Modal backgroundType={BackgroundTypes.IMAGE} isOpen animationSettings={modalAnimationSettings}>
        <HelloWindow delayRender={modalAnimationSettings.time * 1000} />
      </Modal>
      {children}
    </div>
  );
}
