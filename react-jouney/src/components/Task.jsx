import { useState } from "react";

export default function Task({ tasks }) {
  const [edits, setEditing] = useState(false);

  let content;

  if (edits) {
    content = (
      <>
        <input type="Text" className="border border-gray-400" />
        <button
          className="border border-green-400 px-2 rounded-sm"
          onClick={() => setEditing(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    content = (
      <>
        <input type="Text" className="border border-gray-400" />
        <button
          className="border border-green-400 px-2 rounded-sm"
          onClick={() => setEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <ul>
      <input type="checkbox" className="border border-gray-400 text-xl" />
      {/* <input type="Text" className="border border-gray-400"/> */}
      {content}
      <button className="border border-red-400 px-2 rounded-sm">Delete</button>
    </ul>
  );
}
