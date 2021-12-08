

import {Constants} from "common/Constants";

export function birthDateValidator(date: any): boolean {

  const birthDate = new Date(date[0]);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age >= 15;

}

export function curpValidator(data: string[]): boolean {
  let [ curp ] = data
  return Constants.CURP_REGEX.test(curp.toString().toUpperCase())
}

export function claveElectorValidator(data: string[]): boolean{
  let [clave_elector] = data; 
  return Constants.CLAVE_ELECTOR_REGEX.test(clave_elector.toUpperCase());
}
