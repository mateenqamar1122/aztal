import { useState } from "react";
import { ArrowDownRight } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/base/buttons/button";

const services = ["Branding", "Website", "Marketing", "Everything"];

export function LeadForm() {
  const [service, setService] = useState<string>("Branding");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setLoading(true);

    const { error } = await supabase.from("leads").insert({
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      company: String(data.get("company") ?? "").trim() || null,
      service,
      message: String(data.get("message") ?? "").trim() || null,
    });

    setLoading(false);

    if (error) {
      toast.error("That didn't go through. Please try again.");
      return;
    }

    toast.success("Thanks — we'll get back to you within 24 hours.");
    form.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-surface/70 p-6 backdrop-blur sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
            Name*
          </span>
          <input
            required
            name="name"
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            placeholder="Jane Doe"
          />
        </label>
        <label className="block">
          <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
            Email*
          </span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            placeholder="jane@company.com"
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
          Company
        </span>
        <input
          name="company"
          autoComplete="organization"
          className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
          placeholder="Doe & Co."
        />
      </label>

      <fieldset className="mt-6">
        <legend className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
          What do you need?
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {services.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setService(item)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition-colors ${
                service === item
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/60"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="mt-6 block">
        <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
          Project
        </span>
        <textarea
          name="message"
          rows={4}
          className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
          placeholder="Briefly: goal, timeline, budget."
        />
      </label>

      <Button
        type="submit"
        size="xl"
        isLoading={loading}
        showTextWhileLoading
        iconTrailing={ArrowDownRight}
        className="mt-6 w-full rounded-full"
      >
        {loading ? "Sending…" : "Book a free intro call"}
      </Button>
      <p className="mt-3 text-center text-[0.7rem] text-muted-foreground">
        No obligation. Reply within 24 hours. GDPR compliant.
      </p>
    </form>
  );
}
