import PageLayout from "@/components/PageLayout";

const sectionTitle: React.CSSProperties = {
  color: "white",
  fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
  fontFamily: "Georgia, serif",
  fontStyle: "italic",
  letterSpacing: "0.08em",
  marginBottom: 10,
  borderBottom: "1px solid rgba(255,255,255,0.25)",
  paddingBottom: 6,
};

const body: React.CSSProperties = {
  color: "rgba(255,255,255,0.85)",
  fontFamily: "Georgia, serif",
  fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
  lineHeight: 1.7,
};

const card: React.CSSProperties = {
  background: "rgba(255,255,255,0.1)",
  border: "1px solid rgba(255,255,255,0.2)",
  borderRadius: 12,
  padding: "20px 24px",
  backdropFilter: "blur(6px)",
  display: "flex",
  flexDirection: "column",
  gap: 6,
};

export default function WeddingInfoPage() {
  return (
    <PageLayout title="Wedding Info">
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

        <div style={card}>
          <p style={sectionTitle}>Date &amp; Time</p>
          <p style={body}>Saturday, September 26th, 2026</p>
          <p style={body}>Ceremony begins at 4:00 PM &middot; Ends at 9:00 PM</p>
        </div>

        <div style={card}>
          <p style={sectionTitle}>Venue</p>
          <p style={body}>The Plant Place</p>
          <p style={body}>41-821 Waikupanaha St, Waimanalo, HI 96795</p>
        </div>

        <div style={card}>
          <p style={sectionTitle}>After Party</p>
          <p style={{ ...body, color: "rgba(255,255,255,0.55)", fontStyle: "italic" }}>
            Details coming soon &mdash; stay tuned!
          </p>
        </div>

      </div>
    </PageLayout>
  );
}
