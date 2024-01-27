import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { userAuth } from "@/Provider/AuthProvider.jsx";
import swal from "sweetalert";


const Registration = () => {

    const { createUser, googleLogin } = useContext(userAuth);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        setError('')

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const fileInput = e.target.file;

        


        // Password validation
        if (password.length < 6) {
            setError('Password should be at least 6 characters.');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setError('Password must include at least one uppercase letter.');
            return;
        } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            setError('Password must include at least one special character.');
            return;
        }

        

        // Check if a file is selected
        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            const formData = new FormData();
            formData.append("image", file);

            try {
                // Upload image to ImgBB
                const imgBbResponse = await fetch("https://api.imgbb.com/1/upload?key=e1f54557917787c8f713e52f269624d6", {
                    method: "POST",
                    body: formData,
                });

                const imgBbData = await imgBbResponse.json();

                // Assuming ImgBB response contains a "url" field
                const imageUrl = imgBbData.data.url;

                // Construct user data
                const userData = {
                    name,
                    email,
                    password,
                    file: imageUrl,
                };

                // Send user data to the server
                const serverResponse = await fetch('https://omni-task-server.vercel.app/users', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userData),
                });

                // Check if server response is successful
                if (!serverResponse.ok) {
                    const errorData = await serverResponse.json();
                    throw new Error(errorData.message || "Error uploading user data to the server");
                }

                // Continue with the rest of the registration logic
                console.log("Image uploaded successfully:", imageUrl);
            } catch (error) {
                console.error("Error during registration:", error);
                setError("Error during registration. Please try again.");
                return;
            }
        }


        // Continue with user creation logic
        try {
            const user = await createUser(email, password);
            swal(`Thank You ${user?.displayName}`, 'Your Registration is complete.');
            console.log(user);
            navigate('/task');
        } catch (error) {
            setError(error.message || "Error creating user. Please try again.");
        }
    };


    const handleGoogle = async () => {
        try {
            // Call the Google login function from your authentication context
            const user = await googleLogin();
            
            // You can access user data from the Google login if needed
            console.log("Google user:", user);

            // If you want to store Google user data on your server, you can make an API call here
            // Construct user data
            const userData = {
                name: user.user.displayName,
                email: user.user.email,
                file: user.user.photoURL,
                // Add other relevant fields from the Google user object
            };

            // Send user data to the server
            const serverResponse = await fetch('https://omni-task-server.vercel.app/users', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            // Check if server response is successful
            if (!serverResponse.ok) {
                const errorData = await serverResponse.json();
                throw new Error(errorData.message || "Error uploading Google user data to the server");
            }

            // Continue with any other logic after Google sign-up
            swal(`Thank You ${user?.displayName}`, 'Your Registration is complete.');
            console.log("Google user data uploaded successfully:", userData);
            navigate('/task');
        } catch (error) {
            console.error("Error during Google sign-up:", error);
            setError("Error during Google sign-up. Please try again.");
        }
    

    }



    return (
        <section className="px-8 py-16 md:p-24 bg-slate-100 md:flex items-center justify-center gap-8">

            <div className="flex-1 flex flex-col items-center justify-center ">

                <h2 className="font-DM text-4xl ">Create Your<span className="text-blue-600"> OmniTask </span>Account</h2>

                <p className="py-6 font-Josefin ">Unlock the full potential of OmniTask by creating your account. Join our community of learners, collaborate effortlessly, and elevate your education. Sign up today and experience a new way of managing tasks and achieving academic success with OmniTask.</p>

                <img className="max-w-sm" src='registration.svg' alt="" />
            </div>

            <div className="flex-1 flex items-center justify-center">

                <div className=" bg-slate-300 p-16 rounded-lg ">


                    <form onSubmit={handleRegister} className="flex flex-col gap-6">


                        <input className="w-full py-2 px-6 rounded-lg" type="text" name="name" placeholder="Your Name" required />

                        <input className="w-full py-2 px-6 rounded-lg" type="email" name="email" placeholder="Your Email" required />

                        <input className="w-full block py-2 px-6 rounded-lg border bg-white " type="file" name="file" required />

                        <input className="w-full py-2 px-6 rounded-lg" type="password" name="password" placeholder="Your Passsword" required />

                        <div className="flex gap-2">
                            <input className="py-2 px-6 rounded-lg" type="checkbox" name="acceptTerms" />

                            <p>I accept <a className="text-red-600" href="#">Terms and condition</a> </p>
                        </div>

                        <button className="w-full py-2 px-6 rounded-lg bg-red-600 text-white">Create an account</button>


                        <p>Already have a account? Please <Link className="font-semibold text-red-600 underline" to="/login">Login</Link></p>

                        <div className="my-5">
                            {
                                error && <p className="px-4 py-2 rounded-lg bg-red-700 text-white">{error}</p>
                            }
                        </div>

                    </form>

                    <div>
                    <button onClick={handleGoogle} className="w-full py-2 px-6 rounded-lg bg-slate-100 flex items-center justify-center gap-4"> <FcGoogle></FcGoogle> Sign up with Google</button>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Registration;