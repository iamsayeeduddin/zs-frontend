import { Link } from "react-router-dom";

const CategoryItem = ({ categoryTitle, image, link } : { categoryTitle: string; image: string; link: string; }) => {
  return (
    <div className="w-[600px] relative max-[1250px]:w-[400px]  max-sm:w-[300px]">
        <Link to={`/shop/${link}`}>
          <div className="burgundy-gradient-img-container h-[40rem] w-full rounded-xl ">
            <img src={`/src/images/${image}`} className="h-full w-full object-cover rounded-xl" />
             <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 2,
              pointerEvents: 'none',
              background: 'linear-gradient(to top, rgba(235, 117, 141, 0.7) 0%, rgba(128,0,32,0.0) 40%)',
              borderRadius: 'inherit',
            }}
          />
          </div>
         
        </Link>
    </div>
  );
};
export default CategoryItem;
