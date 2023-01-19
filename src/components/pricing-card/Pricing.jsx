import { useEffect, useState } from "react";
//Axios
import axios from "axios";

const PricingPlan = () => {
  //State
  const [prices, setPrices] = useState([]);

  //Fetching Information From Database
  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data: response } = await axios.get("/api/prices");

    setPrices(response.data);
  };
  const createSession = async (priceId) => {
    const { data: response } = await axios.post(
      "/api/session",
      {
        priceId,
      }
    );

    window.location.href = response.url;
  };

  return (
    <div>
      <div className="text-white justify-center flex align-center gap-10 pt-20">
        {prices.map((price) => {
          return (
            <div className="flex flex-col gap-2">
              <div>
                <h1>{price.nickname}</h1>
              </div>
              <div>
                <h2>${price.unit_amount / 100}</h2>
              </div>
              <button onClick={() => createSession(price.id)}>Buy now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingPlan;
