import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/AuthContext";
import axios from "axios";
import { useContext } from "react";

const ContentCard = ({ license, name, fid, email , url, action,setIsApprove}) => {
  const { user } = useContext(AuthContext);
  console.log(user)
  async function GiveApprove () { 
    console.log("hello "+ fid)
    try {
      await axios.put(`${url}${fid}`,{},{
        headers: { Authorization: "Bearer " + `${user.accessToken}` },
      });
      setIsApprove(true);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="flex max-w-2xl m-2 items-center rounded-md border ">
        <div className="h-full w-full md:h-[200px] md:w-[300px]">
          <img
            src={license}
            alt="License"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div>
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
              {name}
            </h1>
            <p className="mt-3 text-sm text-gray-600">Fisherman ID: {fid}</p>
            <div className="mt-4">Email : {email}</div>
            <div className="mt-3 flex items-center space-x-2">
              <Button onClick={GiveApprove}>{action}</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentCard;
