
import { CDN_URL } from "../utils/constants";

const RestoCard=(props)=>{
    const {resData} =props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        
    } = resData?.info
    return(
        <div className="card-item">
                    <img src={CDN_URL + cloudinaryImageId} alt="image" className="card-image"/>
                    <h3>{name}</h3>
                    <h4 className="cusine">{cuisines.join(",")}</h4>
                    <h4>{avgRating} Stars </h4>
                    <h4>{resData.info.sla.deliveryTime} minutes</h4>


                </div>
    )
}

export default RestoCard;