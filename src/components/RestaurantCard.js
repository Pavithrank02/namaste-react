import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestrauntCard = ({
	name,
	cloudinaryImageId,
	cuisines,
	lastMileTravelString,
	avgRating,
	slaString,
	costForTwoString,
	ribbon,
	aggregatedDiscountInfo,
}) => {
	const { user } = useContext(UserContext);
	// const { header } = aggregatedDiscountInfo;
	return (
		<div className=" w-56 p-5 m-5 shadow-lg">
			<div className="card-width">
				<div className="resturant-img">
					<img alt="Aggarwal Sweets India" src={IMG_CDN_URL + cloudinaryImageId} />
				</div>
				{ribbon ? (
					<div
						className="promote"
						style={{
							background: "rgb(58, 60, 65)",
							color: "rgb(255, 255, 255)",
							borderColor: "rgb(30, 32, 35) transparent",
						}}
					>
						<div className="text">{ribbon[0].type}</div>
					</div>
				) : (
					""
				)}

				<div className="res-detail">
					<div className="font-bold">{name}</div>
					<div className="res-cusines">{cuisines.join(", ")}</div>
				</div>
				<div className="res-others">
					<div
						className={
							avgRating <= 3.9 && !isNaN(avgRating)
								? "rating average-rate"
								: "rating good-rate "
						}
					>
						<span className="icon-star" />
						<span>{avgRating}</span>
					</div>
					<div>•</div>
					<div>{slaString}</div>
					<h5 className="font-bold">
        {user.name} - {user.email}
      </h5>
					<div>•</div>
					<div className="for-ppl">{costForTwoString}</div>
					{/* <p>{aggregatedDiscountInfo?.shortDescriptionList[0].meta}</p>
							{console.log(aggregatedDiscountInfo?.shortDescriptionList[0].meta)} */}
				</div>
				{aggregatedDiscountInfo ? (
					<div className="offers">
						<span className="icon-offer-filled icon"></span>
						<span className="text">
							{aggregatedDiscountInfo?.shortDescriptionList[0].meta}
						</span>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default RestrauntCard;
