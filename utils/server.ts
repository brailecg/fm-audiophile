import { CartProductType } from "@/types/appTypes";

const getApiWrapper = async ({ path }: { path: string }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${path}` as string,
      {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const getFeaturedProducts = async () => {
  return getApiWrapper({ path: `/featured_products` });
};

export const getProductsByCategory = async ({
  category,
}: {
  category: string;
}) => {
  return getApiWrapper({ path: `/products/${category}` });
};

export const getProductById = async ({ id }: { id: string }) => {
  return getApiWrapper({ path: `/products/${id}` });
};

export const getCartItemByProfileId = ({
  profileId,
}: {
  profileId: string;
}) => {
  return getApiWrapper({ path: `/carts/user/${profileId}` });
};

export const cartActions = async () => {};

export const handleCartDbUpdate = async ({
  cartId,
  cartData,
}: {
  cartId: string | undefined;
  cartData: CartProductType[];
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/carts/70ab2eb7-ba5e-4ce7-b126-ef9ee14f3ee1` as string,
      {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart_id: cartId,
          items: cartData,
        }),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
  // "cart_item_id": "0a0084de-0c1a-46da-b948-ae392dcb8aff",
  // "cart_id": "bd8b52f6-77d2-42c7-b5fa-9f3ebf76ffc5",
  // "product_id": "043cf228-7632-4310-8d09-0196587ac8c3",
  // "cart_item_qty": 69,
  // "cart_item_price": 700
  console.log("cart update server");
};
