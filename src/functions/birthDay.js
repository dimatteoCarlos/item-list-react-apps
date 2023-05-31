/*Birthday Calculation based off of today's Date*/
//challenge: include date validation

// export const ageBirthDate = (birthDate) => {
export const ageBirthDate = (birthDate) => {
  const tday = new Date();

  let tdayDate = {
    yyyy: +tday.getFullYear(),
    mm: +tday.getMonth() + 1,
    dd: +tday.getDate(),
  };
  //date format: dd/mm/yyyy
  const bdD = {
    yyyy: +birthDate.substring(6),
    mm: +birthDate.substring(3, 5),
    dd: +birthDate.substring(0, 2),
  };

  let age = tdayDate.yyyy - bdD.yyyy;
  //today is a birthdate
  const isTodayBirthDate = bdD.mm === tdayDate.mm && bdD.mm === tdayDate.mm;

  //update the age
  if (
    bdD.mm < tdayDate.mm ||
    (bdD.mm === tdayDate.mm && bdD.dd < tdayDate.dd)
  ) {
    age--;
  }
  return { isTodayBirthDate, age };
};
