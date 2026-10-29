"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryImage = {
  type: string;
  src: string;
  alt: string;
  poster?: string;
  description?: string;
};

type ImageGalleryProps = {
  imageSrcList: GalleryImage[];
};

export default function ImageGallery({ imageSrcList }: ImageGalleryProps) {
  const [mainImage, setSelectedToMain] = useState(0);
  const imageCount = imageSrcList.length;

  if (imageCount === 0) {
    return null;
  }

  return (
    <div className="w-full min-w-0 max-w-lg justify-self-center">
      {imageSrcList[mainImage].type === "video" ? (
        <video
          key={imageSrcList[mainImage].src}
          className="aspect-video h-auto max-h-128 w-full rounded-md border border-slate-700 bg-[#090d10] object-contain"
          src={imageSrcList[mainImage].src}
          poster={imageSrcList[mainImage].poster}
          aria-label={imageSrcList[mainImage].alt}
          controls
          playsInline
          preload="metadata"
        />
      ) : (
        <Image
          className="aspect-video h-auto max-h-128 w-full rounded-md border border-slate-700 bg-[#090d10] object-contain"
          src={imageSrcList[mainImage].src}
          alt={imageSrcList[mainImage].alt}
          width={600}
          height={400}
          loading="eager"
          unoptimized
        />
      )}
      {imageSrcList[mainImage].type === "video" &&
        imageSrcList[mainImage].description && (
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            <span className="font-semibold text-slate-100">
              Video description:{" "}
            </span>
            {imageSrcList[mainImage].description}
          </p>
        )}
      {imageCount > 1 && (
        <>
          <div
            className="mt-3 flex flex-wrap gap-3"
            role="group"
            aria-label="Choose project media"
          >
            {imageSrcList.map((img, idx) => (
              <button
                key={`${img.src}-${idx}`}
                type="button"
                onClick={() => setSelectedToMain(idx)}
                className={`cursor-pointer rounded-sm border-2 p-1 hover:bg-slate-800 motion-safe:transition-colors motion-safe:duration-150 ${mainImage === idx ? "border-orange-400 bg-slate-800" : "border-slate-500 bg-[#10171b]"}`}
                aria-label={`Show ${img.alt}`}
                aria-pressed={mainImage === idx}
              >
                <Image
                  className="h-14 w-22 rounded object-contain"
                  src={img.poster ? img.poster : img.src}
                  alt=""
                  width={150}
                  height={75}
                  sizes="88px"
                />
              </button>
            ))}
          </div>
          <p
            className="mt-2 text-sm text-slate-300"
            aria-live="polite"
            aria-atomic="true"
          >
            {mainImage + 1} of {imageCount}: {imageSrcList[mainImage].alt}
          </p>
        </>
      )}
    </div>
  );
}
