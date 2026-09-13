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

  return (
    <div className="flex flex-col items-center m-1">
      <Image
        className="object-cover object-center"
        src={imageSrcList[mainImage].src}
        alt={imageSrcList[mainImage].alt}
        width={600}
        height={250}
        loading="eager"
      />

      <div className="grid grid-cols-4 gap-2 py-2">
        {imageSrcList.map((img, idx) => {
          if (idx === mainImage) {
            return null;
          }

          return (
            <button
              key={`${img.src}-${idx}`}
              type="button"
              onClick={() => setSelectedToMain(idx)}
            >
              <Image src={img.src} alt={img.alt} width={150} height={75} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
