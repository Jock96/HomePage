import React, { FC, useCallback, useState } from 'react';
import Modal from '../uikit/Modal';
import { BackgroundTypes } from '../uikit/Modal/shared/ModalOverlay/interfaces';
import { AnimationSettings } from './../uikit/Animation/interfaces';
import HelloWindow from './HelloWindow';

export const App: FC = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(true);

  const modalAnimationSettings: AnimationSettings = { 
    name: 'bounceInLeft', 
    count: 1, 
    time: 1.5
  };

  const handleModalSkip = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  return (
    <div>
      <Modal height={500} backgroundType={BackgroundTypes.IMAGE} isOpen={isOpenModal} animationSettings={modalAnimationSettings}>
        <HelloWindow onSkip={handleModalSkip} delayRender={modalAnimationSettings.time * 1000} />
      </Modal>
      {children}
    </div>
  );
}
