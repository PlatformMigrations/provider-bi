import { ChartLine } from "@/components/chart-line";
import { Component } from "../components/chart/index";
import 'tailwindcss/tailwind.css';

export default function Basic() {
    return (
        <div className="grid grid-cols-3 gap-2 gap-y-11 grid-rows-[auto]">
            <div className="col-span-2 row-span-1">
                <h2 className="text-4xl">Short term view</h2>
            </div>
            <div className="bg-zinc-100/70 rounded-3xl p-3 col-span-2">
                <div className="rounded-2xl bg-white p-2 px-3 ">
                    <Component />
                </div>
            </div>
            <div className="bg-zinc-100/70 rounded-3xl p-3 grid grid-cols-2 grid-rows-2 gap-3">
                <div className="bg-white w-full h-full rounded-3xl flex flex-col justify-center items-center text-center p-3 gap-2">
                    <h1 className="text-3xl font-bold">0%</h1>
                    <p className="text-sm">KPI performance in the period</p>
                </div>
                <div className="bg-white w-full h-full rounded-3xl flex flex-col justify-center items-center text-center p-3 gap-2">
                    <h1 className="text-3xl font-bold">7,37k</h1>
                    <p className="text-sm">KPI total in the period</p>
                </div>
                <div className="bg-white w-full h-full rounded-3xl flex flex-col justify-center items-center text-center p-3 gap-2">
                    <h1 className="text-3xl font-bold">0</h1>
                    <p className="text-sm">Airtime</p>
                </div>
                <div className="bg-white w-full h-full rounded-3xl flex flex-col justify-center items-center text-center p-3 gap-2">
                    <h1 className="text-3xl font-bold">0</h1>
                    <p className="text-sm">Syncs</p>
                </div>
            </div>
            <div className="bg-zinc-100/70 rounded-3xl p-3 col-span-2">
                <div className="flex items-center justify-center h-full max-h-[200px]">
                    <ChartLine />
                </div>
            </div>
        </div>
    )
}