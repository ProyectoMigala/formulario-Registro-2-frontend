import React from 'react';
import * as Survey from "survey-react";
import { MigalaRegistroModel } from './survey'

export function MigalaRegistro() {
  return(
    <>
      <Survey.Survey model={MigalaRegistroModel} />
    </>
  )
}
