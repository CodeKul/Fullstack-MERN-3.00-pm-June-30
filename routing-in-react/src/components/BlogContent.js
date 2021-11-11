import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";

function BlogContent({ topics }) {
  const result = useRouteMatch();
  console.log(result);
  const { topicId } = useParams();
  console.log(topicId);

  const topicContent = topics.find((t) => t.id === Number(topicId));
  console.log(topicContent);
  return (
    <div
      style={{
        width: "400px",
        borderLeft: "4px solid navy",
        margin: "50px",
        backgroundColor: "lightblue",
        padding: "8px",
        borderRadius: "5px",
      }}
    >
      <h2>{topicContent.topicName}</h2>
      <p>{topicContent.description}</p>
      {topicContent.content.map((item, id) => (
        <div>
          <h5>{item.title}</h5>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogContent;
