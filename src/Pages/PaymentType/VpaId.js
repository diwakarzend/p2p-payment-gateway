import React from "react";

export default function VpaId() {   
  return (
    <>      
        <div className="mt-12 relative">
            <div className="group-wrap relative pt-10 pb-14 px-16 rounded-lg border border-grey/10 border-solid">
                <h3 class=" text-15  font-semibold mb-10">Pay by VPA ID</h3>
                <form className="relative mx-auto">
                  <div className="form-group-wrap">
                    <div class="form-group rounded-lg relative border border-grey border-solid">
                      <input
                        id="vpa"
                        type="text"
                        name="amount"
                        class="block p-6 h-[50px] w-full text-15  appearance-none focus:outline-none bg-transparent relative z-10"
                      />
                      <label
                        for="vpa"
                        class="absolute text-15 text-grey top-0 left-0 text-lg bg-white px-6 py-6 rounded-lg duration-300"
                      >
                        Enter VPA ID
                      </label>
                    </div>  
                    <div className="flex align-center mt-5">
                    <button class="bg-blue text-white text-10 py-2 px-4 border-none rounded-3xl shadow mr-2">
                      @Kotak
                    </button>
                    <button class="bg-bodyBg  text-10 py-2 px-4 border-none rounded-3xl shadow mr-2">
                      @okaxis
                    </button>
                    <button class="bg-bodyBg  text-10 py-2 px-4 border-none rounded-3xl shadow mr-2">
                      @hdfc
                    </button>
                    <button class="bg-bodyBg  text-10 py-2 px-4 border-none rounded-3xl shadow mr-2">
                      @okicici
                    </button>
                    </div>
                    <div className="action w-full left-0 flex mt-6">
                      <button className="btn btn-primary bg-red rounded-lg text-white py-3 px-4 text-15 h-[50px] font-semibold w-full">
                        PAY NOW
                      </button>
                    </div>
                  </div>
                </form>     
            </div>
        </div>
    </>
  );
}
