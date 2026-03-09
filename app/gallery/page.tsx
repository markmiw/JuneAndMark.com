import Image from "next/image";
import PageLayout from "@/components/PageLayout";

export default function GalleryPage() {
  return (
    <PageLayout title="Gallery">
      <div style={{ columns: "2 180px", gap: 10 }}>
          <div key="6fa9cf33-8ddb-475f-a08c-53285b2934d3.jpg" style={{ breakInside: "avoid", marginBottom: 10, borderRadius: 8, overflow: "hidden" }}>
            <Image src="/6fa9cf33-8ddb-475f-a08c-53285b2934d3.jpg" alt="June and Mark" width={600} height={800} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <div key="IMG_0396.jpg" style={{ breakInside: "avoid", marginBottom: 10, borderRadius: 8, overflow: "hidden" }}>
            <Image src="/IMG_0396.jpg" alt="June and Mark" width={600} height={800} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <div key="IMG_2357.jpg" style={{ breakInside: "avoid", marginBottom: 10, borderRadius: 8, overflow: "hidden" }}>
            <Image src="/IMG_2357.jpg" alt="June and Mark" width={600} height={800} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <div key="IMG_3203.jpg" style={{ breakInside: "avoid", marginBottom: 10, borderRadius: 8, overflow: "hidden" }}>
            <Image src="/IMG_3203.jpg" alt="June and Mark" width={600} height={800} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <div key="IMG_3987.jpg" style={{ breakInside: "avoid", marginBottom: 10, borderRadius: 8, overflow: "hidden" }}>
            <Image src="/IMG_3987.jpg" alt="June and Mark" width={600} height={800} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <div key="IMG_4111.jpg" style={{ breakInside: "avoid", marginBottom: 10, borderRadius: 8, overflow: "hidden" }}>
            <Image src="/IMG_4111.jpg" alt="June and Mark" width={600} height={800} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <div key="IMG_4223.jpg" style={{ breakInside: "avoid", marginBottom: 10, borderRadius: 8, overflow: "hidden" }}>
            <Image src="/IMG_4223.jpg" alt="June and Mark" width={600} height={800} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <div key="IMG_4640.jpg" style={{ breakInside: "avoid", marginBottom: 10, borderRadius: 8, overflow: "hidden" }}>
            <Image src="/IMG_4640.jpg" alt="June and Mark" width={600} height={800} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <div key="IMG_4711.jpg" style={{ breakInside: "avoid", marginBottom: 10, borderRadius: 8, overflow: "hidden" }}>
            <Image src="/IMG_4711.jpg" alt="June and Mark" width={600} height={800} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <div key="IMG_6331.jpg" style={{ breakInside: "avoid", marginBottom: 10, borderRadius: 8, overflow: "hidden" }}>
            <Image src="/IMG_6331.jpg" alt="June and Mark" width={600} height={800} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <div key="IMG_6642.jpg" style={{ breakInside: "avoid", marginBottom: 10, borderRadius: 8, overflow: "hidden" }}>
            <Image src="/IMG_6642.jpg" alt="June and Mark" width={600} height={800} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <div key="IMG_6650.jpg" style={{ breakInside: "avoid", marginBottom: 10, borderRadius: 8, overflow: "hidden" }}>
            <Image src="/IMG_6650.jpg" alt="June and Mark" width={600} height={800} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <div key="IMG_9594.jpg" style={{ breakInside: "avoid", marginBottom: 10, borderRadius: 8, overflow: "hidden" }}>
            <Image src="/IMG_9594.jpg" alt="June and Mark" width={600} height={800} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
      </div>
    </PageLayout>
  );
}
