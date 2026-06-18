"use client";

import React from "react";
import { motion } from "framer-motion";

type TimelineItem = {
  year: number | string;
  title: string;
  desc: string;
  image?: string;
};

type Props = {
  timeline: TimelineItem[];
  toPersianNumber?: (n: any) => string;
};

export default function TimelineGodModeLevelUp({
  timeline,
  toPersianNumber = (n) => n,
}: Props) {
  return (
    <section className="relative py-40 overflow-hidden">

      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.15),transparent_45%),radial-gradient(circle_at_bottom,rgba(0,0,0,0.05),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* 🧠 HEADER */}
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-md text-sm text-zinc-600 dark:text-zinc-300">
            ⚽ Football History Archive
          </div>

          <h2 className="mt-6 text-5xl md:text-7xl font-black tracking-tight">
            تاریخ فوتبال جهان
          </h2>

          <p className="mt-6 text-zinc-500 max-w-2xl mx-auto text-lg leading-8">
            روایت لحظه‌هایی که فوتبال را به یک امپراتوری جهانی تبدیل کردند
          </p>
        </div>

        {/* ⚡ TIMELINE CORE */}
        <div className="relative">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-green-500 via-emerald-400 to-transparent opacity-70" />

          <div className="space-y-28">

            {timeline.map((item, index) => {
              const left = index % 2 === 0;

              return (

                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative"
                >

                  {/* NODE */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-10 z-10">
                    <div className="w-4 h-4 rounded-full bg-green-500 shadow-[0_0_35px_rgba(34,197,94,0.8)]" />
                  </div>

                  {/* ROW */}
                  <div className={`flex items-center ${left ? "justify-start" : "justify-end"}`}>

                    <div className={`w-[46%] ${left ? "pr-10" : "pl-10"}`}>

                      {/* CARD */}
                      <div className="group relative rounded-3xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                        {/* IMAGE */}
                        {item.image && (
                          <div className="h-52 overflow-hidden relative bg-zinc-200 dark:bg-zinc-800">
                            <img
                              src={item.image}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          </div>
                        )}

                        {/* CONTENT */}
                        <div className="p-8">

                          {/* YEAR */}
                          <div className={`mb-4 flex ${left ? "justify-end" : "justify-start"}`}>
                            <span className="px-4 py-1 rounded-full bg-green-100 dark:bg-green-950 text-green-700 font-bold text-sm">
                              {toPersianNumber(item.year)}
                            </span>
                          </div>

                          {/* TITLE */}
                          <h3 className="text-2xl md:text-3xl font-black leading-snug">
                            {item.title}
                          </h3>

                          {/* DESC */}
                          <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-8">
                            {item.desc}
                          </p>

                        </div>

                        {/* GLOW */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.12),transparent_65%)]" />

                      </div>

                    </div>

                  </div>

                </motion.div>

              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}