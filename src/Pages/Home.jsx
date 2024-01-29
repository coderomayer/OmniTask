import {motion} from "framer-motion"
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import 'animate.css';

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="mx-auto">
                <div className="text-center bg-blue-600 p-8 pb-32 md:p-24 md:pb-60">
                    <div className="text-white max-w-3xl mx-auto font-Quicksand pb-6">
                        {/* Replace the text with AnimatedTextCharacter */}

                        <h1 className="animate__animated animate__fadeInDown text-2xl sm:text-4xl md:text-6xl ">
                            Transform Your Learning Journey with <span className="font-bold">OmniTask</span>
                        </h1>

                        

                        <p className=" animate__animated animate__fadeInUp text-xs md:text-lg my-8 md:max-w-lg mx-auto">
                            Effortlessly manage tasks, stay organized, and achieve academic
                            success. OmniTask is your all-in-one task management platform
                            designed for students, educators, and professionals.
                        </p>

                        <div className="animate__animated animate__fadeInUp flex gap-4 justify-center">
                            <Link to="/about" className={buttonVariants({ variant: "outline" })}>
                                Learn More
                            </Link>
                            <Link to="/explore" className={buttonVariants({ variant: "outline" })}>
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="relative p-8 md:p-24 flex items-center justify-center">
                    <img
                        src="https://cdn.dribbble.com/userupload/7448976/file/original-e0522782ef59e437a4915ed5922e51ad.png?resize=2400x1440"
                        alt="App Illustration"
                        className="max-w-72 md:max-w-xl mx-auto rounded-lg shadow-lg absolute bottom-1 md:bottom-6 right-70"
                    />
                </div>

                <div className=" max-w-screen-xl mx-auto p-8 md:p-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-Quicksand">

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-2">Efficient Task Creation:</h2>
                        <p className="text-sm">
                            Quickly create tasks with titles, descriptions, deadlines, and
                            priority levels. OmniTask ensures that you never miss an important
                            assignment.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-2">Intuitive Dashboard:</h2>
                        <p className="text-sm">
                            Your personalized dashboard provides a clear overview of your
                            tasks, categorized into to-do, ongoing, and completed lists.
                            Experience the ease of drag-and-drop functionality for seamless
                            task management.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-2">Collaborative Learning:</h2>
                        <p className="text-sm">
                            OmniTask fosters collaboration by enabling you to connect with
                            peers, create study groups, and engage in shared projects.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
