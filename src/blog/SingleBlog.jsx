import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import blogList from "../utilis/blogdata";
import "./SingleBlog.css";
import PopularPost from "../shop/PopularPost";
import Tags from "../shop/Tags";

const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

const SingleBlog = () => {
  const [blog] = useState(blogList);
  const { id } = useParams();
  const currentId = Number(id);

  // Find current blog
  const currentBlog = blog.find((b) => b.id === currentId);

  // Find index of current blog
  const currentIndex = blog.findIndex((b) => b.id === currentId);

  // Get previous and next blogs
  const previousBlog = blog[currentIndex - 1];
  const nextBlog = blog[currentIndex + 1];

  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, [id]); // Depend on the blog ID to trigger the effect when it changes

  return (
    <div>
      <PageHeader title="Single Blog Page" curPage="Blog / Blog Details" />
      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {currentBlog && (
                            <div key={currentBlog.id}>
                              <div className="post-thumb">
                                <img
                                  src={currentBlog.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>

                              <div className="post-content">
                                <h3>{currentBlog.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {currentBlog.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  In today's fast-paced corporate environment,
                                  effective business reporting is crucial for
                                  informed decision-making and maintaining a
                                  competitive edge. The Business Reporting
                                  Council plays a pivotal role in guiding
                                  organizations to develop and implement
                                  comprehensive reporting strategies that align
                                  with their long-term goals. This blog post
                                  delves into the core responsibilities of the
                                  Business Reporting Council, including the
                                  establishment of reporting standards, the
                                  integration of advanced analytics, and the
                                  promotion of transparency across various
                                  business functions. We will explore how these
                                  strategies are essential for fostering a
                                  culture of accountability and driving
                                  sustainable growth within organizations.
                                  Additionally, the post will highlight the
                                  council's role in advising companies on the
                                  latest regulatory changes and best practices
                                  in financial reporting. By aligning reporting
                                  mechanisms with business objectives,
                                  organizations can enhance their
                                  decision-making processes and achieve greater
                                  operational efficiency. Whether you are a
                                  business leader, financial analyst, or
                                  corporate strategist, understanding the
                                  principles and practices advocated by the
                                  Business Reporting Council can significantly
                                  impact your organization's success. This guide
                                  provides valuable insights into how to craft
                                  and execute a robust business reporting plan
                                  that supports both short-term and long-term
                                  objectives.
                                </p>

                                <blockquote>
                                  <p>
                                    Good reporting is not just about numbers;
                                    it's about telling the story behind those
                                    numbers. In the world of business, clarity
                                    and transparency are the cornerstones of
                                    trust.
                                  </p>
                                  <cite>
                                    <a href="#">___Alex Johnson</a>
                                  </cite>
                                </blockquote>

                                <p>
                                  Effective business reporting is essential for
                                  informed decision-making. It transforms
                                  complex data into clear, actionable insights,
                                  enabling organizations to plan strategically
                                  and maintain transparency with stakeholders.
                                  Accurate reporting not only highlights current
                                  performance but also helps forecast future
                                  trends, ensuring that businesses remain
                                  competitive and well-prepared for any
                                  challenges ahead.
                                </p>
                                <img
                                  src="/public/assets/images/blog/single/01.jpg"
                                  alt=""
                                />
                                <p>
                                  Business reporting is a vital tool for
                                  organizations, providing a clear snapshot of
                                  performance, trends, and potential areas of
                                  growth. By turning raw data into meaningful
                                  insights, reporting helps executives and
                                  managers make informed decisions that align
                                  with the company's strategic goals. It plays a
                                  crucial role in planning and forecasting,
                                  allowing businesses to anticipate challenges,
                                  allocate resources efficiently, and stay ahead
                                  of the competition. Moreover, transparent and
                                  accurate reporting fosters trust with
                                  stakeholders, demonstrating the organization's
                                  commitment to accountability and long-term
                                  success.
                                </p>

                                <div className="video-thumb">
                                  <img
                                    src="/public/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://www.youtube.com/watch?v=OGs2YsqvWDg"
                                    className="video-button popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>

                                <p>
                                  In addition to its internal benefits, business
                                  reporting plays a significant role in external
                                  communication. Transparent and accurate
                                  reports enhance trust with investors, clients,
                                  and other stakeholders by demonstrating a
                                  commitment to accountability and ethical
                                  governance. By aligning reporting practices
                                  with the organization’s objectives, companies
                                  can ensure that their strategies are
                                  data-driven, responsive, and forward-looking,
                                  ultimately driving sustainable success in a
                                  competitive market.
                                </p>

                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a
                                          href={val.link}
                                          className={val.className}
                                        >
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="navigation-part">
                      <div className="left">
                        {previousBlog && (
                          <Link
                            to={`/blog/${previousBlog.id}`}
                            className="prev"
                          >
                            <i className="icofont-double-left"></i> Previous
                            Blog
                          </Link>
                        )}
                        {previousBlog && (
                          <Link
                            to={`/blog/${previousBlog.id}`}
                            className="title"
                          >
                            {previousBlog.title}
                          </Link>
                        )}
                      </div>
                      <div className="right">
                        {nextBlog && (
                          <Link to={`/blog/${nextBlog.id}`} className="prev">
                            <i className="icofont-double-right"></i> Next Blog
                          </Link>
                        )}
                        {nextBlog && (
                          <Link to={`/blog/${nextBlog.id}`} className="title">
                            {nextBlog.title}
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-lg-4 col-12">
              <aside>
                <Tags />
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
