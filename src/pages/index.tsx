import {Route, Routes} from "react-router-dom";
import {Main} from "./main";


const Routing = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Main/>}/>
    </Routes>
  );
};

export {Routing};