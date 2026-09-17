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

  if (imageSrcList.length === 0) {
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

      {imageSrcList.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2 py-2">
          {imageSrcList.map((img, idx) => {
            return (
              <button
                key={`${img.src}-${idx}`}
                type="button"
                onClick={() => setSelectedToMain(idx)}
              >
                <Image
                  className="cursor-pointer rounded-lg border-3 border-orange-700"
                  src={img.src}
                  alt={img.alt}
                  width={150}
                  height={75}
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
