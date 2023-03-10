const allCategories = [
  {
    id: 1,
    name: "Clothes",
    image: "https://api.lorem.space/image/fashion?w=640&h=480&r=52",
    creationAt: "2023-02-07T16:52:47.000Z",
    updatedAt: "2023-02-07T16:52:47.000Z",
  },
  {
    id: 2,
    name: "Electronics",
    image: "https://api.lorem.space/image/watch?w=640&h=480&r=7609",
    creationAt: "2023-02-07T16:52:47.000Z",
    updatedAt: "2023-02-07T16:52:47.000Z",
  },
  {
    id: 3,
    name: "un nuevo nombre",
    image: "https://api.lorem.space/image/furniture?w=640&h=480&r=1708",
    creationAt: "2023-02-07T16:52:47.000Z",
    updatedAt: "2023-02-08T12:52:56.000Z",
  },
  {
    id: 4,
    name: "Shoes",
    image: "https://api.lorem.space/image/shoes?w=640&h=480&r=5083",
    creationAt: "2023-02-07T16:52:47.000Z",
    updatedAt: "2023-02-07T16:52:47.000Z",
  },
  {
    id: 5,
    name: "Others",
    image: "https://api.lorem.space/image?w=640&h=480&r=8968",
    creationAt: "2023-02-07T16:52:47.000Z",
    updatedAt: "2023-02-07T16:52:47.000Z",
  },
];

const allProducts = [
  {
    id: 25,
    title: "Handcrafted Metal Table",
    price: 661,
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    images: [
      "https://api.lorem.space/image/watch?w=640&h=480&r=21",
      "https://api.lorem.space/image/watch?w=640&h=480&r=228",
      "https://api.lorem.space/image/watch?w=640&h=480&r=6302",
    ],
    creationAt: "2023-02-07T16:52:47.000Z",
    updatedAt: "2023-02-07T16:52:47.000Z",
    category: {
      id: 2,
      name: "Electronics",
      image: "https://api.lorem.space/image/watch?w=640&h=480&r=7609",
      creationAt: "2023-02-07T16:52:47.000Z",
      updatedAt: "2023-02-07T16:52:47.000Z",
    },
  },
  {
    id: 35,
    title: "Practical Concrete Computer",
    price: 870,
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    images: [
      "https://api.lorem.space/image?w=640&h=480&r=364",
      "https://api.lorem.space/image?w=640&h=480&r=4477",
      "https://api.lorem.space/image?w=640&h=480&r=9920",
    ],
    creationAt: "2023-02-07T16:52:47.000Z",
    updatedAt: "2023-02-07T16:52:47.000Z",
    category: {
      id: 5,
      name: "Others",
      image: "https://api.lorem.space/image?w=640&h=480&r=8968",
      creationAt: "2023-02-07T16:52:47.000Z",
      updatedAt: "2023-02-07T16:52:47.000Z",
    },
  },
  {
    id: 37,
    title: "Unbranded Bronze Bike",
    price: 622,
    description: "The Football Is Good For Training And Recreational Purposes",
    images: [
      "https://api.lorem.space/image/fashion?w=640&h=480&r=3997",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=5483",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=7855",
    ],
    creationAt: "2023-02-07T16:52:47.000Z",
    updatedAt: "2023-02-07T16:52:47.000Z",
    category: {
      id: 1,
      name: "Clothes",
      image: "https://api.lorem.space/image/fashion?w=640&h=480&r=52",
      creationAt: "2023-02-07T16:52:47.000Z",
      updatedAt: "2023-02-07T16:52:47.000Z",
    },
  },
  {
    id: 40,
    title: "Elegant Frozen Fish",
    price: 198,
    description: "The Football Is Good For Training And Recreational Purposes",
    images: [
      "https://api.lorem.space/image/fashion?w=640&h=480&r=2693",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=6486",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=7150",
    ],
    creationAt: "2023-02-07T16:52:47.000Z",
    updatedAt: "2023-02-07T16:52:47.000Z",
    category: {
      id: 1,
      name: "Clothes",
      image: "https://api.lorem.space/image/fashion?w=640&h=480&r=52",
      creationAt: "2023-02-07T16:52:47.000Z",
      updatedAt: "2023-02-07T16:52:47.000Z",
    },
  },
];
const allUsers = [
  {
    id: 1,
    email: "john@mail.com",
    password: "changeme",
    name: "Jhon",
    role: "customer",
    avatar: "https://api.lorem.space/image/face?w=640&h=480&r=2208",
  },
  {
    id: 2,
    email: "maria@mail.com",
    password: "12345",
    name: "Maria",
    role: "customer",
    avatar: "https://api.lorem.space/image/face?w=640&h=480&r=5257",
  },
  {
    id: 3,
    email: "admin@mail.com",
    password: "admin123",
    name: "Admin",
    role: "admin",
    avatar: "https://api.lorem.space/image/face?w=640&h=480&r=3950",
  },
  {
    id: 4,
    email: "manil@gmail.com",
    password: "00000",
    name: "Manil Pun",
    role: "customer",
    avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
  },
  {
    id: 5,
    email: "manil@gmail.com",
    password: "000000",
    name: "Mani",
    role: "customer",
    avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
  },
];
const authToken = {
  access_token: "test_access_token",
};
const testData = { allProducts, allCategories, allUsers, authToken };
export default testData;
