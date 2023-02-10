import React from 'react';
import Article from '../../components/Article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './Blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future, whether AI can help humanity move to a higher level of civilization. Let us explore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Oc 20, 2022" text="Can AI replace programmers in the future ?" />
        <Article imgUrl={blog03} date="May 11, 2021" text="when does openai launch the official chatGPT and is there a fee ?" />
        <Article imgUrl={blog04} date="Jan 19, 2022" text="Is AI the future of humanity, can it completely replace humans ?" />
        <Article imgUrl={blog05} date="Apr 09, 2021" text="Will Google be able to compete with chatGPT in the future ?" />
      </div>
    </div>
  </div>
);

export default Blog;
