import React from 'react';
import {
  Card, CardBody, CardTitle,
} from 'reactstrap';
import { useAtom } from 'jotai';
import { ProgressChart } from '../../Components/ProgressChart/ProgressChart';
import './Home.css';
import profileIcon from '../../assets/icons/profile.png';
import ModalNewWeight from '../../Components/ModalNewWeight/Modal';
import { weightsAtom } from '../../Components/ProgressChart/Store';
import { weightGoalAtom } from '../../Components/ModalNewGoal/Store';
import ModalNewGoal from '../../Components/ModalNewGoal/ModalNewGoal';
import { userProfileAtom } from '../Profile/Store';

export default function Home() {
  const [weights] = useAtom(weightsAtom);
  const [weightGoal] = useAtom(weightGoalAtom);
  const [userProfile] = useAtom(userProfileAtom);
  return (
    <div className="d-flex w-100 flex-column home">
      <Card className="mx-2 mt-3">
        <div className="d-flex justify-content-start align-items-center p-2">
          <div><img src={profileIcon} className="rounded-circle me-3 icon" alt="" /></div>
          {
            userProfile !== ''
              ? <div>{userProfile}</div>
              : <span className="text-muted">Nenhum nome adicionado</span>
          }
        </div>
      </Card>
      <Card className="m-2 p-3 my-3 align-items-start">
        <CardTitle>Peso</CardTitle>
        <CardBody className="d-flex flex-column align-items-start card-weights w-100">
          <div className="mb-3">
            <span>Atual: </span>
            {
              weights.length
                ? `${weights[weights.length - 1]} Kg`
                : <span className="text-muted">Nenhum peso adicionado</span>
            }

          </div>
          <div>
            <span className="mb-3">Meta: </span>
            {
              weightGoal !== ''
                ? `${weightGoal} Kg`
                : <span className="text-muted">Nenhuma meta adicionado</span>
            }
          </div>
        </CardBody>
        <div>
          <ModalNewGoal />
        </div>
      </Card>
      <div>
        <Card className="m-2 p-3 align-items-start">
          <CardTitle>Progresso</CardTitle>
          <div className="d-flex flex-column align-items-center ms-3 mt-3">
            <ProgressChart />
          </div>
          <div className="d-flex w-100">
            <ModalNewWeight />
          </div>
        </Card>
      </div>
    </div>
  );
}
