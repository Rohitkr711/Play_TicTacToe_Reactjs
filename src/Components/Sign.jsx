import { FaPen,FaRegCircle} from "react-icons/fa";
import { ImCross } from "react-icons/im";
function Sign({signValue}){

  if(signValue==='X'){
    return <ImCross/>
  }
  else if(signValue==="O"){
    return <FaRegCircle/>
  }
  else
    return <FaPen/>  
}

export default Sign