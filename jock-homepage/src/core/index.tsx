import React, { FC, useState, useCallback } from 'react';
import Input from '../uikit/Input';
import Modal from '../uikit/Modal';
import { AnimationSettings } from './../uikit/Animation/interfaces';

export const App: FC = ({ children }) => {
  const modalAnimationSettings: AnimationSettings = { 
    name: 'bounceInLeft', 
    count: 1, 
    time: 1.5
  };
  const [value, setValue] = useState("");

  const handleChange = useCallback((event) => {
    const { value } = event.target;
    setValue(value);
  }, []);

  return (
    <div>
      <Modal isOpen animationSettings={modalAnimationSettings}>
        <Input value={value} onChange={handleChange} placeholder="Введите текст..." />
      </Modal>
      {children}
    </div>
  );
}
