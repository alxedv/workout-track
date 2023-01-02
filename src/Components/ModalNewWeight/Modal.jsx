import { useAtom } from 'jotai';
import React, { useState } from 'react';
import {
  Button, Input, Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';
import { datesAtom, weightsAtom } from '../ProgressChart/Store';
import { inputDateAtom, inputWeightAtom } from './Store';
import './modal.css';
import deleteIcon from '../../assets/icons/delete.png';
import { createDatePtbr } from '../../utils/formatDate';

export default function ModalNewWeight() {
  const [modal, setModal] = useState(false);
  const [inputWeight, setInputWeight] = useAtom(inputWeightAtom);
  const [inputDate, setInputDate] = useAtom(inputDateAtom);
  const [weights, setWeights] = useAtom(weightsAtom);
  const [dates, setDates] = useAtom(datesAtom);

  const toggle = () => setModal(!modal);

  const addNewWeight = () => {
    setWeights([...weights, inputWeight]);

    const formatedDate = createDatePtbr(inputDate, '00:00');
    setDates([...dates, formatedDate]);
    toggle();
  };

  const deleteWeight = () => {
    const newWeights = weights.slice(0, -1);
    setWeights(newWeights);

    const newDates = dates.slice(0, -1);
    setDates(newDates);
  };

  return (
    <div className="w-100">
      <div className="new-weight-modal mt-2">
        <Button color="primary" outline onClick={toggle}>+ Adicionar novo peso</Button>
        <Button outline size="md" onClick={deleteWeight}>
          <img src={deleteIcon} className="icon" alt="" />
        </Button>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Novo peso</ModalHeader>
        <ModalBody className="w-50">
          <div className="m-1 mb-4">
            <span>Peso em Kg:</span>
            <Input type="number" onChange={({ target }) => setInputWeight(target.value)} />
          </div>
          <div className="m-1">
            <span>Data:</span>
            <Input type="date" onChange={({ target }) => setInputDate(target.value)} />
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
