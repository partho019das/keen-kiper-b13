import Mainlayout from "../layour/Mainlayout";
import Homepage from "../Pages/Homepages/Homepage";
import Addfrind from "../Pages/Homepages/Addfrind";
import Timeline from "../shear/Timeline";
import Stats from "../shear/Stats";
import { createBrowserRouter } from "react-router";
import Errorpages from "../Pages/Homepages/Errorpages";



export const router=createBrowserRouter([
{
path:"/",
Component:Mainlayout,
children:[
{
  index:true,
  Component:Homepage,
},
{
  path:"/Timeline",
  Component:Timeline,
},
{
    path:"/Stats",
    Component:Stats,
},

],

errorElement: <Errorpages></Errorpages>



},

]);