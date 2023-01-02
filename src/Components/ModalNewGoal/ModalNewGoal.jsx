import { useAtom } from 'jotai';
import React, { useState } from 'react';
import {
  Button, Input, Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';
import { newWeightGoalAtom, weightGoalAtom } from './Store';

export default function ModalNewGoal() {
  const [modal, setModal] = useState(false);
  const [, setWeightGoal] = useAtom(weightGoalAtom);
  const [newWeightGoal, setNewWeightGoal] = useAtom(newWeightGoalAtom);

  const toggle = () => setModal(!modal);

  const addNewWeight = () => {
    setWeightGoal(newWeightGoal);
    toggle();
  };

  return (
    <div>
      <Button color="primary" outline className="mt-4" onClick={toggle}>+ Adicionar nova meta</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Nova meta</ModalHeader>
        <ModalBody className="w-50">
          <div className="m-1 mb-4">
            <span>Peso em Kg:</span>
            <Input type="number" onChange={({ target }) => setNewWeightGoal(target.value)} />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggle}>Cancelar</Button>
          <Button color="primary" onClick={addNewWeight}>Adicionar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
