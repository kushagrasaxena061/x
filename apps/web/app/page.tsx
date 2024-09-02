"use client"
// pages/index.tsx
import React, { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  // Fetch users when component mounts

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

  };

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">Add User</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          className="border p-2 mr-2"
        />
        <button type="submit" className=" text-black px-4 py-2 rounded">
          Submit Web
        </button>
      </form>
    </div>
  );
}
