import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const SortableItem = ({ id, text }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
    cursor: "grab",
    zIndex: transform ? 999 : "auto",
    position: transform ? "relative" : "static",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="option-card cursor-pointer bg-white rounded-2xl p-6 shadow-md"
      {...attributes}
      {...listeners}
    >
      <div className="flex items-center">
        <div className="bg-yellow-100 text-yellow-600 font-bold rounded-full circle-yel flex items-center justify-center mr-4">
        </div>
        <p className="text-lg text-width">{text}</p>
      </div>
    </div>
  );
};