import Image from "next/image";
import { readdirSync, statSync } from "fs";
import { join } from "path";
import PageLayout from "@/components/PageLayout";

export default function GalleryPage() {
  const dir = join(process.cwd(), "public");
  const photos = readdirSync(dir)
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .map((f) => ({ f, birthtime: statSync(join(dir, f)).birthtime }))
    .sort((a, b) => a.birthtime.getTime() - b.birthtime.getTime())
    .map(({ f }) => f);

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
