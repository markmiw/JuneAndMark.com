import PageLayout from "@/components/PageLayout";

export default function GalleryPage() {
  return (
    <PageLayout title="Gallery">
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        gap: 12,
      }}>
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            style={{
              aspectRatio: "1",
              background: "rgba(255,255,255,0.1)",
              border: "1px dashed rgba(255,255,255,0.3)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(255,255,255,0.4)",
              fontSize: 13,
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
            }}
          >
            photo
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
