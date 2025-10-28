import { MdSignalWifiStatusbarConnectedNoInternet2 } from "react-icons/md";


export const OfflineInfo = () => {
  return (
    <div className='h-[100vh] w-full flex justify-center items-center'>
      
      <div className="flex gap-2 items-center p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-400" role="alert">
       
      <MdSignalWifiStatusbarConnectedNoInternet2 className='text-2xl' />
      <span className="sr-only">Info</span>
      
      <div>
        <span className="font-medium">You are offline.</span> The app needs an internet connection to function properly and connect to databases.
      </div>

      </div>
    </div>
  )
}

export default OfflineInfo
