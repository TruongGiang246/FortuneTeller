import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const SortableItem = ({ id, text }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "10px",
    margin: "10px 0",
    background: "black",
    borderRadius: "5px",
    cursor: "grab",
    border: "2px solid white"
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {text}
    </div>
  );
};
