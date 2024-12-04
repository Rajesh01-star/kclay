import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 bg-offWhite">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-clayBrown mb-8 text-center">
          About Our Studio
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg"
              alt="Pottery studio"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />{" "}
          </div>
          <div className="md:w-1/2">
            <p className="text-charcoal mb-4">
              At Clay Creations, we believe in the transformative power of
              working with clay. Our studio provides a nurturing environment for
              both beginners and experienced potters to explore their creativity
              and develop their skills.
            </p>
            <p className="text-charcoal">
              With state-of-the-art equipment and passionate instructors, we
              offer a range of classes suitable for all levels. Join us in
              discovering the joy of creating beautiful, functional pottery with
              your own hands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
