import migalaSurvey from 'config/migala-registro-survey.json'
import * as Survey from "survey-react";
import { handleOnCompleted } from 'service';
import showdown from 'showdown';
import {
  birthDateValidator,
  curpValidator,
  claveElectorValidator
} from './validators';

const registerValidators = (...validators: {name: string, function: any}[]) => {

  validators.forEach( f => {
    Survey
        .FunctionFactory
        .Instance
        .register(f.name, f.function);
  })
}

registerValidators(
    {name: 'birthDateValidator', function: birthDateValidator},
    {name: 'curpValidator', function: curpValidator},
    {name: 'claveElectorValidator', function: claveElectorValidator},
)

const MigalaRegistroModel: Survey.ReactSurveyModel = new Survey.Model(migalaSurvey);

let defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["modern"];
defaultThemeColors["$main-color"] = "#5e1780";
defaultThemeColors["$main-hover-color"] = "#CA7FF0";
defaultThemeColors["$text-color"] = "#4a4a4a";
defaultThemeColors["$header-color"] = "#DB7FF0";

Survey.StylesManager.applyTheme('modern');

MigalaRegistroModel.onComplete.add(handleOnCompleted);

const converter = new showdown.Converter();

MigalaRegistroModel.onTextMarkdown
  .add((survey, options) => {
      //convert the markdown text to html
      let str = converter.makeHtml(options.text);
      //remove root paragraphs <p></p>
      str = str.substring(3);
      str = str.substring(0, str.length - 4);
      //set html
      options.html = str;
  });

export {
  MigalaRegistroModel
}