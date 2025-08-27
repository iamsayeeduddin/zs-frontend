import CategoryItem from "./CategoryItem";

const CategoriesSection = () => {
  const designers = [
    { id: 1, name: "five", image: "five.jpg" },
    { id: 2, name: "RNG SAFAWALA", image: "luxury category 2.jpg" },
    { id: 3, name: "BLONI", image: "luxury category 3.png" },
    { id: 4, name: "PHILOCALY", image: "banner.jpg" },
  ];

  return (
    <div style={{ backgroundColor: "#f7f4ed" }}>
      <div className="flex flex-col lg:flex-row gap-4 mx-auto w-[95%] px-2 sm:px-4">
        {/* ───────── first 4 images ───────── */}
        <div className="max-w-screen-xl mx-auto flex py-6 lg:py-10 min-h-[400px] lg:h-[50rem] gap-4 lg:gap-8 w-full lg:w-auto">
          {/* column 1 */}
          <div className="flex flex-col gap-4 lg:gap-8 w-1/2">
            {["five.jpg", "four.jpg"].map((src) => (
              <div
                key={src}
                className="flex items-center justify-center h-[180px] sm:h-[220px] lg:h-[300px] w-full
                           bg-white rounded-xl shadow"
              >
                <img
                   src={`/src/assets/${src}`}
                  alt={designers[1].name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>

          {/* column 2 */}
          <div className="flex flex-col gap-4 lg:gap-8 w-1/2">
            {["three.jpg", "Image11.jpg"].map((src) => (
              <div
                key={src}
                className="flex items-center justify-center h-[180px] sm:h-[220px] lg:h-[300px] w-full
                           bg-white rounded-xl shadow"
              >
                <img
                  src={`/src/images/${src}`}
                  alt={designers[1].name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ───────── centre feature card ───────── */}
        <div className="max-w-screen-xl mx-auto py-6 lg:py-10 min-h-[300px] lg:h-[50rem] flex items-baseline justify-center">
          <div className="flex justify-center items-center w-full">
            <CategoryItem
              categoryTitle="Special Edition"
              image="image20.jpg"
              link="special-edition"
            />
          </div>
        </div>

        {/* ───────── second 4 images ───────── */}
        <div className="max-w-screen-xl mx-auto flex py-6 lg:py-10 min-h-[400px] lg:h-[50rem] gap-4 lg:gap-8 w-full lg:w-auto">
          {/* column 1 */}
          <div className="flex flex-col gap-4 lg:gap-8 w-1/2">
            {["six.jpg", "seven.jpg"].map((src) => (
              <div
                key={src}
                className="flex items-center justify-center h-[180px] sm:h-[220px] lg:h-[300px] w-full
                           bg-white rounded-xl shadow"
              >
                <img
                  src={`/src/images/${src}`}
                  alt={designers[1].name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>

          {/* column 2 */}
          <div className="flex flex-col gap-4 lg:gap-8 w-1/2">
            {["Image7.jpg", "Image9.jpg"].map((src) => (
              <div
                key={src}
                className="flex items-center justify-center h-[180px] sm:h-[220px] lg:h-[300px] w-full
                           bg-white rounded-xl shadow"
              >
                <img
                  src={`/src/images/${src}`}
                  alt={designers[1].name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
