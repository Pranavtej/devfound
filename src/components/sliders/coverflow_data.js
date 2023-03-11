import axios from "axios";

export const Coverflow_devs = async () => {  
  const coverflow_data = await axios.get(`devs/`);
  return coverflow_data.data;
}




export const co_data = [
    
  {
    "_id": "63d80844c8fcb13bd4447c26",
    "username": "Charan",
    "password": "Charan",
    "email": "charan_mcr@srkrec.edu.in",
    "name": "Charan Sai",
    "role": "dev",
    "avatar": "https://media.licdn.com/dms/image/D5603AQFqKI6kFXHUOQ/profile-displayphoto-shrink_100_100/0/1672579730463?e=1680134400&v=beta&t=x8Zzol6veGSvqECudhFSzkx8PaqY7DZ68pnSa1jAOog"
},
{
    "_id": "63d80844c8fcb13bd4447c27",
    "username": "Praneeth",
    "password": "123456",
    "email": "praneeth_mcr@srkrec.edu.in",
    "name": "Praneeth",
    "role": "dev",
    "avatar": "https://media.licdn.com/dms/image/D5603AQFqKI6kFXHUOQ/profile-displayphoto-shrink_100_100/0/1672579730463?e=1680134400&v=beta&t=x8Zzol6veGSvqECudhFSzkx8PaqY7DZ68pnSa1jAOog"
},
{
    "_id": "63d80844c8fcb13bd4447c28",
    "username": "Manoj",
    "password": "123456",
    "email": "manoj_mcr@srkrec.edu.in",
    "name": "Manoj",
    "role": "dev",
    "avatar": "https://media.licdn.com/dms/image/D5603AQFqKI6kFXHUOQ/profile-displayphoto-shrink_100_100/0/1672579730463?e=1680134400&v=beta&t=x8Zzol6veGSvqECudhFSzkx8PaqY7DZ68pnSa1jAOog"
},
{
    "_id": "63d80844c8fcb13bd4447c29",
    "username": "Lokesh",
    "password": "123456",
    "email": "lokesh_mcr@srkrec.edu.in",
    "name": "lokesh_b",
    "role": "dev",
    "avatar": "https://media.licdn.com/dms/image/D5603AQFqKI6kFXHUOQ/profile-displayphoto-shrink_100_100/0/1672579730463?e=1680134400&v=beta&t=x8Zzol6veGSvqECudhFSzkx8PaqY7DZ68pnSa1jAOog"
},
{
    "_id": "63d80844c8fcb13bd4447c2a",
    "username": "Satvik",
    "password": "123456",
    "email": "satvik_mcr@srkrec.edu.in",
    "name": "Satvik varma",
    "role": "dev",
    "avatar": "https://media.licdn.com/dms/image/D5603AQFqKI6kFXHUOQ/profile-displayphoto-shrink_100_100/0/1672579730463?e=1680134400&v=beta&t=x8Zzol6veGSvqECudhFSzkx8PaqY7DZ68pnSa1jAOog"
},
{
    "_id": "63d80a1baf8c830ff508c7b9",
    "username": "Pranav Teja",
    "password": "123456",
    "email": "Pranav_mcr@srkrec.edu.in",
    "name": "PranavTeja",
    "role": "dev",
    "avatar": "https://pranavteja.vercel.app/img/profilepic.jpg"
}
  ];
  
  export const hero_5_data = [
    {
      img: "assets/img/products/item_16_2lg.jpg",
      title: "Etherium NFT Launching Lab",
      authorImage: "assets/img/avatars/avatar_18_rounded.gif",
      authorName: "051_Hart",
      id: "0Etherium NFT Launching Lab",
    },
    {
      img: "assets/img/products/item_12_2lg.jpg",
      title: "Oceania \\\\ OVERSEER 017",
      authorImage: "assets/img/avatars/avatar_22_rounded.jpg",
      authorName: "MadeByM1KE",
      id: "1Oceania \\\\ OVERSEER 017",
  
      subItem: [
        {
          img: "assets/img/products/item_13_lg.jpg",
          title: "Light Bars",
          authorImage: "assets/img/avatars/avatar_17_rounded.jpg",
          authorName: "Wow Frens",
          id: "2Light Bars",
        },
      ],
    },
  ];
  