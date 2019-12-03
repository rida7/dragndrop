// import React from 'react'
// //import Home from './containers/home/home'
// import Dnd from './components/dnd/dnd'
//
// export default ()=>{
//     return(
//         <>
//      {/*<Home/>*/}
//      <Dnd/>
//         </>
//     );
//
// }



import React from 'react'
import Example from './components/example/example'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

export default()=>{
    return(
        <div className="App">
            <DndProvider backend={HTML5Backend}>
                <Example />
            </DndProvider>
        </div>
    )
};


