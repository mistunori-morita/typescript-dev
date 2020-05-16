import axios from "axios";
export {};

let url: string =
  "http://udemy-utils.herokuapp.com/api/v1/articles?token=token123";

axios.get(url).then((res) => {
  interface Article {
    id: number;
    title: string;
    description: string;
  }

  let data: Article[] = res.data;
  data = [
    {
      id: 1,
      title: "title",
      description: "des",
    },
  ];

  console.log(data);
});
