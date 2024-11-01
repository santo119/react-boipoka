
import BannerImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen mt-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={BannerImage}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn bg-[#23BE0A]">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;