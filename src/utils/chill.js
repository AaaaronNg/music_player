import { v4 as uuidv4 } from "uuid";

const chill = () => {
  return [
    {
      name: "Roses n Flames",
      artist: "C Y G N",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#CF72D3", "#E084EF"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14984",
    },
    {
      name: "Blue Moon",
      artist: "C Y G N",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#CF72D3", "#E084EF"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14990",
    },
    {
      name: "Crema Cafe",
      artist: "Strehlow, Glimlip",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#AE7C70", "#FCF0D6"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=5916",
    },
    {
      name: "Ocean Alley",
      artist: "Strehlow, Aylior",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/70a56749b8b89815fa75446030c6ba57d2c34de7-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#0D2A64", "#88DBAF"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=5970",
    },
    {
      name: "Awake",
      artist: "xander., Wesley Curtis",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/06/faa452681fe33146c42a1b422fdf7cd7fd082637-1024x1024.jpg",
      active: false,
      id: uuidv4(),
      color: ["#AA7075", "#8D2B39"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=5842",
    },
  ];
};

export default chill;
