import React from 'react';
import {
  Model,
  Survey,
  StylesManager
} from "survey-react";
import migalaSurvey from 'config/migala-registro-survey.json'

StylesManager.applyTheme('modern');
const MigalaRegistroModel: Model = new Model(migalaSurvey);

export function MigalaRegistro() {
  return(
    <Survey model={MigalaRegistroModel} />
  )
}
