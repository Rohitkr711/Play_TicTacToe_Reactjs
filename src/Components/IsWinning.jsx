function isWinning(squareBoxes,currentSign){
    if(squareBoxes[0]==squareBoxes[1] && squareBoxes[1]==squareBoxes[2] && squareBoxes[2]==currentSign) return currentSign
    if(squareBoxes[3]==squareBoxes[4] && squareBoxes[4]==squareBoxes[5] && squareBoxes[5]==currentSign) return currentSign
    if(squareBoxes[6]==squareBoxes[7] && squareBoxes[7]==squareBoxes[8] && squareBoxes[8]==currentSign) return currentSign

    if(squareBoxes[0]==squareBoxes[3] && squareBoxes[3]==squareBoxes[6] && squareBoxes[6]==currentSign) return currentSign
    if(squareBoxes[1]==squareBoxes[4] && squareBoxes[4]==squareBoxes[7] && squareBoxes[7]==currentSign) return currentSign
    if(squareBoxes[2]==squareBoxes[5] && squareBoxes[5]==squareBoxes[8] && squareBoxes[8]==currentSign) return currentSign
            
    if(squareBoxes[0]==squareBoxes[4] && squareBoxes[4]==squareBoxes[8] && squareBoxes[8]==currentSign) return currentSign
    if(squareBoxes[2]==squareBoxes[4] && squareBoxes[4]==squareBoxes[6] && squareBoxes[6]==currentSign) return currentSign

    return ''
    
}
export default isWinning