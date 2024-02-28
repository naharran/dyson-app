import { useEffect } from "react";
import { ReactComponent as Loader } from "./../assets/loader.svg";
import { checkStatus } from "../service/api";
import { useNavigate } from "react-router-dom";

const LoaderPage = () => {
    const naviget = useNavigate()
    useEffect(() => {
        async function fetchData() {
            // You can await here
            try{
            const {idsLength, initLength} = await checkStatus()
             if(initLength !== idsLength){
                setTimeout(() => fetchData(),5000)
             }
             else{
                naviget("/info")
             }
            }catch(err){
                 console.log(err)
            }
          }
       fetchData()
    },[])
    return (
        <div className='bg-home flex flex-col h-full items-center'>
            <p className="mt-10 text-24 text-black">This might take a few minuets </p>
            <div className="mt-20">
                <Loader />
            </div>
            <p className="mt-10 text-base ps-5 pe-5">
            If every person deleted 10 spam emails, 
they could save 1,725,00 gigabytes of 
storage space and around 55.2 million 
kilowatts of power.
            </p>
        </div>
    );
};

export default LoaderPage;