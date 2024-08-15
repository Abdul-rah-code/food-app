import RestoCard from "./RestoCard";
import {useState, useEffect} from "react";
import restList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body=()=>{
    const[listOfRestorant,setListOfRestorant] =useState([]);
    const[filteredResto,setFilteredResto] =useState([]);
    const[searchfil,setSearchfil]=useState([""]);
    console.log("body is rendered")

    useEffect(()=>{
       fetchData();
       console.log("useEffect Rendered")
    },[])

    const fetchData =async()=>{
        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.659289034118574&lng=78.14445596091468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json =await data.json();
        console.log(json);
        setListOfRestorant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredResto(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        

    };
    if(listOfRestorant.length===0){
        return <Shimmer/>
    }
    console.log("Body Rendered")
    
    return(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchfil} onChange={(e)=>{setSearchfil(e.target.value)}}></input>
                    <button onClick={()=>{
                        console.log(listOfRestorant)
                       const filteredsearch=  listOfRestorant.filter((x)=>x.info.name.toLowerCase().includes(searchfil.toLowerCase()));
                       setFilteredResto(filteredsearch)

}}>search</button>
                </div>
                <button className="filter-btn-rate" onClick={()=>{

                    const filteredList= listOfRestorant.filter((x)=>x.info.avgRating>4.5);
                    setFilteredResto(filteredList);
                }}>Top Rated Restorant</button>
                <button className="filter-btn-near" onClick={()=>{

const filteredNear= listOfRestorant.filter((x)=>x.info.sla.deliveryTime<20);
setFilteredResto(filteredNear);
}}>Nearest Restorant</button>

            </div>
            <div className="card-container">
                {filteredResto.map((x)=>(
                 <Link key={x.info.id} to={"/restaurants/"+x.info.id}> <RestoCard   resData={x}/></Link>
                ))}
                
                
            </div>
        </div>
    )

}

export default Body;