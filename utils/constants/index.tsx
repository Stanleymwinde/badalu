import { BsTelephoneFill } from "react-icons/bs";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { CONTACT_EMAIL, PHONE_NUMBER } from "@/config";
import { IoMdMail } from "react-icons/io";
import { link } from "fs";
import { RiTwitterXFill } from "react-icons/ri";

export const marginX = { base: "2.5%", sm: "5%", md: "10%" };

export const navItems = [
  {
    id: 1,
    text: "Home",
    link: "/home",
  },
  {
    id: 2,
    text: "About Us",
    link: "/about-us",
  },
  {
    id: 3,
    text: "Services",
    link: "/services",
    children: [
      {
        id: 1,
        label: "Badalu Home Care",
        subLabel: "Badalu Home Care",
        link: "/b-h-care",
      },
      {
        id: 2,
        label: "Badalu School",
        subLabel: "Badalu School",
        link: "/b-school",
      },
    ],
  },

  {
    id: 4,
    text: "Contact",
    link: "/contact",
  },
];

export const contactInfo = [
  {
    id: 1,
    text: PHONE_NUMBER,
    link: `tel:${PHONE_NUMBER}`,
    icon: BsTelephoneFill,
  },
  {
    id: 2,
    text: CONTACT_EMAIL,
    link: `mailto:${CONTACT_EMAIL}`,
    icon: IoMdMail,
  },
];
export const socialData = [
  {
    id: 1,
    icon: FaFacebook,
    text: "Facebook",
  },
  {
    id: 2,
    icon: FaInstagram,
    text: "Instagram",
  },
];

export const brandsData = [
  {
    id: 1,
    image: "/brands/bdl_logo.png",
    label: "Badalu",
    link: "#",
  },
];

export const FooterSocialData = [
  {
    id: 1,
    icon: FaFacebookF,
    text: "Facebook",
  },
  {
    id: 2,
    icon: RiTwitterXFill,
    text: "Twitter",
  },
  {
    id: 3,
    icon: FaLinkedinIn,
    text: "LinkedIn",
  },
  {
    id: 4,
    icon: FaInstagram,
    text: "Instagram",
  },
];

export const serviceData = [
  {
    imageUrl: "https://randomfox.ca/images/42.jpg",
    heading: "Badalu Home Care School",
    excerpt:
      "Written by Audrey Masitsa Emma was arrested and charged with hawking without a license. The married mother of two headed into town hoping to sell a few of her wares to provide for her family. Little did she know that this day wouldn’t turn out as she had hoped. Caught...",
  },
  {
    imageUrl: "https://randomfox.ca/images/45.jpg",
    heading: "Badalu Workers Agency",
    excerpt:
      "Written by Audrey Masitsa Betty Khaguhia is a businesswoman and formerly imprisoned woman, a title she embraced upon completing the Ufunuo Program on the Outside earlier this year.  “I will now wear the title of formerly imprisoned women with pride because I’m no...",
  },
];
