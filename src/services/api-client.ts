import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "95a26f2e881b4e28aa3cafbfe94ac99c",
  },
});
