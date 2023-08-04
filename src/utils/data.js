import { MdOutlinePets } from "react-icons/md";
import { MdOutlineWater } from "react-icons/md";
import {MdOutlineVolunteerActivism} from "react-icons/md";



export const projectExperience = [
  {
    // animals
    name: "Animal Volunteering Service",
    projects: 369,
  
    icon: MdOutlinePets,
    bg: "#7818e2",
  
  },
  {
    // community
    name: "Community Volunteering Service",
    projects: 555,
    icon: MdOutlineVolunteerActivism,
    bg: "#288113",
  
  },
  {
    // Earth and water
    name: "Earth, Water, Ocean, Lakes, Rivers, Volunteering Service",
    projects: 333,
    icon: MdOutlineWater,
    bg: "#1864e2",
  },
];

export const HowDoIHelp = [
  // "We will help you make time to help you volunteer for humanity" 
];

export const workExp = [
  {
    place: "",
    // tenure: "Aug 2014 - Sep 2016",
    role: "Volunteer",
    detail:
      "Giving back to our world is such a huge accomplishment",
  },
  {
    place: "",
    tenure: "",
    role: "",
    detail:
      "",
  },
  {
    place: "",
    tenure: "",
    role: "",
    detail:"",
  },
];

export const comments = [
  {
    name: "Jenny Lee",
    post: "Creative Manager",
    comment:
      "It felt really good to give back. I'm looking forward to my next experience. Thanks Volunteer.co!",
    img: "https://res.cloudinary.com/ninjagrvl/image/upload/v1691126090/people1_omm2kn.jpg",
  },
  {
    name: "Sir Games",
    post: "Artist",
    comment:
      "I'm astonished how great it felt to volunteer. It was actually therapeudic. Thank you Volunteer.co for a safe place to give back! I am in full gratitude for this experience",
    img: "https://res.cloudinary.com/ninjagrvl/image/upload/v1691126094/people2_oe7bv5.jpg",
  },
  {
    name: "Kyani G",
    post: "Founder",
    comment:
      "I'm so happy to contribute my art work, painting a mural in my community. Thanks Volunteer.co I'll be back! ",
    img: "https://res.cloudinary.com/ninjagrvl/image/upload/v1691126099/people3_mxszvj.jpg",
  },
  {
    name: "Ricky Picacio",
    post: "Founder",
    comment:
      "Helping our mother earth was very fullfilling. What a wonderful experience to help. Thanks Volunteer.co! ",
    img: "https://res.cloudinary.com/ninjagrvl/image/upload/v1691126100/people4_ovz0r3.jpg",
  },
  
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
