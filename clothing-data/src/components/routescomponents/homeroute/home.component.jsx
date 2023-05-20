import MainCont from "../../mainCategory/mainCategory.component";
import { Outlet } from "react-router-dom";

const Home = () => {
  const productData = [
    {
      id: 1,
      title: "hats",
      imageUrl:
        "https://user-images.githubusercontent.com/77974484/173227879-69fb96b1-5947-4423-867c-f77b87439563.jpeg",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl:
        "https://i.pinimg.com/736x/74/fb/3d/74fb3d817344e3c3c5f158cfa6716ca7.jpg",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl:
        "https://11pt5z46nuudt9qxx2knwgff-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/Moda_Sneakers_24.jpg",
    },
    {
      id: 4,
      title: "womens",
      imageUrl:
        "https://www.jewelryshoppingguide.com/wp-content/uploads/2019/08/types-of-indian-jewelry-and-how-to-wear-them.jpeg",
    },
    {
      id: 5,
      title: "mens",
      imageUrl:
        "https://tamil.samayam.com/photo/msid-91485197,imgsize-27712/pic.jpg",
    },
  ];
  return (
    <>
      <MainCont productData={productData} />
      <Outlet />
    </>
  );
};

export default Home;
