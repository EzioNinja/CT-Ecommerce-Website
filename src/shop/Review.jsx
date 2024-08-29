import React, { useState } from "react";
import Ratting from "../components/Ratting";

const reviewTitle = "Add a Review";
const initialReviewList = [
  {
    imgUrl: "/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Great product! Really helps improve my performance.",
  },
  {
    imgUrl: "/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 11, 2022 at 3:45 pm",
    desc: "Comfortable and stylish. Highly recommended!",
  },
  {
    imgUrl: "/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 12, 2022 at 9:15 am",
    desc: "Exceeded my expectations in every way.",
  },
  {
    imgUrl: "/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 13, 2022 at 5:30 pm",
    desc: "The best running shoes I've ever owned!",
  },
];

const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);
  const [reviews, setReviews] = useState(initialReviewList);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      imgUrl: "/assets/images/instructor/default.jpg", // Use a default image or upload option
      imgAlt: "Client thumb",
      name: name,
      date: new Date().toLocaleString(),
      desc: message,
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="desc" onClick={() => setReviewShow(false)}>
          Description
        </li>
        <li className="rev" onClick={() => setReviewShow(true)}>
          Reviews ({reviews.length})
        </li>
      </ul>

      <div
        className={`review-content ${
          reviewShow ? "review-content-show" : "description-show"
        }`}
      >
        {reviewShow ? (
          <div className="review-showing">
            <ul className="content lab-ul">
              {reviews.map((review, i) => (
                <li key={i} className="review-item">
                  <div className="post-thumb">
                    <img src={review.imgUrl} alt={review.imgAlt} />
                  </div>
                  <div className="post-content">
                    <div className="entry-meta">
                      <div className="posted-on">
                        <a href="#">{review.name}</a>
                        <p>{review.date}</p>
                      </div>
                    </div>
                    <div className="entry-content">
                      <p>{review.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="client-review">
              <div className="review-form">
                <div className="review-title">
                  <h5>{reviewTitle}</h5>
                </div>

                <form onSubmit={handleSubmit} className="row">
                  <div className="col-md-4 col-12">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4 col-12">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4 col-12">
                    <div className="rating">
                      <span className="me-2">Your Rating </span>
                      <Ratting />
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <textarea
                      name="message"
                      id="message"
                      rows="8"
                      placeholder="Type Your Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="default-button">
                      <span>Submit Review</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="description">
            <p>
              The adidas Ultraboost DNA Shoes are designed for optimal
              performance and style. Featuring a Primeknit upper with symbolic
              designs inspired by Chinese culture, these shoes provide superior
              comfort and a mental edge. Whether you're running a marathon or
              running errands, the energy return and sleek design make these
              shoes a top choice.
            </p>
            <div className="post-item">
              <div className="post-thumb">
                <img src="/assets/images/shop/01.jpg" alt="" />
              </div>
              <div className="post-content">
                <ul className="lab-ul">
                  <li>Primeknit upper for adaptive fit and premium comfort.</li>
                  <li>Boost midsole for unparalleled energy return.</li>
                  <li>
                    Continental™ Rubber outsole for extraordinary traction.
                  </li>
                  <li>Special design celebrating Chinese New Year.</li>
                  <li>Lightweight and responsive for all-day wear.</li>
                </ul>
              </div>
            </div>
            <p>
              Experience the perfect blend of tradition and technology with the
              adidas Ultraboost DNA Shoes. Elevate your running game and make a
              statement with every step.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Review;
