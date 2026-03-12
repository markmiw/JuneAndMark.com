"use client";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { useLocale } from "@/components/LocaleProvider";

// ── Paste your Apps Script deployment URL here after setup ──────────
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbySL_lqsl1wmvykjJ_okamW2bjRcnMnfn4Bw-4HVL4HagOQNqJSafz-dMVHHHKKbLJ6/exec";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  borderRadius: 8,
  border: "1px solid #ccc",
  background: "#fff",
  color: "#1a1a1a",
  fontSize: 16,
  fontFamily: "Georgia, serif",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.85)",
  fontSize: 14,
  fontFamily: "Georgia, serif",
  letterSpacing: "0.05em",
  marginBottom: 6,
  display: "block",
};

export default function RsvpPage() {
  const { tr } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName,  setLastName]  = useState("");
  const [email,     setEmail]     = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | "">("");
  const [guests,    setGuests]    = useState("1");
  const [dietary,   setDietary]   = useState("");
  const [message,   setMessage]   = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          attending,
          guests: attending === "yes" ? guests : "0",
          dietary,
          message,
          submittedAt: new Date().toLocaleString(),
        }),
      });
      setSubmitted(true);
    } catch {
      setError(tr.rsvp.error);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <PageLayout title={tr.rsvpTitle}>
        <div style={{ textAlign: "center", color: "#1a1a1a", fontFamily: "Georgia, serif", marginTop: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
          <p style={{ fontSize: 22, fontStyle: "italic", marginBottom: 8 }}>
            {attending === "yes" ? tr.rsvp.successYes : tr.rsvp.successNo}
          </p>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)" }}>
            {tr.rsvp.successSub}
          </p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={tr.rsvpTitle}>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>

        {/* Name */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div>
            <label style={labelStyle}>{tr.rsvp.firstName}</label>
            <input
              style={inputStyle}
              placeholder="June"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label style={labelStyle}>{tr.rsvp.lastName}</label>
            <input
              style={inputStyle}
              placeholder="Kim-Miw"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label style={labelStyle}>{tr.rsvp.email}</label>
          <input
            style={inputStyle}
            type="email"
            placeholder="you@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Attending */}
        <div>
          <label style={labelStyle}>{tr.rsvp.attending}</label>
          <div style={{ display: "flex", gap: 12 }}>
            {(["yes", "no"] as const).map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => setAttending(val)}
                style={{
                  flex: 1,
                  padding: "10px 0",
                  borderRadius: 8,
                  background: attending === val ? "#1a1a1a" : "#fff",
                  color: attending === val ? "#fff" : "#1a1a1a",
                  border: "1px solid #ccc",
                  fontSize: 15,
                  fontFamily: "Georgia, serif",
                  cursor: "pointer",
                  transition: "background 0.2s, color 0.2s",
                }}
              >
                {val === "yes" ? tr.rsvp.yes : tr.rsvp.no}
              </button>
            ))}
          </div>
        </div>

        {/* Guest count */}
        {attending === "yes" && (
          <div>
            <label style={labelStyle}>{tr.rsvp.guestCount}</label>
            <select
              style={{ ...inputStyle, cursor: "pointer" }}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n} style={{ background: "#fff" }}>{n}</option>
              ))}
            </select>
          </div>
        )}

        {/* Dietary */}
        <div>
          <label style={labelStyle}>{tr.rsvp.dietary}</label>
          <input
            style={inputStyle}
            placeholder={tr.rsvp.dietaryPlaceholder}
            value={dietary}
            onChange={(e) => setDietary(e.target.value)}
          />
        </div>

        {/* Message */}
        <div>
          <label style={labelStyle}>{tr.rsvp.message}</label>
          <textarea
            style={{ ...inputStyle, minHeight: 90, resize: "vertical" }}
            placeholder={tr.rsvp.messagePlaceholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {/* Error */}
        {error && (
          <p style={{ color: "#ffaaaa", fontFamily: "Georgia, serif", fontSize: 14, textAlign: "center" }}>
            {error}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={!attending || loading}
          style={{
            padding: "14px 0",
            borderRadius: 10,
            border: "none",
            background: attending && !loading ? "#1a1a1a" : "#aaa",
            color: "#fff",
            fontSize: 17,
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            cursor: attending && !loading ? "pointer" : "not-allowed",
            fontWeight: "bold",
            transition: "background 0.2s",
          }}
        >
          {loading ? tr.rsvp.sending : tr.rsvp.send}
        </button>

      </form>
    </PageLayout>
  );
}
