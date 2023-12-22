const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className=" mx-auto p-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Your App Name</h1>
                    <p className="text-lg mb-8">
                        Your App Name is a collaborative task management platform designed
                        to enhance your learning experience. Get organized, stay focused, and
                        achieve your academic goals.
                    </p>
                    <img
                        src="/path/to/your/image.jpg" // Replace with your image path
                        alt="App Illustration"
                        className="max-w-full rounded-lg shadow-lg mb-8"
                    />
                </div>

                {/* Additional Sections or Components */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Add more sections or components as needed */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-2">Section 1</h2>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-2">Section 2</h2>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-2">Section 3</h2>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
