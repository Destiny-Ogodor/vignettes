import { TESTIMONIALS } from "../../constants";
import { FaStar } from "react-icons/fa";

function TestimonialsSection() {
  return (
    <section className="w-full bg-white px-4 pb-14 pt-96 sm:px-6 md:px-12">
      <div>
        <div className="text-center">
          <h5 className="text-sm font-semibold uppercase tracking-wider text-siteRed">
            Our Testimonials
          </h5>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl md:text-5xl">
            Here’s What Our Students Say <br /> About Our Services
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 py-14 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col justify-between rounded-xl bg-stone-100 p-8 text-center shadow-md"
            >
              <div className="mb-4 flex items-start justify-between">
                <img src="/quote2.png" alt="quote" className="h-6 w-6" />
                <div className="text-right">
                  <h4 className="text-base font-semibold text-gray-900">
                    Quality Services
                  </h4>
                  <div className="flex justify-end gap-1 text-siteRed">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>

              <p className="mb-6 text-base text-gray-700">{testimonial.text}</p>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
