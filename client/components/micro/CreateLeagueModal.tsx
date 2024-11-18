import React from "react";
import { LeagueBtn } from "../ui/button";
import { X } from "lucide-react";

function CreateLeagueModal(props: { close: () => void }) {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <span
              className="absolute right-4 top-3 cursor-pointer hover:bg-slate-600 hover:text-white h-[30px] w-[30px] bg-slate-400 rounded-full flex justify-center items-center"
              onClick={props.close}
            >
              <X size={20} strokeWidth={1.5} />
            </span>
            <div className="flex justify-center  items-center">
              <div className="w-[50%] h-[350px] bg-white pt-7 px-3">
                <p className="text-lg font-medium mb-5">Create League</p>
                <form action="" className="flex flex-col gap-4">
                  <label htmlFor="">League Name</label>
                  <input
                    type="text"
                    className="border border-slate-400 rounded-md h-[35px] focus:outline-none px-1"
                  />
                  <label htmlFor="">Number of Participant</label>
                  <input
                    type="text"
                    className="border border-slate-400 rounded-md h-[35px] focus:outline-none px-1"
                  />
                  <span className="mt-1" />
                  <LeagueBtn
                    text="Create"
                    handler={() => console.log("created")}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateLeagueModal;
