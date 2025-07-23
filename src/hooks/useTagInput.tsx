import { useState } from "react";
const useTagInput = () => {
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState("");

  const addTag = () => {
    const newTag = input.trim();
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
    }
    setInput("");
  };

  const removeTag = (index:number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e:HTMLFormElement) => {
    if ((e.key === "Enter" || e.key === ",") && input.trim() !== "") {
      e.preventDefault();
      addTag();
    }

    if (e.key === "Backspace" && input === "" && tags.length > 0) {
      removeTag(tags.length - 1);
    }
  };

  return {
    tags,
    input,
    setInput,
    handleKeyDown,
    addTag,
    removeTag,
  };
};

export default useTagInput;
