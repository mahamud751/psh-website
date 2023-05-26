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

export default function Example() {
  const [activeTab, setActiveTab] = React.useState("info");
  const data = [
    {
      label: "Personal Info",
      value: "info",
      icon: Square3Stack3DIcon,
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Booking History",
      value: "booking",
      icon: UserCircleIcon,
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Payment Setting",
      value: "settings",
      icon: Cog6ToothIcon,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Wishlist",
      value: "wishlist",
      icon: Cog6ToothIcon,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Settings",
      value: "settings",
      icon: Cog6ToothIcon,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-gray-900">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-12">
        <div className="my-12">
          <Tabs value={activeTab} orientation="vertical">
            <TabsHeader className="w-60">
              <img src="https://i.ibb.co/jwYHgqz/Rectangle-97.png" alt="" />

              <Tab className="place-items-start" value="info">
                <div className="flex items-center gap-2">
                  {/* {React.createElement(icon, { className: "w-5 h-5" })} */}
                  Personal Info
                </div>
              </Tab>
              <Tab className="place-items-start" value="booking">
                <div className="flex items-center gap-2">
                  {/* {React.createElement(icon, { className: "w-5 h-5" })} */}
                  Booking History
                </div>
              </Tab>
              <Tab className="place-items-start" value="payment">
                <div className="flex items-center gap-2">
                  {/* {React.createElement(icon, { className: "w-5 h-5" })} */}
                  Payment Setting
                </div>
              </Tab>
              <Tab className="place-items-start" value="wishlist">
                <div className="flex items-center gap-2">
                  {/* {React.createElement(icon, { className: "w-5 h-5" })} */}
                  Wishlist
                </div>
              </Tab>
              <Tab className="place-items-start" value="setting">
                <div className="flex items-center gap-2">
                  {/* {React.createElement(icon, { className: "w-5 h-5" })} */}
                  Setting
                </div>
              </Tab>
            </TabsHeader>
            <TabsBody>
              <TabPanel value="info" className="py-0">
                <div className="my-12">
                  <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
                    <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-6">
                      <Card className="flex-row w-full shadow-none">
                        <CardHeader
                          shadow={false}
                          floated={false}
                          className="w-2/5 shrink-0 m-0 rounded-r-none"
                        >
                          <img
                            src="https://i.ibb.co/hcyY90R/Rectangle-99.png"
                            className="w-full  object-cover"
                          />
                        </CardHeader>
                        <CardBody>
                          <Typography
                            variant="h6"
                            color="blue"
                            className="uppercase"
                          >
                            STANDARD ROOM
                          </Typography>
                          <Typography variant="h4" color="blue-gray">
                            BDT 2000
                          </Typography>
                          <Typography color="gray" className="font-normal ">
                            Per Night
                          </Typography>
                          <Typography color="gray" className="font-normal">
                            25 Janaury, 2023
                          </Typography>
                          <Typography color="gray" className="font-normal mb-8">
                            25 Janaury, 2023
                          </Typography>
                        </CardBody>
                      </Card>
                    </div>
                    <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-6">
                      <Card className="flex-row w-full shadow-none">
                        <CardHeader
                          shadow={false}
                          floated={false}
                          className="w-2/5 shrink-0 m-0 rounded-r-none"
                        >
                          <img
                            src="https://i.ibb.co/hcyY90R/Rectangle-99.png"
                            className="w-full  object-cover"
                          />
                        </CardHeader>
                        <CardBody>
                          <Typography
                            variant="h6"
                            color="blue"
                            className="uppercase"
                          >
                            STANDARD ROOM
                          </Typography>
                          <Typography variant="h4" color="blue-gray">
                            BDT 2000
                          </Typography>
                          <Typography color="gray" className="font-normal ">
                            Per Night
                          </Typography>
                          <Typography color="gray" className="font-normal">
                            25 Janaury, 2023
                          </Typography>
                          <Typography color="gray" className="font-normal mb-8">
                            25 Janaury, 2023
                          </Typography>
                        </CardBody>
                      </Card>
                    </div>
                    <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-6">
                      <Card className="flex-row w-full shadow-none">
                        <CardHeader
                          shadow={false}
                          floated={false}
                          className="w-2/5 shrink-0 m-0 rounded-r-none"
                        >
                          <img
                            src="https://i.ibb.co/hcyY90R/Rectangle-99.png"
                            className="w-full  object-cover"
                          />
                        </CardHeader>
                        <CardBody>
                          <Typography
                            variant="h6"
                            color="blue"
                            className="uppercase"
                          >
                            STANDARD ROOM
                          </Typography>
                          <Typography variant="h4" color="blue-gray">
                            BDT 2000
                          </Typography>
                          <Typography color="gray" className="font-normal ">
                            Per Night
                          </Typography>
                          <Typography color="gray" className="font-normal">
                            25 Janaury, 2023
                          </Typography>
                          <Typography color="gray" className="font-normal mb-8">
                            25 Janaury, 2023
                          </Typography>
                        </CardBody>
                      </Card>
                    </div>
                    <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-6">
                      <Card className="flex-row w-full shadow-none">
                        <CardHeader
                          shadow={false}
                          floated={false}
                          className="w-2/5 shrink-0 m-0 rounded-r-none"
                        >
                          <img
                            src="https://i.ibb.co/hcyY90R/Rectangle-99.png"
                            className="w-full  object-cover"
                          />
                        </CardHeader>
                        <CardBody>
                          <Typography
                            variant="h6"
                            color="blue"
                            className="uppercase"
                          >
                            STANDARD ROOM
                          </Typography>
                          <Typography variant="h4" color="blue-gray">
                            BDT 2000
                          </Typography>
                          <Typography color="gray" className="font-normal ">
                            Per Night
                          </Typography>
                          <Typography color="gray" className="font-normal">
                            25 Janaury, 2023
                          </Typography>
                          <Typography color="gray" className="font-normal mb-8">
                            25 Janaury, 2023
                          </Typography>
                        </CardBody>
                      </Card>
                    </div>
                    <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-6">
                      <Card className="flex-row w-full shadow-none">
                        <CardHeader
                          shadow={false}
                          floated={false}
                          className="w-2/5 shrink-0 m-0 rounded-r-none"
                        >
                          <img
                            src="https://i.ibb.co/hcyY90R/Rectangle-99.png"
                            className="w-full  object-cover"
                          />
                        </CardHeader>
                        <CardBody>
                          <Typography
                            variant="h6"
                            color="blue"
                            className="uppercase"
                          >
                            STANDARD ROOM
                          </Typography>
                          <Typography variant="h4" color="blue-gray">
                            BDT 2000
                          </Typography>
                          <Typography color="gray" className="font-normal ">
                            Per Night
                          </Typography>
                          <Typography color="gray" className="font-normal">
                            25 Janaury, 2023
                          </Typography>
                          <Typography color="gray" className="font-normal mb-8">
                            25 Janaury, 2023
                          </Typography>
                        </CardBody>
                      </Card>
                    </div>
                    <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-6">
                      <Card className="flex-row w-full shadow-none">
                        <CardHeader
                          shadow={false}
                          floated={false}
                          className="w-2/5 shrink-0 m-0 rounded-r-none"
                        >
                          <img
                            src="https://i.ibb.co/hcyY90R/Rectangle-99.png"
                            className="w-full  object-cover"
                          />
                        </CardHeader>
                        <CardBody>
                          <Typography
                            variant="h6"
                            color="blue"
                            className="uppercase"
                          >
                            STANDARD ROOM
                          </Typography>
                          <Typography variant="h4" color="blue-gray">
                            BDT 2000
                          </Typography>
                          <Typography color="gray" className="font-normal ">
                            Per Night
                          </Typography>
                          <Typography color="gray" className="font-normal">
                            25 Janaury, 2023
                          </Typography>
                          <Typography color="gray" className="font-normal mb-8">
                            25 Janaury, 2023
                          </Typography>
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="booking" className="py-0">
                booking
              </TabPanel>
              <TabPanel value="payment" className="py-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                molestiae.
              </TabPanel>
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
              <TabPanel value="setting" className="py-0">
                setting
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
