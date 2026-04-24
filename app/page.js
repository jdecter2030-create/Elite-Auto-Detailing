"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  MapPin,
  Sparkles,
  Car,
  CheckCircle2,
  Camera,
  MessageSquare,
} from "lucide-react";

export default function DetailingBusinessWebsite() {
  const business = {
    name: "Elite Auto Detailing",
    tagline:
      "Professional interior and exterior car detailing that makes your vehicle look brand new.",
    phoneDisplay: "(973) 464-5222",
    phoneLink: "9734645222",
    serviceArea: "Montclair, NJ & Surrounding areas",
    instagram: "Elite Detailing Of New Jersey Instagram",
    instagramLink: "https://www.instagram.com/elitedetailingofnj/",
  };

  const services = [
    {
      title: "Full Detail",
      price: "$150",
      description:
        "A complete interior and exterior cleaning package designed to refresh your whole vehicle inside and out. Our top seller",
      includes: [
        "Exterior in depth wash",
        "Wheel and tire cleaning",
        "Deep interior wash",
        "Dashboard and surface wipe down",
        "Window cleaning",
        "Before and after photos",
      ],
    },
    {
      title: "Exterior Detail",
      price: "$60",
      description:
        "A thorough wash of the exterior of your car designed to make your car look fresh and glossy",
      includes: [
        "Complete wheel and tire scrub",
        "Exterior window cleaning",
        "Foam cannon spray down",
        "Before and after photos",
      ],
    },
  ];

  const addons = [
    { name: "Carpet Designs", price: "+$15" },
    { name: "Clay Protectant", price: "+$65" },
    { name: "Overhead Drone Photos", price: "+$35" },
  ];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    vehicle: "",
    service: "Full Detail - $150",
    notes: "",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">

      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">

            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
                <Sparkles className="h-4 w-4" /> Premium Mobile Detailing
              </div>

              <h1 className="text-4xl font-black tracking-tight md:text-6xl">
                {business.name}
              </h1>

              <p className="mt-4 max-w-xl text-lg text-neutral-300 md:text-xl">
                {business.tagline}
              </p>

              <div className="mt-6 flex flex-col gap-3 text-neutral-300">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span>{business.phoneDisplay}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span>{business.serviceArea}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#booking">
                  <Button className="rounded-2xl px-6 py-6 text-base font-bold">
                    Book Now
                  </Button>
                </a>
                <a href={`tel:${business.phoneLink}`}>
                  <Button
                    variant="outline"
                    className="rounded-2xl border-white/20 bg-transparent px-6 py-6 text-base text-white hover:bg-white hover:text-black"
                  >
                    Call Now
                  </Button>
                </a>
              </div>
            </div>

            <Card className="rounded-3xl border-white/10 bg-white/5 text-white shadow-2xl">
              <CardContent className="p-6 md:p-8">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-950 p-6">
                  <div className="flex h-full flex-col justify-between">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm text-neutral-200">
                      <Car className="h-4 w-4" /> Elite Auto Detailing
                    </div>
                    <div>
                      <p className="text-3xl font-black">Clean. Glossy. Ready.</p>
                      <p className="mt-3 max-w-sm text-neutral-300">
                        Swap this section with your favorite photo once you’re ready.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Simple pricing. Clean results.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">

          <div className="flex flex-col gap-6">
            {services.map((service) => (
              <Card key={service.title} className="rounded-3xl border-white/10 bg-white/5 text-white">
                <CardContent className="p-8">

                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="mt-2 text-neutral-300">{service.description}</p>
                    </div>

                    <div className="rounded-2xl bg-white px-5 py-3 text-center text-black">
                      <p className="text-sm uppercase">Starting at</p>
                      <p className="text-3xl font-black">{service.price}</p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {service.includes.map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-3 text-neutral-200">
                        <CheckCircle2 className="h-5 w-5" />
                        {item}
                      </div>
                    ))}
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="rounded-3xl border-white/10 bg-white/5 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold">Add-Ons</h3>
              <div className="mt-6 space-y-4">
                {addons.map((addon) => (
                  <div key={addon.name} className="flex justify-between border border-white/10 p-4 rounded-2xl">
                    <span>{addon.name}</span>
                    <span className="font-bold">{addon.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">

          <Card className="rounded-3xl border-white/10 bg-white/5 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-black">Book Your Detail</h2>

              <form action="https://formspree.io/f/xnjlgblj" method="POST" className="mt-8 space-y-4">
                <input name="name" placeholder="Your name" className="w-full p-3 rounded-2xl bg-black/30" />
                <input name="phone" placeholder="Phone number" className="w-full p-3 rounded-2xl bg-black/30" />
                <input name="vehicle" placeholder="Vehicle" className="w-full p-3 rounded-2xl bg-black/30" />

                <Button type="submit" className="w-full py-6">
                  Submit Booking Request
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid gap-6">

            <Card className="rounded-3xl border-white/10 bg-white/5 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold">Contact</h3>
                <p>{business.phoneDisplay}</p>
                <p>{business.serviceArea}</p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-white/10 bg-white/5 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold">Important</h3>
                <p>All times are subject to change.</p>
                <p className="font-bold text-yellow-400">
                  ⚠️ Weekend bookings will have a higher confirmation rate
                </p>
              </CardContent>
            </Card>

          </div>

        </div>
      </section>

    </div>
  );
}