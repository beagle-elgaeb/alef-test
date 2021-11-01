export function validateFormPerson(name: string, age: string) {
  let isValid = true;
  let nameIsValid = true;
  let ageIsValid = true;

  if (name.length === 0 || name.length > 100) {
    nameIsValid = false;
  }

  if (age.length === 0 || age.length > 3 || Number(age) <= 14) {
    ageIsValid = false;
  }

  if (nameIsValid !== true || ageIsValid !== true) {
    isValid = false;
  }

  return isValid;
}

export function validateFormChild(name: string, age: string) {
  let isValid = true;
  let nameIsValid = true;
  let ageIsValid = true;

  if (name.length === 0 || name.length > 100) {
    nameIsValid = false;
  }

  if (age.length === 0 || age.length > 3 || Number(age) < 0) {
    ageIsValid = false;
  }

  if (nameIsValid !== true || ageIsValid !== true) {
    isValid = false;
  }

  return isValid;
}

