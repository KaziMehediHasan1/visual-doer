"use client";
import { useState, KeyboardEvent } from "react";

type TagInputProps = {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
};

const TagInput = ({ tags, setTags }: TagInputProps) => {
  const [input, setInput] = useState("");
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === ",") && input.trim()) {
      e.preventDefault();
      const trimmed = input.trim();
      if (!tags.includes(trimmed)) {
        setTags([...tags, trimmed]);
      }
      setInput("");
    } else if (e.key === "Backspace" && !input && tags.length > 0) {
      setTags(tags.slice(0, -1));
    }
  };

  const removeTag = (i: number) => {
    setTags(tags.filter((_, index) => index !== i));
  };

  return (
    <div
      className={`w-full  text-white ${
        tags.length > 0 &&
        "border-gray-300 border-[2px] rounded-sm p-[0.3vmax] space-y-2"
      }`}
    >
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-primary-600 text-white px-2 py-1 rounded flex items-center gap-1"
          >
            {tag}
            <button type="button" onClick={() => removeTag(i)}>
              ✕
            </button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
        placeholder="Enter blog related keyword"
      />
    </div>
  );
};

export default TagInput;
