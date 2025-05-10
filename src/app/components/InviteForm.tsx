"use client";

import { useState } from "react";

export default function InviteForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: `Dear Witch or Wizard,\nYou've been cordially invited to a magical movie night at Hogwarts!\nWill you join me for a spellbinding adventure?\n\n🎬 Movie: Harry Potter and the Sorcerer's Stone\n📅 Date: Sunday May 11, 2025\n⏰ Time: 9:00 PM\n🏰 Location: jie jie maganda Discord server`,
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setStatus("success");
      setFormData({ email: "", name: "", message: formData.message });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-bold text-[#ffe066] mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 block w-full rounded-md border border-[#ffe066] bg-[#2d295c] text-white shadow-sm focus:border-[#ffe066] focus:ring-[#ffe066] px-3 py-2"
          required
        />
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-bold text-[#ffe066] mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border border-[#ffe066] bg-[#2d295c] text-white shadow-sm focus:border-[#ffe066] focus:ring-[#ffe066] px-3 py-2"
          required
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-bold text-[#ffe066] mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          rows={6}
          className="mt-1 block w-full rounded-md border border-[#ffe066] bg-[#2d295c] text-white shadow-sm focus:border-[#ffe066] focus:ring-[#ffe066] px-3 py-2"
          required
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-[#232347] bg-[#ffe066] hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffe066] disabled:opacity-50 transition"
      >
        {status === "loading" ? "Sending..." : "Send Owl Post 🦉"}
      </button>

      {status === "success" && (
        <p className="text-green-400 text-center font-bold">
          Invitation sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-center font-bold">
          Failed to send invitation. Please try again.
        </p>
      )}
    </form>
  );
}
