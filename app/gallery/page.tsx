import Image from "next/image";
import PageLayout from "@/components/PageLayout";

// Sorted by EXIF DateTimeOriginal (when photo was actually taken), ascending
const PHOTOS = [
  "1750D0D7-8EBB-4BCE-823E-9BE238E84B7C_1_105_c.jpeg",  // 2022-11-24
  "ECD57E0F-12CC-4639-B6B9-05597AC4D31E_1_105_c.jpeg",  // 2023-04-02
  "CDBC55C6-38D5-46DE-8880-DCEF6868F847_1_105_c.jpeg",  // 2023-05-06
  "41C26848-5123-4C43-9313-56889074A542_1_105_c.jpeg",  // 2023-12-12
  "0E1C2CAB-7BC5-4F69-AEE2-58864F344012_1_105_c.jpeg",  // 2023-12-30
  "0BCB6723-3DAE-4B10-8A9F-2D3804EE430D_1_105_c.jpeg",  // 2024-07-12
  "5D4C8F2B-072C-4931-90B4-6432B61D9AAA_1_105_c.jpeg",  // 2024-07-21
  "AED1F1A1-00A9-4FA2-8827-D00D1F50AFF1_1_105_c.jpeg",  // 2024-07-28
  "24C3CF37-3F54-4C96-8539-51887D41EA8B_1_105_c.jpeg",  // 2024-07-28
  "C7DD27E3-2F83-4B20-9806-89C992915F9F_1_105_c.jpeg",  // 2024-08-01
  "87AF0BA4-E54D-4A01-AC5A-90CD01C53D48_1_105_c.jpeg",  // 2024-08-01
  "AC40FCA6-7A04-4417-B553-8ACCE8011474_1_105_c.jpeg",  // 2024-08-04
  "69CC8279-1648-4B62-A1B7-F3790095016E_1_105_c.jpeg",  // 2024-08-08
  "C7DDC297-A0F5-4B46-8487-2D7FF69117B1_1_105_c.jpeg",  // 2024-08-15
  "B841B074-5C4D-4FC0-9E33-A733ACA904E0_1_105_c.jpeg",  // 2024-08-18
  "358441B8-F561-4ED7-A0DA-E5A8EF6EEE3A_1_105_c.jpeg",  // 2024-08-20
  "76A7B609-0CAA-4B3E-96CA-7B4BE348E14A_1_105_c.jpeg",  // 2024-08-20
  "C6CD515A-8508-4C8B-B318-598CD11C3C64_1_105_c.jpeg",  // 2024-08-24
  "A05A02A7-1C77-4B30-91C0-894518412322_1_105_c.jpeg",  // 2024-09-03
  "B65DD0B7-8474-4C18-AB0C-3BDEDF194F1A_1_105_c.jpeg",  // 2024-09-04
  "B0C10D54-CAC2-42D0-AC1A-719F7F9A7206_1_105_c.jpeg",  // 2024-09-08
  "EE692CAB-8310-4571-AF2C-14B123B1B08A_1_105_c.jpeg",  // 2024-09-23
  "0E4E5805-05CD-4BDA-AE06-5D3C96B6B666_1_105_c.jpeg",  // 2024-09-27
  "BB3495E9-E785-42D0-B968-5134D2C758C1_1_102_a.jpeg",  // 2024-10-04
  "C374F179-0CDB-4687-9701-C54BAE7EBCE6_1_105_c.jpeg",  // 2024-10-04
  "DEC781DF-608E-4E29-9A31-C8499B2EC8F8_1_105_c.jpeg",  // 2024-10-07
  "8206321B-4E99-44FB-9BF8-01E408EC91B7_1_105_c.jpeg",  // 2024-10-09
  "345B8ACF-AA60-4100-948D-D4F3E26CBBE9_1_105_c.jpeg",  // 2024-10-09
  "867D8C8C-7470-4051-AD39-6EF52CC76F47_1_105_c.jpeg",  // 2024-10-10
  "194370B5-AF13-475F-B304-3F413EE770FE_1_105_c.jpeg",  // no EXIF date
];

export default function GalleryPage() {
  return (
    <PageLayout title="Gallery">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {PHOTOS.map((src) => (
          <div key={src} style={{ borderRadius: 8, overflow: "hidden" }}>
            <Image src={`/${src}`} alt="June and Mark" width={600} height={800} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
