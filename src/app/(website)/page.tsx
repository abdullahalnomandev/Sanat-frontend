import HomePage from '@/components/web-pages/HomePage'
import { apiFetch } from '@/lib/api-fech';

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    lat?: string;
    lng?: string;
    radiusInKm?: string;
  }>;
}) => {
  const resolvedParams = await searchParams;

  let queryObject: Record<string, string> = {};

  if (resolvedParams?.lat && resolvedParams?.lng) {
    queryObject = {
      lat: resolvedParams.lat,
      lng: resolvedParams.lng,
      radiusInKm: "50", // must be string
    };
  }

  const queryString = new URLSearchParams(queryObject).toString();

  const response = await apiFetch<any>(
    `/listings/nearby${queryString && "?" + queryString}`,
    {
      method: "GET",
      next: {
        tags: ["locations-popular"],
      },
    },
    "server"
  );

  return (
    <div>
      <HomePage data={response?.data} />
    </div>
  );
};

export default page;