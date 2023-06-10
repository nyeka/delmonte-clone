import React from "react";
import TextHeader from "../headertext";
import axios from "axios";
import { supabase } from "../supabase";
import { GetServerSideProps } from "next";

type Products = {
  id: string;
  name: string;
  url: string;
  image: string;
};

interface Props {
  products: Products[];
}

const Products = () => {
  const [products, setProducts] = React.useState<Props>();
  const handlerGetProducts = async () => {
    await axios
      .get("/api/products/getProduct")
      .then((res) => {
        // console.log(res.data.products);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    handlerGetProducts();
  }, []);

  return (
    <div>
      <TextHeader
        heading="Our Products"
        banner="Delicious and premium taste"
        desc="We've been working with family farmers for generations to grow our delicious vegetables, fruits and tomatoes"
      />
      <div>
        {products?.products?.map((product) => {
          const { data: image_url } = supabase.storage
            .from("delmonte")
            .getPublicUrl(product.image) as any;
          return (
            <div
              key={product.id}
              className="flex justify-center text-center gap-[24px] mt-[24px]"
            >
              <div>
                <img src={image_url.publicUrl} alt={product.name} />
                <p>{product.name}</p>
              </div>
              <div>
                <img src={image_url.publicUrl} alt={product.name} />
                <p>{product.name}</p>
              </div>
              <div>
                <img src={image_url.publicUrl} alt={product.name} />
                <p>{product.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
