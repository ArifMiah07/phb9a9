
const Slides = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 to-indigo-500">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img
              src="man-in-suit.jpg"
              alt="Person"
              className="rounded-lg shadow-md"
            />
            <p className="mt-2 text-gray-600">
              [Your Name] was born and raised in [Place of Birth], where they
              spent their formative years exploring the wonders
            </p>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-4">
              <h2 className="text-white text-xl font-bold mb-2">
                Slides of [Your Name]
              </h2>
              <p className="text-gray-300">
                [Your Name], born on [Your Date of Birth], is a multifaceted
                individual whose life journey has been marked by diverse
                experiences, passions, and achievements.
              </p>
              <p className="text-gray-300 mt-4">
                Early Life: <br />
                [Your Name] was born and raised in [Place of Birth], where they
                spent their formative years exploring the wonders of childhood
                and developing a curious mind. From a young age, [Your Name]
                exhibited a keen interest in [mention any early interests or
                hobbies], which laid the foundation for
              </p>
            </div>
            <div className="flex justify-between">
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md">
                &lt;
              </button>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slides;