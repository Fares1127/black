import { FaUser } from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import { MdTrendingFlat } from "react-icons/md";
import { MdTimer } from "react-icons/md";
import { RiPointerLine } from "react-icons/ri";
import { FaFingerprint } from "react-icons/fa";
import { RiInformationFill } from "react-icons/ri";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";

const DashboardEmpDemandeCongé = () => {
  return (
    <div className="  text-black font-sans  flex flex-col bg-slate-100 w-[1200px] h-[820px]">
      <div className="flex flex col justify-between mt-5">
        <h1 className="text-4xl font-bold ml-80"> Welcome User</h1>
      </div>

      <div className="bg bg-white rounded-sm w-[850px]  ml-72  absolute mt-16 h-[] ">
        <div className="flex  justify-between "></div>
        <div class="bg-white rounded-lg shadow-lg p-6">
          <button
            type="submit"
            class=" bg-blue-500 text-white font-bold rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
          <h2 class="text-2xl font-bold mb-6 mt-10">Demande de congé</h2>
          <form class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            <div>
              <label
                for="nom"
                class="block text-gray-700 font-bold mb-2 placeholder:text-black"
              >
                Nom :
              </label>
              <input
                type="text"
                placeholder="Nom..."
                id="nom"
                name="nom"
                class="w-full bg-gray-200 p-2 rounded-md focus:outline-none placeholder:text-black focus:bg-white focus:border-blue-400"
                required
              />
            </div>

            <div>
              <label for="prenom" class="block text-gray-700 font-bold mb-2">
                Prénom :
              </label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                placeholder="prénom..."
                class="w-full bg-gray-200 p-2 rounded-md placeholder:text-black focus:outline-none focus:bg-white focus:border-blue-400"
                required
              />
            </div>

            <div>
              <label
                for="date_debut"
                class="block text-gray-700 font-bold mb-2"
              >
                Date de début :
              </label>
              <input
                type="date"
                id="date_debut"
                name="date_debut"
                class="w-full bg-gray-200 p-2 rounded-md focus:outline-none focus:bg-white focus:border-blue-400"
                required
              />
            </div>

            <div>
              <label for="date_fin" class="block text-gray-700 font-bold mb-2">
                Date de fin :
              </label>
              <input
                type="date"
                id="date_fin"
                name="date_fin"
                class="w-full bg-gray-200 p-2 rounded-md focus:outline-none focus:bg-white focus:border-blue-400"
                required
              />
            </div>

            <div>
              <label
                for="type_conge"
                class="block text-gray-700 font-bold mb-2"
              >
                Type de congé :
              </label>
              <select
                id="type_conge"
                name="type_conge"
                class="w-full bg-gray-200 p-2 rounded-md focus:outline-none focus:bg-white focus:border-blue-400"
                required
              >
                <option value="">Sélectionnez un type de congé</option>
                <option value="annuel">Congé annuel</option>
                <option value="maladie">Congé maladie</option>
                <option value="maternite">Congé son solde</option>
              </select>
            </div>

            <div class="col-span-2">
              <label for="motif" class="block text-gray-700 font-bold mb-2">
                Motif :
              </label>
              <textarea
                id="motif"
                name="motif"
                placeholder="Motif..."
                class="w-full bg-gray-200 p-2 placeholder:text-black rounded-md focus:outline-none focus:bg-white focus:border-blue-400"
                rows="3"
                required
              ></textarea>
            </div>

            <div class="col-span-2">
              <button
                type="submit"
                class="py-2 px-4 ml-96 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="sidebar absolute mt-24 flex flex-col   top-0 bottom-0 lg:left-0 left-[-300px] duration-1000 p-2 mr-56 w-[250px] text-center bg-white h-[800px] text-black">
        <div class="text-black-100 text-xl flex flex-col">
          <div class="sidebar absolute  mr-96 flex flex-col   top-0 bottom-0 lg:left-0 left-[200px] duration-1000  mr-56 w-[250px] text-center bg-white h-[1110px] text-black">
            <div class="text-black-100 text-xl flex flex-col">
              <div className="w-80 flex flex-col justify-start ml-10   ">
                <h5 className="font-bold text-black text-sm mr-64">menu</h5>
                <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  ">
                  <button class=" text-black font-bold py-2 px-4  font-sans rounded border-none hover:bg-blue-600 hover:text-white hover:  flex flex-row items-center justify-content p-5 ">
                    {" "}
                    <MdIcons.MdDashboard className="font-sans" />
                    Dashboard
                  </button>
                </div>
                <div class="p-2.5 mt-2 flex items-center  rounded-md px-4 duration-300 cursor-pointer   ">
                  <button class=" text-black font-bold font-sans w-36 py-2 px-4 rounded border-none hover:bg-blue-600 hover:text-white hover:  flex flex-row items-center justify-content p-5 ">
                    {" "}
                    <MdTimer />
                    Congé
                  </button>
                </div>
                <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  ">
                  <button class=" text-black font-bold py-2 font-sans px-4 rounded border-none hover:bg-blue-600 hover:text-white hover: w-36  flex flex-row items-center justify-content p-5 ">
                    {" "}
                    <RiEyeLine />
                    Pointage
                  </button>
                </div>
                <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer ">
                  <div
                    class="flex justify-between w-full items-center"
                    onclick="dropDown()"
                  >
                    <button class=" text-black font-bold py-2 px-4 rounded border-none w-40 font-sans hover:bg-blue-600 hover:text-white hover: w-36 flex flex-row items-center justify-content p-5 ">
                      {" "}
                      <RiInformationFill />
                      Mes infos
                    </button>
                  </div>
                </div>
                <h5 className="font-bold text-black text-sm mr-64 mt-5">
                  Apperance
                </h5>

                <button class=" text-black font-bold py-2 px-4 rounded font-sans ml-4 mt-8 border-none hover:bg-blue-600 hover:text-white hover: w-36 flex flex-row items-center justify-content p-5 ">
                  {" "}
                  <FaFingerprint />
                  Pointer
                </button>

                <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer">
                  <button class=" text-black font-bold py-2 px-4 rounded font-sans border-none hover:bg-blue-600 hover:text-white hover: w-36 flex flex-row items-center justify-content p-5 ">
                    {" "}
                    <RiLogoutCircleRLine />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-r-red-600"></div>
    </div>
  );
};

export default DashboardEmpDemandeCongé;