"use client"
import { Button } from "../components/ui/button";
// pages/index.tsx
import React, { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  createdAt: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  // Fetch users when component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch("/api");
    const data = await response.json();
    setUsers(data);
  }

  return (
    <div className="container mx-auto py-4">
      <h2 className="text-xl font-bold mb-2">Users List:</h2>
      <Button variant="destructive">SHAD 3</Button>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="border-b p-2">
            {user.name} (Created at: {new Date(user.createdAt).toLocaleString()})
          </li>
        ))}
      </ul>
    </div>
  );
}
