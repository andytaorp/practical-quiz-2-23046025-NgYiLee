import React from "react";

/**
 * Habit component that displays a habit, allows the user to toggle
 * the habit's completed state, and delete the habit.
 *
 * TODO: implement the Habit component here
 */
export default function Habit({habit, onToggleHabit, onDeleteHabit}) {
    return (
        <li>
            <span
                style={{
                    textDecoration: habit.completed ? "line-through" : "none",
                }}
            >
                {habit.name}
            </span>
            <button onClick = {() => onToggleHabit(habit.id)}>
                {habit.completed ? "undo" : "Complete"}
            </button>
            <button onClick={() => onDeleteHabit(habit.id)}>Delete</button>
        </li>
    );
}
