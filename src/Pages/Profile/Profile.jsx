import { useAtom } from 'jotai';
import React from 'react';
import {
  Alert, Button, Card, Input,
} from 'reactstrap';
import userIcon from '../../assets/icons/user.png';
import { inputUserNameAtom, nameWasSetAtom, userProfileAtom } from './Store';

export default function Profile() {
  const [inputUserName, setInputUserName] = useAtom(inputUserNameAtom);
  const [, setUserProfile] = useAtom(userProfileAtom);
  const [nameWasSet, setNameWasSet] = useAtom(nameWasSetAtom);

  const changeUserName = () => {
    setUserProfile(inputUserName);
    setNameWasSet(true);
  };

  return (
    <div className="pt-5 px-3">
      <img src={userIcon} width="50px" alt="" />
      <Card className="mt-4 p-3">
        <div className="d-flex mb-2">
          <span>Altere o nome exibido:</span>
        </div>
        <Input onChange={({ target }) => setInputUserName(target.value)} placeholder="Digite aqui" />
        <div className="d-flex justify-content-end mt-3">
          <Button onClick={changeUserName}>Salvar alterações</Button>
        </div>
        {
        nameWasSet && (
          <Alert toggle={() => setNameWasSet(false)} className="mt-3" color="success">Nome alterado com sucesso!</Alert>
        )
      }
      </Card>
    </div>
  );
}
