import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Appbar = () => {
  const [count, settitle] = useState(0);
  const [tags, settags] = useState(["tag1", "tag2", "tag3"]);

  let classes = getBadgeClasses(count);

  function renderTags() {
    if (tags === 0) {
      return <p>There are no tags at the moment!</p>;
    } else {
      <ul>
        {tags.map((tag) => (
          <li key={tag}>tag</li>
        ))}
      </ul>;
    }
  }

  return (
    <div>
      <center>
        <span style={{ fontSize: 30 }} className={classes}>
          {count == 0 ? "Zero" : count}
        </span>
        <br />
        <button className="btn btn-primary btn-sm mt-4">Increment</button>
        <br />
        <br />
      </center>
      {renderTags()}
    </div>
  );
};

export default Appbar;
function getBadgeClasses(count) {
  let classes = "mt-4 badge m-4 p-4 ";
  classes += count === 0 ? "badge-warning" : "badge-primary";
  return classes;
}
