import { v4 as uuidv4 } from "uuid";

export default function chillHop() {
  return [
    {
      name: "Everyday",
      artist: "chromonicci",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/02/6b1cd792e2d88c65108a3c3b7ed48407b6f65bf8-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#3f4567", "#dfba00"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=30339"
    },
    {
      name: "somber sky",
      artist: "oddfish",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/01/c8729f09c7a1bf1143edf05091027770837d9e10-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#cc143f", "#a59da4"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=30295"
    },
    {
      name: "Santiago",
      artist: "Psalm Trees, Moods",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/01/1abf44fbb1364ca8435a8bbf4c5750a80947128f-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#fedcbd", "#757b8f"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=30202"
    },
    {
      name: "Repent",
      artist: "mommy",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/01/c0d38a1ac4ad0614301ecc77e10767b1c4f34a53-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#353e67", "#a09aa0"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=30141"
    },
    {
      name: "la zona",
      artist: "Maydee",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/3ff29a35be582c8dc0222273cb9c401ea6b209dc-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#85a2b7", "#63312a"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27455"
    }
  ];
}
