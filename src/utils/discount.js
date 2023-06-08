export default function discount(price){
  return Math.round(price - (price * (20/100)))
}