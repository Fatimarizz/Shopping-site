import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function MainSection() {
    return (
      <div>
        {/* Featured section */}
        <section aria-labelledby="cause-heading">
          <div className="relative px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
            <div className="absolute inset-0 opacity-[0.8] overflow-hidden">
              {/* Image Slider */}
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000} 
                stopOnHover={true}
                showThumbs={false}
              >
                <div>
                  <img src="/pic1.jpg" alt="" />
                </div>
                <div>
                  <img src="/pic3.jpg" alt="" />
                </div>
                <div>
                  <img src="/pic3.jpeg" alt="" />
                </div>
              </Carousel>
            </div>
           
            <div aria-hidden="true" className="absolute inset-0 bg-gray-900 bg-opacity-50" />
            {/* Content */}
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2 id="cause-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Clothing Gallery 
              </h2>
              <p className="mt-3 text-xl text-white">
                We`&apos;`re committed to responsible, sustainable, and ethical manufacturing. Our small-scale approach allows us to
                focus on quality and reduce our impact. We`&apos;`re doing our best to delay the inevitable heat-death of the universe.
              </p>
              <a
                href="#"
                className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
              >
               Explore More
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
  