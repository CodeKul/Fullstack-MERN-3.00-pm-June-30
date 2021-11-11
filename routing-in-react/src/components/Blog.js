import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import BlogContent from "./BlogContent";
function Blog({ topics }) {
  const { url, path } = useRouteMatch();
  //console.log(result);
  return (
    <div>
      {topics.map((topic, id) => (
        <li key={id}>
          <Link to={`${url}/${topic.id}`}>{topic.topicName}</Link>
        </li>
      ))}
      <Route path={`${path}/:topicId`}>
        <BlogContent topics={topics} />
      </Route>
    </div>
  );
}

export default Blog;
