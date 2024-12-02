import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();
    if (habitName.trim()) {
      onAddHabit(habitName);
      setHabitName("");
    }
  };

  const handleChange = (e) => {
    setHabitName(e.target.value);
  }

  return (
    //TODO: add a form to add a new habit
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={habitName}
        onChange={handleChange}
        placeholder="Enter new habit"
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}
