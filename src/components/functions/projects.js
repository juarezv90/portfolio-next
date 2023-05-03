export const projects = {
  mox: {
    title: "Crammed Mox",
    primary_lang: "Next JS",
    languages: [
      "Javascript",,
      "Next JS",
      "Tailwind CSS",
      "Scryfall API"
    ],
    demo: "https://mtgnext.vercel.app/",
    code: "https://github.com/juarezv90/CrammedMox.git",
    objective:() => {return <>This project is a personal project still in the works. It is an application that I developed to help with deck creation for a card game called Magic the Gathering. It utilizes the scryfall database to collect card data. There are multiple functions for requesting card data and calculations of deck power. Application was developed using Next.Js and CSS is being rendered using Tailwind CSS.</>},
    image: "/assets/projects/crommedmox.jpg"
  },
  netflix: {
    title: "Netflix Clone",
    primary_lang: "Next JS",
    languages: [
      "Javascript",
      "Next JS",
      "Tailwind CSS",
      "Firebase",
      "Movie API"
    ],
    demo: "https://netflixclone-953fd.web.app/",
    code: "https://github.com/juarezv90/netflixclone.git",
    objective:() => {return <>This project is a simple clone of the Netflix online application. It uses the Movie Database to populate the movies into the application and uses firebase create and manage user data such as saving and deleting the favorites for that user. Uses an authorization to prevent users from storing their favorite movies without first being signed in.</>},
    image: "/assets/projects/netflixclone.jpg"
  },
  blog: {
    title: "Juarez Development Blog",
    primary_lang: "Next JS",
    languages: [
      "Javascript",
      "Next JS",
      "Tailwind CSS",
      "Firebase",
      "Firebase Storage"
    ],
    demo: "https://blog.victorjuarez.dev/",
    code: "https://github.com/juarezv90/blogsitefirebase.git",
    objective:() => {return <>This project is a full design personal blog designed for my personal use. This project uses NextJS 13 as for the frontend and styled by Tailwindcss. For the back end it uses Firebase and it's API to build store each post. It uses the firebase authenticator to allow for myself to sign in and add new post and the firebase storage to store images for each post. It's structure is similar to what a personal blog would function. Comments are open post and are stored within each post including their time of posting.</>},
    image: "/assets/projects/blogdev.png"
  }
};
