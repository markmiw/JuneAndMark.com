import Image from "next/image";
import { readdirSync } from "fs";
import { join } from "path";
import PageLayout from "@/components/PageLayout";

export default function GalleryPage() {
  const photos = readdirSync(join(process.cwd(), "public"))
    .filter((f) => /.(jpg|jpeg|png|webp)$/i.test(f));

  return (
    <PageLayout title="Gallery">
      <div style={{ columns: "2 180px", gap: 10 }}>
        {photos.map((src) => (
          <div key={src} style={{ breakInside: "avoid", marginBottom: 10, borderRadius: 8, overflow: "hidden" }}>
            <Image src={`/${src}`} alt="June and Mark" width={600} height={800} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
