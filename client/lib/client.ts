import { createThirdwebClient } from "thirdweb";

// const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;/
const clientId = "93d06f4f01b65d4856b8a5d0cbe4f37f"
const secretKey = process.env.NEXT_PUBLIC_THIRDWEB_SECRET_KEY;

if (!clientId) {
  throw new Error("No client ID provided");
}

export const client = createThirdwebClient({
  clientId: clientId as string,
  secretKey: secretKey as string,
});