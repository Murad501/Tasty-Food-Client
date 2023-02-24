import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div className="h-[600px] carousel-section relative">
      <div className="carousel w-full h-full">
        <div
          id="item1"
          className="carousel-item w-full relative sndHeader"
          style={{
            "--img": `url('https://www.islamicity.org/food/catalog/241.1200.jpg?&v=03132021'), 
      linear-gradient(#e66465, #9198e5)`,
          }}
        >
          {/* <img
            src="https://www.islamicity.org/food/catalog/241.1200.jpg?&v=03132021"
            className="w-full object-cover"
            alt="slide-img"
          /> */}
          <div className="absolute bottom-24 m-auto left-0 right-0 max-w-5xl text-white px-2 xl:px-0">
            <h1>
              In times past, Finnish food was seasonal; in winter there were no
              easily available green vegetables, etc., as there are now and
              the primary purpose for food was to provide energy in the harsh
              climate. As a result many traditional Finnish recipes are simple
              dishes consisting of meat (or fish) and easily stored staples such
              as potatoes. Lohikeitto is one of these traditional dishes – and
              as a bonus, it’s easy to prepare <span className="font-semibold text-orange-500">See More</span>
            </h1>
          </div>
        </div>
        <div
          id="item2"
          className="carousel-item w-full relative sndHeader"
          style={{
            "--img": `url('https://www.islamicity.org/food/catalog/151.jpg?&v=03132021'), 
      linear-gradient(#e66465, #9198e5)`,
          }}
        >
          {/* <img
            src="https://www.islamicity.org/food/catalog/241.1200.jpg?&v=03132021"
            className="w-full object-cover"
            alt="slide-img"
          /> */}
          <div className="absolute bottom-24 mx-20 text-white">
            <h1 className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              numquam fugit reprehenderit dolorum quaerat cum repudiandae, magni
              pariatur veritatis facere quasi cumque nesciunt nulla iure hic
              excepturi similique corrupti officia architecto voluptatem in
              dolore exercitationem deserunt voluptatibus. Delectus porro ex
              iusto velit amet suscipit maiores. Fugiat non architecto delectus
              molestiae natus molestias voluptatem, libero, explicabo sapiente
              est voluptatibus quis, officia atque dolorem. Quam recusandae vero
              inventore laborum, vel, perferendis nostrum consequuntur totam
              voluptatem, odio dolore perspiciatis accusantium quasi cupiditate.
              Modi architecto laborum sapiente numquam, repellat maiores nobis
              incidunt quasi tempore officiis minus quae voluptas voluptates hic
              vel nihil. Placeat, atque? Unde blanditiis culpa officia rerum
              iure! Numquam natus quaerat, error facilis voluptas iusto ullam
              deserunt, vel adipisci reprehenderit alias? Fuga?
            </h1>
          </div>
        </div>
        <div
          id="item3"
          className="carousel-item w-full relative sndHeader"
          style={{
            "--img": `url('https://www.islamicity.org/food/catalog/238.jpg?&v=03132021'), 
      linear-gradient(#e66465, #9198e5)`,
          }}
        >
          {/* <img
            src="https://www.islamicity.org/food/catalog/241.1200.jpg?&v=03132021"
            className="w-full object-cover"
            alt="slide-img"
          /> */}
          <div className="absolute bottom-24 mx-20 text-white">
            <h1 className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              numquam fugit reprehenderit dolorum quaerat cum repudiandae, magni
              pariatur veritatis facere quasi cumque nesciunt nulla iure hic
              excepturi similique corrupti officia architecto voluptatem in
              dolore exercitationem deserunt voluptatibus. Delectus porro ex
              iusto velit amet suscipit maiores. Fugiat non architecto delectus
              molestiae natus molestias voluptatem, libero, explicabo sapiente
              est voluptatibus quis, officia atque dolorem. Quam recusandae vero
              inventore laborum, vel, perferendis nostrum consequuntur totam
              voluptatem, odio dolore perspiciatis accusantium quasi cupiditate.
              Modi architecto laborum sapiente numquam, repellat maiores nobis
              incidunt quasi tempore officiis minus quae voluptas voluptates hic
              vel nihil. Placeat, atque? Unde blanditiis culpa officia rerum
              iure! Numquam natus quaerat, error facilis voluptas iusto ullam
              deserunt, vel adipisci reprehenderit alias? Fuga?
            </h1>
          </div>
        </div>
        <div
          id="item4"
          className="carousel-item w-full relative sndHeader"
          style={{
            "--img": `url('https://www.islamicity.org/food/catalog/151.jpg?&v=03132021'), 
      linear-gradient(#e66465, #9198e5)`,
          }}
        >
          {/* <img
            src="https://www.islamicity.org/food/catalog/241.1200.jpg?&v=03132021"
            className="w-full object-cover"
            alt="slide-img"
          /> */}
          <div className="absolute bottom-24 mx-20 text-white">
            <h1 className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              numquam fugit reprehenderit dolorum quaerat cum repudiandae, magni
              pariatur veritatis facere quasi cumque nesciunt nulla iure hic
              excepturi similique corrupti officia architecto voluptatem in
              dolore exercitationem deserunt voluptatibus. Delectus porro ex
              iusto velit amet suscipit maiores. Fugiat non architecto delectus
              molestiae natus molestias voluptatem, libero, explicabo sapiente
              est voluptatibus quis, officia atque dolorem. Quam recusandae vero
              inventore laborum, vel, perferendis nostrum consequuntur totam
              voluptatem, odio dolore perspiciatis accusantium quasi cupiditate.
              Modi architecto laborum sapiente numquam, repellat maiores nobis
              incidunt quasi tempore officiis minus quae voluptas voluptates hic
              vel nihil. Placeat, atque? Unde blanditiis culpa officia rerum
              iure! Numquam natus quaerat, error facilis voluptas iusto ullam
              deserunt, vel adipisci reprehenderit alias? Fuga?
            </h1>
          </div>
        </div>
        {/* <div id="item2" className="carousel-item w-full relative">
          <img
            src="https://www.islamicity.org/food/catalog/151.jpg?&v=03132021"
            className="w-full object-cover"
            alt="slide-img"
          />
          <div className="absolute bottom-24 mx-20 text-white">
            <h1 className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore numquam fugit reprehenderit dolorum quaerat cum repudiandae, magni pariatur veritatis facere quasi cumque nesciunt nulla iure hic excepturi similique corrupti officia architecto voluptatem in dolore exercitationem deserunt voluptatibus. Delectus porro ex iusto velit amet suscipit maiores. Fugiat non architecto delectus molestiae natus molestias voluptatem, libero, explicabo sapiente est voluptatibus quis, officia atque dolorem. Quam recusandae vero inventore laborum, vel, perferendis nostrum consequuntur totam voluptatem, odio dolore perspiciatis accusantium quasi cupiditate. Modi architecto laborum sapiente numquam, repellat maiores nobis incidunt quasi tempore officiis minus quae voluptas voluptates hic vel nihil. Placeat, atque? Unde blanditiis culpa officia rerum iure! Numquam natus quaerat, error facilis voluptas iusto ullam deserunt, vel adipisci reprehenderit alias? Fuga?
            </h1>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full relative">
          <img
            src="https://www.islamicity.org/food/catalog/238.jpg?&v=03132021"
            className="w-full object-cover"
            alt="slide-img"
          />
          <div className="absolute bottom-24 mx-20 text-white">
            <h1 className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore numquam fugit reprehenderit dolorum quaerat cum repudiandae, magni pariatur veritatis facere quasi cumque nesciunt nulla iure hic excepturi similique corrupti officia architecto voluptatem in dolore exercitationem deserunt voluptatibus. Delectus porro ex iusto velit amet suscipit maiores. Fugiat non architecto delectus molestiae natus molestias voluptatem, libero, explicabo sapiente est voluptatibus quis, officia atque dolorem. Quam recusandae vero inventore laborum, vel, perferendis nostrum consequuntur totam voluptatem, odio dolore perspiciatis accusantium quasi cupiditate. Modi architecto laborum sapiente numquam, repellat maiores nobis incidunt quasi tempore officiis minus quae voluptas voluptates hic vel nihil. Placeat, atque? Unde blanditiis culpa officia rerum iure! Numquam natus quaerat, error facilis voluptas iusto ullam deserunt, vel adipisci reprehenderit alias? Fuga?
            </h1>
          </div>
        </div> */}
      </div>
      <div className="flex justify-center w-full py-2 gap-2 absolute bottom-10">
        <a href="#item1" className="w-4 h-4 rounded-full bg-white"> </a>
        <a href="#item2" className="w-4 h-4 rounded-full bg-orange-500"> </a>
        <a href="#item3" className="w-4 h-4 rounded-full bg-white"> </a>
        <a href="#item4" className="w-4 h-4 rounded-full bg-white"> </a>
      </div>
    </div>
  );
};

export default Carousel;
