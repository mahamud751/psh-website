"use client";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import "../profile.css";

export default function Example() {
  const [activeTab, setActiveTab] = React.useState("info");
  const data = [
    {
      label: "Personal Info",
      value: "info",
      icon: "Customer.png",
    },
    {
      label: "Booking History",
      value: "booking",
      icon: "Schedule.png",
    },
    {
      label: "Payment Setting",
      value: "payment",
      icon: "Card Security.png",
    },
    {
      label: "Wishlist",
      value: "wishlist",
      icon: "Heart.png",
    },
    {
      label: "Settings",
      value: "settings",
      icon: "Support.png",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-gray-900">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-12">
        <div className="my-12">
          <Tabs value={activeTab} orientation="vertical">
            <TabsHeader className="w-60">
              <img src="https://i.ibb.co/jwYHgqz/Rectangle-97.png" alt="" />
              <h2 className="font-bold text-center text-xl uppercase my-2 block mb-0">
                John Brown
              </h2>
              <span className="mt-0 text-[#35B0A7] text-center font-bold mb-3">
                Member Since May 2023
              </span>

              {data.map((tab, idx) => (
                <Tab
                  key={idx}
                  className="place-items-start profileTab"
                  value={tab.value}
                >
                  <div className="flex items-center gap-2 p-2 ">
                    <img src={`./icon/${tab.icon}`} alt="" />
                    <span className="capitalize">{tab.label}</span>
                  </div>
                </Tab>
              ))}
            </TabsHeader>

            {/* tabs description */}
            <TabsBody>
              {/* Personal Info Description */}
              <TabPanel value="info" className="py-0">
                <div className="flex justify-around items-center">
                  {/* one */}
                  <div className="info-inner text-center">
                    <div className="inner-circle mb-2">
                      <div className="circle">
                        <img src="./profile/Armchair.png" alt="" />
                      </div>
                    </div>
                    <span className="text-[#35B0A7] text-2xl">15</span>
                    <span className="text-2xl"> Rooms</span>
                  </div>
                  <div className="info-inner text-center">
                    <div className="inner-circle mb-2">
                      <div className="circle">
                        <img src="./profile/Calendar.png" alt="" />
                      </div>
                    </div>
                    <span className="text-[#35B0A7] text-2xl">43</span>
                    <span className="text-2xl"> Days</span>
                  </div>
                  <div className="info-inner text-center">
                    <div className="inner-circle mb-2">
                      <div className="circle">
                        <img src="./profile/Camera.png" alt="" />
                      </div>
                    </div>
                    <span className="text-[#35B0A7] text-2xl">15</span>
                    <span className="text-2xl"> Rooms</span>
                  </div>
                  <div className="info-inner text-center">
                    <div className="inner-circle mb-2">
                      <div className="circle">
                        <img src="./profile/Vector.png" alt="" />
                      </div>
                    </div>
                    <span className="text-[#35B0A7] text-2xl">15</span>
                    <span className="text-2xl"> Rooms</span>
                  </div>
                </div>

                <div className="profile-info">
                  <div className="left-text">
                    <span>Name:</span>
                    <span>Email:</span>
                    <span>Phone number:</span>
                    <span>address:</span>
                    <span>city:</span>
                    <span>state/region:</span>
                    <span>postal code:</span>
                    <span>country:</span>
                  </div>
                  <div className="right-text">
                    <span>john wick</span>
                    <span>johnwi@mail</span>
                    <span>+88034934934</span>
                    <span>Dhaka, bangladesh</span>
                    <span>john wick</span>
                    <span>johnwi@mail</span>
                    <span>+88034934934</span>
                    <span>Dhaka, bangladesh</span>
                  </div>
                </div>
              </TabPanel>

              {/* Booking history Description */}
              <TabPanel value="booking" className="py-0">
                <div className="booking-title flex gap-6">
                  <span className="text-[#A5A5A5]">upcoming bookings(3)</span>
                  <span className="text-[#000000]">past booking(5)</span>
                </div>
                <div className="room-demo">
                  <div className="single-demo">
                    <div className="demo-img">
                      <img src="" alt="" />
                    </div>
                    <div className="demo-text">
                      <h3>standard room</h3>
                      <span>BDT 2000</span>
                      <span>per night</span>
                      <span>25january, 2023</span>
                    </div>
                  </div>
                </div>
              </TabPanel>

              {/* Payment Setting Description */}
              <TabPanel value="payment" className="py-0">
                Payment Setting Description
              </TabPanel>

              {/* Wishlist Description */}
              <TabPanel value="wishlist" className="py-0">
                <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
                  <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-3">
                    <Card
                      shadow={false}
                      className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
                    >
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.ibb.co/8dcXPrH/Rectangle-50.png')] bg-cover bg-center"
                      >
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                      </CardHeader>
                      <CardBody className="relative py-14 px-6 md:px-12">
                        <Typography
                          variant="h2"
                          color="white"
                          className="mb-6 font-medium leading-[1.5]"
                        >
                          Family Apartment
                        </Typography>
                        <Typography variant="h5" className="mb-4 text-gray-400">
                          100 Smart Street, LA, USA
                        </Typography>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-3">
                    <Card
                      shadow={false}
                      className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
                    >
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.ibb.co/8dcXPrH/Rectangle-50.png')] bg-cover bg-center"
                      >
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                      </CardHeader>
                      <CardBody className="relative py-14 px-6 md:px-12">
                        <Typography
                          variant="h2"
                          color="white"
                          className="mb-6 font-medium leading-[1.5]"
                        >
                          Family Apartment
                        </Typography>
                        <Typography variant="h5" className="mb-4 text-gray-400">
                          100 Smart Street, LA, USA
                        </Typography>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-3">
                    <Card
                      shadow={false}
                      className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
                    >
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.ibb.co/8dcXPrH/Rectangle-50.png')] bg-cover bg-center"
                      >
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                      </CardHeader>
                      <CardBody className="relative py-14 px-6 md:px-12">
                        <Typography
                          variant="h2"
                          color="white"
                          className="mb-6 font-medium leading-[1.5]"
                        >
                          Family Apartment
                        </Typography>
                        <Typography variant="h5" className="mb-4 text-gray-400">
                          100 Smart Street, LA, USA
                        </Typography>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-3">
                    <Card
                      shadow={false}
                      className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
                    >
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.ibb.co/8dcXPrH/Rectangle-50.png')] bg-cover bg-center"
                      >
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                      </CardHeader>
                      <CardBody className="relative py-14 px-6 md:px-12">
                        <Typography
                          variant="h2"
                          color="white"
                          className="mb-6 font-medium leading-[1.5]"
                        >
                          Family Apartment
                        </Typography>
                        <Typography variant="h5" className="mb-4 text-gray-400">
                          100 Smart Street, LA, USA
                        </Typography>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-3">
                    <Card
                      shadow={false}
                      className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
                    >
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.ibb.co/8dcXPrH/Rectangle-50.png')] bg-cover bg-center"
                      >
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                      </CardHeader>
                      <CardBody className="relative py-14 px-6 md:px-12">
                        <Typography
                          variant="h2"
                          color="white"
                          className="mb-6 font-medium leading-[1.5]"
                        >
                          Family Apartment
                        </Typography>
                        <Typography variant="h5" className="mb-4 text-gray-400">
                          100 Smart Street, LA, USA
                        </Typography>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-3">
                    <Card
                      shadow={false}
                      className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
                    >
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.ibb.co/8dcXPrH/Rectangle-50.png')] bg-cover bg-center"
                      >
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                      </CardHeader>
                      <CardBody className="relative py-14 px-6 md:px-12">
                        <Typography
                          variant="h2"
                          color="white"
                          className="mb-6 font-medium leading-[1.5]"
                        >
                          Family Apartment
                        </Typography>
                        <Typography variant="h5" className="mb-4 text-gray-400">
                          100 Smart Street, LA, USA
                        </Typography>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-3">
                    <Card
                      shadow={false}
                      className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
                    >
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.ibb.co/8dcXPrH/Rectangle-50.png')] bg-cover bg-center"
                      >
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                      </CardHeader>
                      <CardBody className="relative py-14 px-6 md:px-12">
                        <Typography
                          variant="h2"
                          color="white"
                          className="mb-6 font-medium leading-[1.5]"
                        >
                          Family Apartment
                        </Typography>
                        <Typography variant="h5" className="mb-4 text-gray-400">
                          100 Smart Street, LA, USA
                        </Typography>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-3">
                    <Card
                      shadow={false}
                      className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
                    >
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.ibb.co/8dcXPrH/Rectangle-50.png')] bg-cover bg-center"
                      >
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                      </CardHeader>
                      <CardBody className="relative py-14 px-6 md:px-12">
                        <Typography
                          variant="h2"
                          color="white"
                          className="mb-6 font-medium leading-[1.5]"
                        >
                          Family Apartment
                        </Typography>
                        <Typography variant="h5" className="mb-4 text-gray-400">
                          100 Smart Street, LA, USA
                        </Typography>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </TabPanel>

              {/* Setting Tab Description */}
              <TabPanel value="setting" className="py-0">
                {/* component */}
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                  <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        First Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                        id="grid-first-name"
                        type="text"
                        placeholder="Jane"
                      />
                      {/* <p className="text-xs italic">
                        Please fill out this field.
                      </p> */}
                    </div>
                    <div className="md:w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                      >
                        Last Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        id="grid-last-name"
                        type="text"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                        id="grid-password"
                        type="password"
                        placeholder="******************"
                      />
                      <p className="text-grey-dark text-xs italic">
                        Make it as long and as crazy as you would like
                      </p>
                    </div>
                  </div>
                  <div className="-mx-3 md:flex mb-2">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-city"
                      >
                        City
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        id="grid-city"
                        type="text"
                        placeholder="Albuquerque"
                      />
                    </div>
                    <div className="md:w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-state"
                      >
                        State
                      </label>
                      <div className="relative">
                        <select
                          className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                          id="grid-state"
                        >
                          <option>New Mexico</option>
                          <option>Missouri</option>
                          <option>Texas</option>
                        </select>
                        <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                          <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-zip"
                      >
                        Zip
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        id="grid-zip"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
