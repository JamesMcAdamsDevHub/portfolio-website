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
    <div className="flex flex-col items-center m-1">
      <Image
        className="object-cover object-center rounded-lg border-3 border-orange-700"
        src={imageSrcList[mainImage].src}
        alt={imageSrcList[mainImage].alt}
        width={600}
        height={250}
        loading="eager"
        unoptimized
      />

      {imageCount > 1 && (
        <div className="flex flex-wrap justify-center gap-2 py-2">
          {imageSrcList.map((img, idx) => {
            return (
              <button
                key={`${img.src}-${idx}`}
                type="button"
                onClick={() => setSelectedToMain(idx)}
              >
                <Image
                  className="w-20 sm:w-28 md:w-36 h-auto cursor-pointer rounded-lg border-3 border-orange-700"
                  src={img.src}
                  alt={img.alt}
                  width={150}
                  height={75}
                  loading="eager"
                  unoptimized
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
