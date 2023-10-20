import React from "react";

const reviews = [
  {
    id: 1,
    site: "Study Zone",
    rating: 4,
    review:
      "James delivered an exceptional application with The Study Zone site. The design is sleek and modern, which is a testament to his expertise. Now, I have all my favorite lofi stations in one place, making study sessions more enjoyable. James' attention to detail and commitment to user satisfaction was very noticable and the delivered project showcased such.",
  },
  {
    id: 2,
    site: "Art Listing",
    rating: 5,
    review:
      "The art listing site is an invaluable tool for artists. It simplifies the process of listing and managing my artwork, and the design is visually appealing. The project was delivered promptly, and I am highly satisfied with the outcome.",
  },
  {
    id: 3,
    site: "Mobile App Moonrise",
    rating: 3,
    review:
      "Working with James during the development of Moonrise was a great experience. He was professional and transparent throughout the process, providing regular updates and addressing all my requirements. Moonrise perfectly fits my needs for tracking and enhancing my sleep. It was delivered on time, and the design is smooth, intuitive and fits the mood well. I'm highly satisfied with its performance and its ability to address my sleep-related needs.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-10 mt-2 mb-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-primary text-accent mb-6">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="site-bg p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-secondary border-b border-white/20 ">
                {review.site}
              </h3>
              <div className="flex items-center mt-2">
                <div className="text-yellow-500">
                  {Array.from(Array(review.rating).keys()).map((i) => (
                    <i key={i} className="fa fa-star" />
                  ))}
                </div>
              </div>
              <p className="mt-4 font-secondary ">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
