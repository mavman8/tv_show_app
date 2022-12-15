import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";
export function FiveStarRating({rating}){


    const starList = []; 
    const starFillCount = Math.floor(rating); 
    const hasHalfStar = (rating - parseInt(rating) >= 0.5);
    const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);
    for(let i = 1; i <= starFillCount; i++){
            starList.push(<StarFill/>);
    }

    if(hasHalfStar){
        starList.push(<StarHalf/>);
    }

    for(let i = 1; i <= emptyStarCount; i++){
        starList.push(<StarEmpty/>);
    }   
    return <div>
        {starList}
    </div>;
}