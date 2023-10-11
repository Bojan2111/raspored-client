import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { featuresList } from "../features";

// // const [features, setFeatures] = useState([]);
// // setFeatures(props.features);
// const [feature, setFeature] = useState("");
// const [item, setItem] = useState("");
// const [headerItems, setHeaderItems] = useState([]);
// const featureKeys = Object.keys(featuresList).filter(
//   (f) => !f.startsWith("RC")
// );
// const dispatch = useDispatch();

// const dashboardData = {
//   profile: {
//     name: "Ime Prezime",
//     role: "Zaposleni",
//   },
//   header: ["Licni", "Timski", "Smenski", "Svi timovi"],
//   sideMenu: featureKeys,
// };

// const handleMainView = (option) => {
//   setFeature(option);
// };

// const handleMenu = (mitem) => {
//   setItem(mitem);
//   setHeaderItems(featuresList[mitem].map((d) => d.name));

//   // Use the setFeature action creator to dispatch the action
//   dispatch(setFeature({ menu: mitem, features: headerItems }));
//   console.log(headerItems);
// };

// useEffect(() => {
//   setFeature(featureKeys.length > 0 ? featureKeys[0] : "");
// }, [featureKeys]);

// // Use useSelector correctly to access the Redux state
// const menu = useSelector((state) => state.feature.menu);
// const features = useSelector((state) => state.feature.features);

// console.log(features);

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menu: "Raspored",
    features: ["Licni", "Timski", "Smenski", "Svi timovi"],
  },
  reducers: {
    setMenu: (state, action) => {
      const { menu, features } = action.payload;
      state.menu = menu;
      state.features = features;
    },
  },
});

export const { setMenu } = menuSlice.actions;

export default menuSlice.reducer;
