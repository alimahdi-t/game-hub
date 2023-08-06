import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0a0192b9be6f4f94b1797fae455cb945",
  },
});
