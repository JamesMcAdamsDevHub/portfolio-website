"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
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
    <div className="m-1 flex flex-col items-center">
      <Image
        className="rounded-lg border-3 border-orange-700 object-cover object-center"
        src={imageSrcList[mainImage].src}
        alt={imageSrcList[mainImage].alt}
        width={600}
        height={250}
        loading="eager"
        unoptimized
      />

      {imageCount > 1 && (
        <div className="mt-2 flex w-full flex-wrap justify-center gap-2">
          {imageSrcList.map((img, idx) => (
            <button
              key={`${img.src}-${idx}`}
              type="button"
              onClick={() => setSelectedToMain(idx)}
              className={`cursor-pointer rounded transition ${
                mainImage === idx
                  ? "border-2 border-orange-700 opacity-100"
                  : "border-2 border-transparent opacity-75 hover:opacity-100"
              }`}
              aria-label={`Show ${img.alt}`}
              aria-pressed={mainImage === idx}
            >
              <Image
                className="h-16 w-28 rounded object-cover"
                src={img.src}
                alt={img.alt}
                width={150}
                height={75}
                loading="eager"
                unoptimized
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
