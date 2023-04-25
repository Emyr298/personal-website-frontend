import { useEffect, useState } from "react";
import { UserBox, DetailBox } from "./module-elements";
import axios from "axios";
import { ContactResponse, GeneralDataResponse, UserBoxData } from "./interface";
import { toast } from "react-toastify";
import Head from "next/head";

export const HomeModule = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserBoxData|null>(null);
  
  useEffect(() => {
    setLoading(true);
    
    const fetchData = async () => {
      try {
        const generalResponse = await axios<GeneralDataResponse>({
          method: 'get',
          url: `${process.env.NEXT_PUBLIC_APP_API_URL}/about/`,
        });
        const generalData = generalResponse.data;
        
        const contactsResponse = await axios<ContactResponse[]>({
          method: 'get',
          url: `${process.env.NEXT_PUBLIC_APP_API_URL}/about/contacts/`
        });
        const contacts = contactsResponse.data;
        
        const newData: UserBoxData = {
          name: generalData.name,
          imageUrl: generalData.image_url,
          contacts: contacts.map((contact) => {
            return {
              name: contact.platform_name,
              url: contact.url,
            };
          }),
        };
        
        setUserData(newData);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        toast('Something went wrong')
      }
    };
    
    fetchData();
  }, []);
  
  return (
    <div className='max-w-screen overflow-x-hidden mt-[52px] p-4 min-h-[calc(100vh-52px)] flex flex-col lg:flex-row lg:justify-evenly items-center'>
      {
        userData ?
        <UserBox
          name={userData.name}
          imageUrl={userData.imageUrl}
          contacts={userData.contacts}
        /> :
        <UserBox
          name=""
          imageUrl=""
          contacts={[]}
        />
      }
      <DetailBox />
    </div>
  );
}
