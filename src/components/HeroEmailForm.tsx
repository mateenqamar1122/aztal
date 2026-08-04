import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const emailSchema = z.string().trim().email({ message: "Please enter a valid email address" }).max(255);

export function HeroEmailForm({ className = "" }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid email");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      name: "Hero signup",
      email: parsed.data,
      message: "Requested early access from hero form",
    });
    setLoading(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    setEmail("");
    toast.success("Thanks! We'll be in touch shortly.");
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`flex w-full max-w-md items-center gap-2 rounded-full border border-border bg-background/80 p-1.5 pl-5 shadow-[0_10px_40px_-12px_color-mix(in_oklab,var(--foreground)_35%,transparent)] backdrop-blur ${className}`}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Work Email Address"
        maxLength={255}
        aria-label="Work email address"
        className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
      />
      <button
        type="submit"
        disabled={loading}
        className="shrink-0 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {loading ? "Sending…" : "Get early access"}
      </button>
    </form>
  );
}
