import Sign from './Sign'

function SignSquareBox({playerInput,onTap,index,gameEnd}){

    let sign = <Sign/>
    if(playerInput==='X')
        sign = <Sign signValue={playerInput}/>
    else if(playerInput==='O')    
        sign=<Sign signValue={playerInput}/>
    

    // console.log(onTap);

    return(
        <>
         <div onClick={() => !gameEnd && playerInput=="" && onTap(index)} className='bg-yellow-500 p-12 flex-3 flex justify-center border-black border-4 rounded-md'>
            {sign}
         </div>
        </>
    )
}

export default SignSquareBox 