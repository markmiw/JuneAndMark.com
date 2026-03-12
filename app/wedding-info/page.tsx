"use client";
import PageLayout from "@/components/PageLayout";
import { useLocale } from "@/components/LocaleProvider";

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
  const { tr } = useLocale();

  return (
    <PageLayout title={tr.infoTitle}>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

        <div style={card}>
          <p style={sectionTitle}>{tr.dateTime.label}</p>
          <p style={body}>{tr.dateTime.date}</p>
          <p style={body}>{tr.dateTime.time}</p>
        </div>

        <div style={card}>
          <p style={sectionTitle}>{tr.venue.label}</p>
          <p style={body}>{tr.venue.name}</p>
          <p style={body}>{tr.venue.address}</p>
        </div>

        <div style={card}>
          <p style={sectionTitle}>{tr.accommodations.label}</p>
          <p style={{ ...body, fontStyle: "italic" }}>
            {tr.accommodations.body}
          </p>
        </div>

      </div>
    </PageLayout>
  );
}
