import { useState } from "react";
import { supabase } from "../../../../components/supabase";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default function index() {
  const [file, setfile] = useState([]);
  const [productImage, setProductImage] = useState("");
  const [productsData, setProductsData] = useState({
    name: "",
    url: "",
    image: "",
  });

  const handleFileSelected = (e) => {
    setfile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const filename = `${uuidv4()}`;

    const { data, error } = await supabase.storage
      .from("delmonte")
      .upload(filename, file, {
        cacheControl: "3600",
        upsert: false,
      });

    const filepath = data.path; // save filepath in database
    setProductImage(filepath);
    console.log(error);
  };

  const handler = async () => {
    try {
      await axios.post("/api/products/postproduct", {
        name: productsData.name,
        url: productsData.url,
        image: productImage,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form>
        <input type="file" name="image" onChange={handleFileSelected} />
        <button type="submit" onClick={handleSubmit}>
          Upload image
        </button>
        <input
          type="text"
          placeholder="name"
          onChange={(e) =>
            setProductsData({ ...productsData, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="name"
          onChange={(e) =>
            setProductsData({ ...productsData, url: e.target.value })
          }
        />
      </form>
      <button onClick={handler}>Submit</button>
    </>
  );
}
