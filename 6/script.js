
const faren = [23,140,212,41]
let celcArray = []

function getCelcius(){
    celcArray = faren.map(x => (x - 32) * 5/9)

}
getCelcius()
console.log(celcArray)