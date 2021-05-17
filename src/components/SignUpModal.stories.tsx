import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import { SignUpModal } from "./Modal";

export const ModalSignUp:Story = () => {

  const[showModal, setShowModal] = useState(true);
  
  const props = { 
    showModal,
    setShowModal 
  }

  return <SignUpModal {...props} />
}
ModalSignUp.storyName = 'default';

export default {
  title: 'Components/Modals/SignUp',
  component: ModalSignUp,
} as Meta;
