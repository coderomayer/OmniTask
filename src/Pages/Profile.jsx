import { userAuth } from "@/Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

import { useContext } from "react";

const Profile = () => {

    const {user} = useContext(userAuth)

    const {data: userData, isLoading } = useQuery ({

        queryKey: ['userData', user?.email],
        queryFn: async () => {
            const response = await fetch (`https://omni-task-server.vercel.app/users?email=${user?.email}`)
            const data = await response.json()
            return data;
        }

    })

    if (isLoading) {
        return ('Loading...')
    }

    
    return (
        <div className="p-24 flex items-center justify-center text-black">
            <div>
                {userData ? (
                    <>
                        <h1>{userData.name}</h1>
                        <h1>{userData.email}</h1>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
    
}

export default Profile;