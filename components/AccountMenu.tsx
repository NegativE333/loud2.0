import { signOut } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

import useCurrentUser from '@/hooks/useCurrentUser';

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data: currentUser } = useCurrentUser();
  const [greet, setGreet] = useState("");
  var date = new Date();
	var current_time = date.getHours();
  useEffect(() => {
    if(current_time<12){
      setGreet("Good Morning");
    }
    else if(current_time<18){
      setGreet("Good Afternoon");
    }
    else{
      setGreet("Good Evening");
    }
  },[current_time])

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-48 lg:w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 gap-3 items-center w-full">
          <p className="text-white text-sm text-center font-semibold group-hover/item:underline">{greet}, {currentUser?.name}</p>
        </div>
      </div>
      <hr className="bg-gray-600 border-0 h-px my-4" />
      <div onClick={() => signOut()} className="px-3 text-center text-white text-sm hover:underline">
        Sign out of loud
      </div>
    </div>
  )
}

export default AccountMenu;