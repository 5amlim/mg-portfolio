import { Data } from "../Data/Data"

export default function Home () {
    return (
        <div className="gap-8 columns-1 sm:columns-2 mt-28 mx-28">
            <div className="mt-10 inline-block">
                <p className="text-5xl ">Hi,</p>
                <p className="text-5xl">I am <span className="text-blue-600">{Data.name}</span></p>
                <p className="text-5xl">{Data.job}</p>
                <button class="mt-10 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Contact
                    </span>
                </button>
            </div>
            <img class="align-middle mx-auto mt-10 rounded-full w-auto" src={Data.img} alt="image description"></img>
        </div>
    )
}