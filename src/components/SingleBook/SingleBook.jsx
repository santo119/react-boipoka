import { Link } from "react-router-dom";


const SingleBook = ({book}) => {
    const {bookId,bookName,author,image,review,rating,tags,category} = book
    return (
       <Link to={`/books/${bookId}`}>
        <div className="card bg-base-100 w-full border-2 p-4 my-4 mt-10">
        <figure className="bg-gray-200 py-8 rounded-xl">
            <img
            src={image} className="h-[250px] rounded-2xl"
            alt={bookName} />
        </figure>
        <div className="card-body">
        
            <div className="flex justify-center gap-5">
            {
                tags.map((tag, index) => <button key={index} className="btn bg-green-200 text-green-800">{tag}</button>)
            }
            </div>
            <h2 className="card-title">
            {bookName}
           
            </h2>
            <p>By: {author}</p>
            <div className="border-t-2 border-dashed m-3"></div>
            <div className="card-actions justify-between ">
            <div className="badge">{category}</div>
            <div className="badge ">
            <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-100" />
            </div>
            </div>
            </div>
        </div>
        </div>
       </Link>
    );
};

export default SingleBook;