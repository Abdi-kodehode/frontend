import React , {useContext} from 'react'
import { UserContext } from '../../context/context';


const Premium = () => {
const [state, setState] = useContext(UserContext);
  return (
    <div>
      Jestem premium
    </div>
  )
}

export default Premium
