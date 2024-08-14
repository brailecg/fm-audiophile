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
