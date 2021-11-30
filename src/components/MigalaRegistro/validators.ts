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

export function curpValidator(data: any): boolean {
  let [ curp ] = data
  return Constants.CURP_REGEX.test(curp.toString().toUpperCase())
}
