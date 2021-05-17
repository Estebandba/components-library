import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import { SignInModal } from "./Modal";

export const ModalSignIn:Story = () => {

  const[showModal, setShowModal] = useState(true);
  
  const props = { 
    showModal,
    setShowModal 
  }

  return <SignInModal {...props} />
}
ModalSignIn.storyName = 'default';

export default {
  title: 'Components/Modals/SignIn',
  component: ModalSignIn,
} as Meta;
