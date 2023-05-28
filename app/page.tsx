import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";
import EmptyState from "@/app/components/EmptyState";

import getListings, { IListingsParams } from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";

import Categories from "./components/navbar/Categories";
import Slider from "./components/Home/Slider";
import PromoOffer from "./components/Home/PromoOffer";
import Recommended from "./components/Home/Recommended";
import Place from "./components/Home/Place";
import Platform from "./components/Home/Platform";
import Review from "./components/Home/Review";
import { Splide } from "@splidejs/react-splide";
import SearchModal from "./components/modals/SearchModal";

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  return (
    <>
      {" "}

   
      <Slider />
    
      <Categories />
      {listings.length === 0 ? (
        <ClientOnly>
          <EmptyState showReset />
        </ClientOnly>
      ) : (
        <ClientOnly>
            <SearchModal />
          <Container>
            <div
              className="
               lg:px-64
              pt-24
             grid 
             grid-cols-1 
             sm:grid-cols-2 
             md:grid-cols-3 
             lg:grid-cols-4
             xl:grid-cols-5
             2xl:grid-cols-5
             gap-8
           "
            >
              {listings.map((listing: any) => (
                <ListingCard
                  currentUser={currentUser}
                  key={listing.id}
                  data={listing}
                />
              ))}
            </div>
          </Container>
        </ClientOnly>
      )}
      <PromoOffer />
      <Recommended />
      <Place />
      <Platform />
      <Review />
    </>
  );
};

export default Home;
