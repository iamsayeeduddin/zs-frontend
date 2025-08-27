const FourSectionLayout = () => {
  const sectionDetails = [
    { id: 5, title: "Men's Accessories Guide", thumbnail: "six.jpg" },
    { id: 6, title: "Women's Footwear Collection", thumbnail: "two.jpg" },
    { id: 7, title: "Summer Hats and Scarves", thumbnail: "three.jpg" },
    { id: 8, title: "Denim Styling Tips", thumbnail: "four.jpg" },
  ];

  return (
    <div className="py-8 bg-[#f7f4ed]">
      <div className="mx-auto w-[95%] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectionDetails.map(({ id, title, thumbnail }) => (
            <article key={id} className="group">
              <div className="relative overflow-hidden rounded">
                <img
                   src={`/src/assets/${thumbnail}`}
                  alt={title}
                  className="w-full h-80 sm:h-96 object-cover object-top  /* keep faces visible */
             transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[rgba(235,117,141,.7)] to-transparent pointer-events-none" />
              </div>

              <h2 className="mt-3 text-center text-gray-800 font-semibold text-sm sm:text-base">
                {title}
              </h2>
            </article>

          ))}
        </div>
      </div>
    </div>
  );
};

export default FourSectionLayout;
