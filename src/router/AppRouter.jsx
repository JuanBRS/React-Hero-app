import { Route, Routes } from "react-router-dom";

import { LoginPages } from "../auth/page/LoginPage";
import { HeroesRoutes } from "../heroes";

export const AppRouter = () => {

  
  return (
    <>

      <Routes>
        
        <Route path="login" element={<LoginPages />} />
        <Route path="/*" element={<HeroesRoutes />} />
       
      </Routes>
    </>
  );
};
