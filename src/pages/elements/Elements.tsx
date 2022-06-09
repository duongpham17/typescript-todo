
import CustomBox from 'components/customBox';

import Standard from './Standard';
import Map from './Map';
import Generics from './Generics';
import FunctionalState from './FunctionalState';



const items = [{id: 1, name: "john", open: true}, {id:2, name: "doe", open: false}, {id:3, name: "jack"}, {id:4, name: "doe", open: true}];

const map = [{id: 1, name:"john doe", title:"title john doe", location:"somewhere"}, {id: 2, name:"jane doe", title:"title jane doe", location:"somewhere"}, ];


export const Elements = () => {
  return (
    <>

    <CustomBox title="Standard JSX elements">
      <Standard title="hello there i am title" heading={<p>heading</p>}>
          props.children - Hello world
      </Standard>
    </CustomBox>


    <CustomBox title="Functional State">
      <FunctionalState header={(num: number) => <div>Header {num}</div>} >
        {(num: number) => <div>TITLE {num}</div>} 
      </FunctionalState>
    </CustomBox>


    <CustomBox title="Generics">
      <Generics
      items={items} 
      render={(el) => <div>{el.id} ITEM - {el.name} - {el.open && "hello"}</div> } 
      />
    </CustomBox>

    <CustomBox title="Map">
      <Map array={map} />
    </CustomBox>

    </>
  )
}

export default Elements