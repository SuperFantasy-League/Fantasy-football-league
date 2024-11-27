import { useState } from "react";

const useEthRate = () => {
  const [rate, setRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-xEDfyZh1gVhZ5LFCEuzwUW6M"
    }
  };

  const url =
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&x_cg_demo_api_key=CG-xEDfyZh1gVhZ5LFCEuzwUW6M";

  try {
    fetch(url, options).then(res => res.json()).then(res => {
      console.log(res);
      // setRate(Number(formatEther(balance ?? BigInt(0))) * res.ethereum.usd);
      setRate(res.ethereum.usd);
      setLoading(false);
    });
  } catch (error) {
    console.error(error);
  }

  return { rate, loading };
};

export default useEthRate;
