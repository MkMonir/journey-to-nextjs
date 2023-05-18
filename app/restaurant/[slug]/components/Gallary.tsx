import Image from "next/image";

const Gallary = ({ images }: { images: string[] }) => {
  return (
    <section id="photos">
      {/* GALLARY */}
      <h1 className="font-medium text-3xl mt-10 mb-7 border-b border-solid border-0 border-gray-300 pb-5">
        {images.length} photo{images.length == 1 ? "" : "s"}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images?.map((image, i) => (
          <div key={i}>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={image}
              width={500}
              height={500}
              alt=""
              priority
            />
          </div>
        ))}
      </div>
      {/* GALLARY */}
    </section>
  );
};

export default Gallary;
