import { SurveyModel } from "survey-react";

export function handleOnCompleted( sender: SurveyModel, options: any) : void{
  console.log(sender.data)
}

export function sendForm(): void{

}