import axios from "axios";
export {};

let url: string = "https://pokeapi.co/api/v2/pokemon/";

axios.get(url).then((res) => {
  interface Article {
    name: string;
    url: string;
  }

  let data: Article[] = res.data;
  // data = [
  //   {
  //     id: 1,
  //     title: "title",
  //     description: "des",
  //   },
  // ];

  console.log(data);
});
