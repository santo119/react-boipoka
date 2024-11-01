import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreList } from "../../utilities/addToDB";


const BookDetails = () => {

    const {bookId} = useParams()
    const data = useLoaderData()
    const id = parseInt(bookId)

    const book = data.find((book) => book.bookId == id)
    
    const {bookId: currentBookId, image,category,review} = book

    const handleMarkasRed = (id) =>{

        addToStoreList(id)
    }

    return (
        <div className="card lg:card-side bg-base-200 mt-10">
        <figure className="w-full ml-4 rounded-xl my-4">
          <img
            src={image} className="w-full rounded-xl"
            alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">The Catcher in the Rye!</h2>
          <p>{category}</p>
          <p> Review: {review}</p>
          <div className="card-actions justify-ends">
            <button onClick={() => handleMarkasRed(bookId)} className="btn bg-gray-700 text-white">Mark as Read</button>
            <button className="btn btn-outline bg-[#50B1C9]"> Add to Wishlist</button>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;