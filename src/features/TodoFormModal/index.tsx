import React, { useState } from 'react';
import styled from '@emotion/styled/macro';

import Modal from '../../components/Modal';

const Container = styled.div`
  width: 100vw;
  max-width: 386px;
  padding: 8px;
`;

const Date = styled.small`
  display: block;
  color: #c9c8cc;
`;

const InputTodo = styled.input`
  padding: 16px 24px;
  border: none;
  width: 100%;
  box-sizing: border-box;
  background-color: transparent;
  color: #c9c8cc;
  caret-color: #c9c8cc;
`;

const Card = styled.div`
  width: 100%;
  max-width: 370px;
  border-radius: 16px;
  box-shadow: 0 1px 3px 0
    rgba(0, 0, 0, 0.1);
  padding: 24px;
  box-sizing: border-box;
  background-color: #19181a;
  ${Date} + ${InputTodo} {
    margin-top: 24px;
  } ;
`;

const TodoFormModal: React.FC = () => {
  const [isOpen, setIsOpen] =
    useState<boolean>(false);

  const handleClose = () =>
    setIsOpen(false);

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
    >
      <Container>
        <Card>
          <Date>'2021-08-30'</Date>
          <InputTodo placeholder="새로운 이벤트" />
        </Card>
      </Container>
    </Modal>
  );
};

export default TodoFormModal;
