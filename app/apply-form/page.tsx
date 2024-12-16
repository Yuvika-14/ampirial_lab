import Link from "next/link";

export default function WebInternApplication() {
  return (
    <div className = " ml-2  mr-2 min-h-screen  bg-gray-100 p-6 md:p-12">
      {/* Full-width Pink Header Section */}
      <header className=" text-white m-2 ">
        <h1 className="text-2xl text-black font-semibold">Apply for this job </h1>
       
      </header>
      <button className = "p-3 ml-6 mb-6 bg-blue-700 text-white  font-semibold rounded-3xl">
      <a 
        href="https://www.linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-white">
         Apply With LinkedIn
        </a>
        </button>
      {/* Main Content */}
      <div className =" mb-2 p-2 border-t-2"></div>
      <form  className="space-y-4">
          <div>
            <label className="block font-semibold mb-1" htmlFor="firstName">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
             className = " w-1/2 bg-white-300 rounded-sm border-b-2 border-b-black "
              required
              
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="firstName">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
             className = " w-1/2 bg-white-300 rounded-sm border-b-2 border-b-black "
              required
              
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="firstName">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="email"
              id="email"
             className = " w-1/2 bg-white-300 rounded-sm border-b-2 border-b-black "
              required
              
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="firstName">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
             className = " w-1/2 bg-white-300 rounded-sm border-b-2 border-b-black "
              required
              
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 gap-2" htmlFor="firstName">
              Resume 
              
              
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder = "Dropbox"
             className = " w-1/2 bg-white-300 rounded-sm border-b-2 border-b-black placeholder:text-center "
              required
              
            />
          </div>
          <div className =" mb-2 p-2 border-t-2"></div>
          <div>
            <label className="block font-semibold mb-1 gap-2" htmlFor="firstName">
            Linkedin Profile
              
              
            </label>
            <input
              type="text"
              name="LinkedinProfile"
              id="LinkedinProfile"
             className = " w-1/2 bg-white-300 rounded-sm border-b-2 border-b-black placeholder:text-center "
              required
              
            />
          </div>
          <div>
            <label className="block font-semibold  mb-1 gap-2" htmlFor="firstName">
             Website
              
              
            </label>
            <input
              type="text"
              name="LinkedinProfile"
              id="LinkedinProfile"
             className = " w-1/2 bg-white-300 rounded-sm border-b-2 border-b-black placeholder:text-center "
              required
              
            />
          </div>
          <div>
            <label className="block font-semibold  mb-1 gap-2" htmlFor="firstName">
             How did you hear about us?
              
              
            </label>
            <input
              type="text"
              name="LinkedinProfile"
              id="LinkedinProfile"
             className = " w-1/2 bg-white-300 rounded-sm border-b-2 border-b-black placeholder:text-center "
              required
              
            />
          </div>
          <div>
            <label className="block font-semibold  mb-1 gap-2" htmlFor="firstName">
              Full Name of College <span className="text-red-500">*</span>
              
              
            </label>
            <input
              type="text"
              name="LinkedinProfile"
              id="LinkedinProfile"
             className = " w-1/2 bg-white-300 rounded-sm border-b-2 border-b-black placeholder:text-center "
              required
              
            />
          </div>
          <div>
            <label className="block font-semibold  mb-1 gap-2" htmlFor="firstName">
              Companies interened previously<span className="text-red-500">*</span>
              
              
            </label>
            <textarea
             
              name="LinkedinProfile"
              id="LinkedinProfile"
             className = " w-1/2 bg-white-300 rounded-sm border-b-2 border-b-black placeholder:text-center "
              required
              rows = "3"
            />
          </div>
          <div className =" mb-2 p-2 border-t-2"></div>
          <div className="flex justify-between p-4">

            <button className="ml-auto  bg-green-400 p-2 text-white font-semibold rounded-md" type="submit">
              Submit Application
            </button>
        </div>
        </form>
    </div>
    
  );
}
