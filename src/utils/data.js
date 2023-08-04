import { MdOutlinePets } from "react-icons/md";
import { MdOutlineWater } from "react-icons/md";
import {MdOutlineVolunteerActivism} from "react-icons/md";
// import {img} from "../assets/img";


export const projectExperience = [
  {
    // animals
    name: "Animal Volunteering",
    projects: 6,
  
    icon: MdOutlinePets,
    bg: "#7818e2",
  },
  {
    // community
    name: "Community Volunteering",
    projects: 5,
    icon: MdOutlineVolunteerActivism,
    bg: "#288113",
  },
  {
    // Green
    name: "Earth, Water, Ocean, Lakes, Rivers, Volunteering",
    projects: 5,
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
    img: "/assets/people1.png",
  },
  {
    name: "Sir Games",
    post: "Ceo",
    comment:
      "I'm astonished how great it felt to give back. It doesn't compare to putting work in my office. It actually felt like therapy! Thank you Volunteer.co for a safe place to give back!",
    img: "/assets/people2.png",
  },
  {
    name: "Kyani G",
    post: "Artist",
    comment:
      "I'm so happy to contribute my art work, painting a mural in my community. Thanks Volunteer.co I'll be back! ",
    img: "/assets/people3.png",
  },
  {
    name: "Ricky Picacio",
    post: "Founder",
    comment:
      "Helping our mother earth was very fullfilling. What a wonderful experience to help. Thanks Volunteer.co! ",
    img: "./assets/people4.png",
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
