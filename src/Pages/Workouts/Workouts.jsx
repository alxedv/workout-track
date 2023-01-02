import React from 'react';
import workInProgress from '../../assets/icons/work-in-progress.png';

export default function Workouts() {
  return (
    <div className="p-5">
      <img src={workInProgress} width="100px" className="mt-5" alt="" />
    </div>
  );
}
