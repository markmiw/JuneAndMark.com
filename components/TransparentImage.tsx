"use client";
import { useEffect, useState } from "react";

interface Props {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  /** 0-255: how close to pure white counts as background (default 25) */
  threshold?: number;
}

/**
 * Shows the original image immediately, then swaps to a processed version
 * where the white background is removed via a canvas flood-fill.
 * Using <img> (not <canvas>) so that width:100% / height:auto work reliably.
 */
export default function TransparentImage({ src, alt, style, threshold = 25 }: Props) {
  const [displaySrc, setDisplaySrc] = useState(src);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        floodFill(imageData.data, canvas.width, canvas.height, threshold);
        ctx.putImageData(imageData, 0, 0);
        setDisplaySrc(canvas.toDataURL("image/png"));
      } catch {
        // CORS or other issue — keep showing original
      }
    };
    img.src = src;
  }, [src, threshold]);

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={displaySrc}
      alt={alt}
      style={{ width: "100%", height: "auto", display: "block", ...style }}
    />
  );
}

/**
 * BFS flood-fill from all four edges.
 * Only removes white pixels that are connected to the image border —
 * interior whites (bride's dress, etc.) are left untouched.
 */
function floodFill(data: Uint8ClampedArray, w: number, h: number, threshold: number) {
  const min = 255 - threshold;
  const isWhite = (i: number) => data[i] >= min && data[i + 1] >= min && data[i + 2] >= min;
  const visited = new Uint8Array(w * h);
  const stack: number[] = [];

  for (let x = 0; x < w; x++) {
    const top = x, bot = (h - 1) * w + x;
    if (isWhite(top * 4)) stack.push(top);
    if (isWhite(bot  * 4)) stack.push(bot);
  }
  for (let y = 1; y < h - 1; y++) {
    const left = y * w, right = y * w + w - 1;
    if (isWhite(left  * 4)) stack.push(left);
    if (isWhite(right * 4)) stack.push(right);
  }

  while (stack.length) {
    const idx = stack.pop()!;
    if (idx < 0 || idx >= w * h || visited[idx] || !isWhite(idx * 4)) continue;
    visited[idx] = 1;
    data[idx * 4 + 3] = 0;
    const x = idx % w, y = Math.floor(idx / w);
    if (x > 0)     stack.push(idx - 1);
    if (x < w - 1) stack.push(idx + 1);
    if (y > 0)     stack.push(idx - w);
    if (y < h - 1) stack.push(idx + w);
  }
}
