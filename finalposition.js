const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = (moves) => {
    let origin = [0,0]

    for (let i of moves){
        if (i === "west") {
            origin[0] --
        } else if (i === "east") {
            origin[0] ++
        } else if (i === "north") {
            origin[1] ++
        } else {
            origin[1] --
        }
    }
    return origin
}
console.log(finalPosition(moves));