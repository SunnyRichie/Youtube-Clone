export const API_KEY = 'AIzaSyBNyjMF6Wcbg05mz8_RihACB0wbaJ28tpE'

export const value_converter = (value) =>{
if(value >= 1000000){
  return Math.floor(value/1000000)+"M"
}else if(value >= 1000){
  return Math.floor(value/1000)+"K"
}else{
  return value
}
}