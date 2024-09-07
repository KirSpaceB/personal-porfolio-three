export default function isWithinRange(value:number, min:number, max:number) {

  if(value >= min && value <= max) {
    return true;
  } else {
    return false;
  }
}