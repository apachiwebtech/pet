export const AgeCalculator= (date)=>{
    // Assuming petObject.dob is in the format "2022-04-16T18:30:00.000Z"
const petDob = new Date(date);

const currentDate = new Date();

// Calculate the difference in months
const monthsDifference = (currentDate.getMonth() - petDob.getMonth()) + 12 * (currentDate.getFullYear() - petDob.getFullYear());

// Convert months to decimal years
const ageInYears = monthsDifference / 12;
return ageInYears.toFixed(1);
// setAge(ageInYears.toFixed(1))
// console.log("Age in years:", ageInYears.toFixed(1));
 }