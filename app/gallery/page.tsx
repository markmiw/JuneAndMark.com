import Image from "next/image";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import PageLayout from "@/components/PageLayout";

function readExifDate(buf: Buffer): string | null {
  for (let i = 0; i < buf.length - 4; i++) {
    if (buf[i] !== 0xFF || buf[i + 1] !== 0xE1) continue;
    if (!buf.slice(i + 4, i + 10).toString("ascii").startsWith("Exif")) continue;
    const base = i + 10;
    const le = buf.slice(base, base + 2).toString("ascii") === "II";
    const r2 = (o: number) => le ? buf.readUInt16LE(base + o) : buf.readUInt16BE(base + o);
    const r4 = (o: number) => le ? buf.readUInt32LE(base + o) : buf.readUInt32BE(base + o);
    const ifd0 = r4(4);
    const n = r2(ifd0);
    // Check IFD0 for SubExif pointer and DateTime
    let subIfdOffset: number | null = null;
    for (let j = 0; j < n; j++) {
      const e = ifd0 + 2 + j * 12;
      const tag = r2(e);
      if (tag === 0x8769) subIfdOffset = r4(e + 8);
      if (tag === 0x0132) return buf.slice(base + r4(e + 8), base + r4(e + 8) + 19).toString("ascii");
    }
    if (subIfdOffset !== null) {
      const ns = r2(subIfdOffset);
      for (let k = 0; k < ns; k++) {
        const e = subIfdOffset + 2 + k * 12;
        if (r2(e) === 0x9003) return buf.slice(base + r4(e + 8), base + r4(e + 8) + 19).toString("ascii");
      }
    }
  }
  return null;
}

export default function GalleryPage() {
  const dir = join(process.cwd(), "public");
  const photos = readdirSync(dir)
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .map((f) => {
      const buf = readFileSync(join(dir, f));
      return { f, date: readExifDate(buf) };
    })
    .sort((a, b) => {
      if (!a.date && !b.date) return 0;
      if (!a.date) return 1;
      if (!b.date) return -1;
      return a.date.localeCompare(b.date);
    })
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
