import { ReactElement, useEffect, useState} from 'react';
import { Modal as NBModal, Text} from 'native-base';
import PropTypes from 'prop-types';

import {ModalProps} from './ModalTypes';

export default function Modal({title, isOpen, children, modalActions: ModalActions, onClose} : ModalProps) : ReactElement<ModalProps>{
  const [open, setOpen] = useState(false);

  useEffect(()=> {
    setOpen(isOpen);
  }, [isOpen]);
  
  const handleClose = () => {
    setOpen(false);
    onClose();
  }

    return <NBModal isOpen={open} onClose={handleClose}>
      <NBModal.Content>
      <NBModal.Header>
        <Text>
          {title}
        </Text>
        <NBModal.CloseButton />
      </NBModal.Header>
      <NBModal.Body>
        {children}
      </NBModal.Body>
      <NBModal.Footer>
        <ModalActions />
      </NBModal.Footer>
      </NBModal.Content>
    </NBModal>
};

Modal.defaultProps = {
  isOpen: false,
};