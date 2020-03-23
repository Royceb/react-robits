import React from 'react'
import { useState } from '@storybook/client-api'
import { text, boolean, select } from '@storybook/addon-knobs'
import Modal, { Modal as ModalComponent } from '../lib/components/modal/Modal'
import ModalBody from '../lib/components/modal/ModalBody'
import Button from '../lib/components/button/Button'

export default {
  title: 'Robits/Modal',
  component: ModalComponent
}

export const Normal = ({ theme }) => {
  const componentKnobs = {
    closeOnBackdropClick: boolean('Close on Backdrop Click', true),
    withCloseButton: boolean('With Close Button', false),
    header: text('Header', 'Modal Header'),
    footer: text('Footer', 'Modal Footer'),
    size: select('Size', ['sm', 'md', 'lg'], 'md'),
    centered: boolean('Centered', false)
  }

  if (componentKnobs.size === 'md') {
    delete componentKnobs.size
  }

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Button theme={theme} onClick={() => setModalOpen(true)}>
        Open Modal
      </Button>
      <Modal
        {...componentKnobs}
        theme={theme}
        open={modalOpen}
        toggleModal={() => setModalOpen(!modalOpen)}>
        <ModalBody theme={theme}>Hello World</ModalBody>
      </Modal>
    </>
  )
}