import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const stats = [
  {
    id: 1,
    name: "Transactions every 24 hours",
    value: "10",
    suffix: "$",
    prefix: " million",
  },
  {
    id: 2,
    name: "Assets under holding",
    value: "100",
    suffix: "$",
    prefix: " trillion",
  },
  {
    id: 3,
    name: "New users annually",
    value: "10000",
    suffix: "",
    prefix: "",
  },
];

export default function Example() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="bg-white py-7 lg:pb-0.5 sm:py-35 pb-14 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-gray-600 dark:text-cyan-400">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight dark:text-cyan-100 text-gray-900 sm:text-5xl">
                  {stat.suffix}
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2}
                      delay={0}
                    />
                  )}
                  {stat.prefix}+
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </ScrollTrigger>
  );
}
