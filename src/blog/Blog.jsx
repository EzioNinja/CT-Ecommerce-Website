import React from "react";
import PageHeader from "../components/PageHeader";
import blogList from "../utilis/blogdata";
import { Link } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <PageHeader title="Blog Page" curPage="Blogs" />
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
              {blogList.map((blog, index) => (
                <div key={index} className="col">
                  <div className="post-item">
                    <div className="post-inner">
                      <div className="post-thumb">
                        <Link to={`/blog/${blog.id}`}>
                          <img src={blog.imgUrl} alt={blog.title} />
                        </Link>
                      </div>
                      <div className="post-content">
                        <Link to={`/blog/${blog.id}`}>
                          <h4 className="post-title">{blog.title}</h4>
                        </Link>
                        <div className="meta-post">
                          <ul className="lab-ul">
                            {blog.metaList.map((meta, metaIndex) => (
                              <li key={metaIndex} className="meta-item">
                                <span
                                  className={`meta-icon ${meta.iconName}`}
                                ></span>
                                <span
                                  className="meta-text"
                                  style={{
                                    color: meta.isDate ? "#ff6b6b" : "#1e90ff",
                                  }}
                                >
                                  {meta.text}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <p className="post-desc">{blog.desc}</p>
                      </div>
                      <div className="post-footer">
                        <div className="pf-left">
                          <Link
                            to={`/blog/${blog.id}`}
                            className="lab-btn-text"
                          >
                            {blog.btnText}{" "}
                            <i className="icofont-external-link"></i>
                          </Link>
                        </div>
                        <div className="pf-right">
                          <i className="icofont-comment">
                            <span className="comment-count">
                              {blog.commentCount}
                            </span>
                          </i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
