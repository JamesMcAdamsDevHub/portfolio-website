import Image from "next/image";

type Platform = {
  platform: "github" | "instagram" | "linkedin";
};

export default function Social({ platform }: Platform) {
  let imagePath: string;
  let imageAlt: string;
  let link: string;

  if (platform === "github") {
    imagePath = "/images/socials/github.png";
    imageAlt = "GitHub";
    link = "https://github.com/jamesMcAdamsDevHub";
  } else if (platform === "instagram") {
    imagePath = "/images/socials/instagram.png";
    imageAlt = "Instagram";
    link = "https://www.instagram.com/jimmycodesgames/";
  } else {
    imagePath = "/images/socials/linkedin.png";
    imageAlt = "LinkedIn";
    link = "https://www.linkedin.com/in/james-mcadams-dev/";
  }

  return (
    <a href={link}>
      <Image src={imagePath} alt={imageAlt} width={48} height={48} />
    </a>
  );
}
