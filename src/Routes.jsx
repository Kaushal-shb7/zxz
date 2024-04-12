import React from "react";
  import { useRoutes } from "react-router-dom";
  import Home from "pages/Home";
import NotFound from "pages/NotFound";
import 1920px from "pages/1920px";

  const ProjectRoutes = () => {
    let element = useRoutes([{path: "/",element: <Home />},{ path: '*', element: <NotFound /> },{
      path: '1920px',
      element: <1920px/>,
    }]);
  
    return element;
  };
  
  export default ProjectRoutes;
  