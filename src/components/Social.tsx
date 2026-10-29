import Image from "next/image";

type Platform = {
  platform: "github" | "instagram" | "linkedin";
};

export default function Social({ platform }: Platform) {
  let imagePath: string;
  let imageAlt: string;
  let link: string;

  if (platform === "github") {
    imagePath = "/images/socials/github.webp";
    imageAlt = "GitHub";
    link = "https://github.com/jamesMcAdamsDevHub";
  } else if (platform === "instagram") {
    imagePath = "/images/socials/instagram.png";
    imageAlt = "Instagram";
    link = "https://www.instagram.com/jimmycodesgames/";
  } else {
    imagePath = "/images/socials/linkedin.webp";
    imageAlt = "LinkedIn";
    link = "https://www.linkedin.com/in/james-mcadams-dev/";
  }

  return (
    <a
      href={link}
      className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-500 bg-[#090d10] hover:border-orange-400"
      aria-label={`James McAdams on ${imageAlt}`}
    >
      <Image
        className={`h-7 w-7 ${platform === "github" ? "invert" : ""}`}
        src={imagePath}
        alt=""
        width={36}
        height={36}
      />
    </a>
  );
}
