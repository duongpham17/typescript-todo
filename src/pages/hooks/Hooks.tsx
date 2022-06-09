import CustomBox from 'components/customBox';

import UseStateNumberArray from './UseStateNumberArray';
import UseStateString from './UseStateString';
import UseEffect from './UseEffect';
import UseContext from './UseContext';
import UseReducer from './UseReducer';
import UseRef from './UseRef';
import UseCustomHooks from './CustomHooks'

const Hooks = () => {
  return (
    <>
      <CustomBox title="useState number array">
        <UseStateNumberArray />
      </CustomBox>

      <CustomBox title="useState string">
        <UseStateString />
      </CustomBox>

      <CustomBox title="useEffect">
        <UseEffect start={false}/>
      </CustomBox>

      <CustomBox title="useContext">
        <UseContext/>
      </CustomBox>

      <CustomBox title="useReducer">
        <UseReducer/>
      </CustomBox>

      <CustomBox title="useRef">
        <UseRef/>
      </CustomBox>

      <CustomBox title="useCustomHooks">
        <UseCustomHooks/>
      </CustomBox>
    
    </>
  )
}

export default Hooks