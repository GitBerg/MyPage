import yelp from "../../public/yelpcamp/yelpcamp1.png";
import yelp2 from "../../public/yelpcamp/yelpcamp2.png";
import yelp3 from "../../public/yelpcamp/yelpcamp3.png";
import ever from "../../public/evernote/ever1.png";
import ever2 from "../../public/evernote/ever2.png";
import ever3 from "../../public/evernote/ever3.png";
import fc1 from "../../public/food-commerce/fc1.png";
import fc2 from "../../public/food-commerce/fc2.png";
import fc3 from "../../public/food-commerce/fc3.png";
import fc4 from "../../public/food-commerce/fc4.png";
import op1 from "../../public/order-app/op1.png";
import op2 from "../../public/order-app/op2.png";
import op3 from "../../public/order-app/op3.png";
import op4 from "../../public/order-app/op4.png";

export const database = {
    "yelpcamp": { 
        "name": "YelpCamp",
        "repository": "https://github.com/GitBerg/YelpCamp",
        "url": "https://myelpcamp.cyclic.app/",
        "imgs": [yelp, yelp2, yelp3],
        "description": "YelpCamp is a place to share your yelp experience! An application designed to promote interaction between users and find and share possible points of interest.",
        "tecs": ["Javascript", "MongoDB", "Bootstrap", "NodeJS"],
    },
    "evernote": { 
        "name": "Evernote clone",
        "repository": "https://github.com/GitBerg/clone_evernote",
        "url": "https://clonevernote.netlify.app/",
        "imgs": [ever, ever2, ever3],
        "description": "This project is an app similar to evernote features and interface. Created with objective to improve my skills in web development with Javascript, ReactJS, MongoDB and NodeJS.",
        "tecs": ["ReactJS", "Javascript", "Bulma", "MongoDB", "NodeJS"],
    },
    "foodCommerce": { 
        "name": "Food-Commerce",
        "repository": "https://github.com/GitBerg/Food_Commerce",
        "url": "",
        "imgs": [fc1, fc2, fc3, fc4],
        "description": "The Food Commerce project was developed to improve my skills with ReactJs and the use of ContextApi to traffic Props between components. In this project, three pages were developed, namely: Product selection, cart and order completion.",
        "tecs": ["ReactJS", "Typescript", "Styled-components", "NodeJS", "Prisma"],
    },
    "orderApp": { 
        "name": "Order App",
        "repository": "https://github.com/GitBerg/OrderApp",
        "url": "",
        "imgs": [op1, op2, op3, op4],
        "description": "The Order App project was developed and used as my final project. In it we have a mobile application whose objective is to take orders and view the traffic of orders made during the days. It is possible to register a menu and it has an exclusive page for viewing daily data.",
        "tecs": ["React-Native", "FireBase", "Expo"],
    },
}