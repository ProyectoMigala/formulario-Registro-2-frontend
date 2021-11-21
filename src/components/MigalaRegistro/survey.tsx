import migalaSurvey from 'config/migala-registro-survey.json'
import * as Survey from "survey-react";
import { handleOnCompleted } from 'service';

const MigalaRegistroModel: Survey.ReactSurveyModel = new Survey.Model(migalaSurvey);

var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["modern"];
defaultThemeColors["$main-color"] = "#5e1780";
defaultThemeColors["$main-hover-color"] = "#CA7FF0";
defaultThemeColors["$text-color"] = "#4a4a4a";
defaultThemeColors["$header-color"] = "#DB7FF0";

Survey.StylesManager.applyTheme('modern');

MigalaRegistroModel.onComplete.add(handleOnCompleted);

export {
  MigalaRegistroModel
}