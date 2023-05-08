import { createContext, useState } from "react";
import axios from "axios";

export const CompContext = createContext(null);

export const CompProvider = (props) => {
  const [componentToDisplay, setComponentToDisplay] = useState(null);
  const [component, setComponent] = useState([]);
  const [compType, setCompType] = useState("");
  const [singleComp, setSingleComp] = useState("");

  const getMemberComp = () => {
    axios
      .get("/api/member-comp")
      .then(({ res }) => {
        setComponent(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getCompType = (component_type) => {
    axios
      .get(`/api/get_comp_type/${component_type}`)
      .then((res) => {
        setComponent(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getSingleComp = (component_id) => {
    const index = component.findIndex((e) => e.component_id === component_id);
    setComponentToDisplay(component[index]);
  };

  const createComp = (
    component_type,
    component_image,
    component_info,
    userId,
    username
  ) => {
    axios
      .post("/api/create-comp", {
        component_type,
        component_image,
        component_info,
        userId,
        username,
      })
      .then(({ data }) => {
        setComponent(data);
      })
      .catch((err) => console.log(err));
  };

  const deleteComp = (component_id) => {
    axios
      .delete(`/api/delete-comp/:${component_id}`)
      .then((res) => {
        setComponent(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <CompContext.Provider
      value={{
        componentToDisplay,
        component,
        getMemberComp,
        getCompType,
        createComp,
        deleteComp,
        compType,
        setCompType,
        singleComp,
        setSingleComp,
        getSingleComp,
      }}
    >
      {props.children}
    </CompContext.Provider>
  );
};
