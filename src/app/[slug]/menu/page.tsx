import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import RestaurnatBanner from "./components/bannerRestaurant";

interface RestaurantMenuPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consumptionMethod: string }>;
}

const isConsumptionMethodValid = (consumptionMethod: string) => {
  return ["DINE_IN", "TAKEAWAY"].includes(consumptionMethod.toUpperCase());
};

const RestaurantMenuPage = async ({
  params,
  searchParams,
}: RestaurantMenuPageProps) => {
  const { slug } = await params;
  const { consumptionMethod } = await searchParams;

  if (!isConsumptionMethodValid(consumptionMethod)) {
    return notFound();
  }

  const restaurant = await db.restaurant.findUnique({
    where: {
      slug,
    },
  });

  if (!restaurant) {
    return notFound();
  }

  return (
    <div>
      <RestaurnatBanner restaurant={restaurant} textAlt="banner restaurant" />
    </div>
  );
};

export default RestaurantMenuPage;

// http://localhost:3000/fsw-donalds/menu?consumptionMethod=DINE_IN
