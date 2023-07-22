import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid';
import { Fragment, useState } from 'react'


const product = {
  name: 'Women Black Shirt',
  description: 'The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee its own look Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.',
  price: '$19.99',
  images: [
    {
      id: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
      id: 2,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg',
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg',
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
  ],
  category: ['Men', 'Women', 'Baby'],
  colors: [
    { name: 'Red', bgColor: 'bg-red-700', selectedColor: 'ring-gray-900' },
    { name: 'Blue', bgColor: 'bg-blue-500', selectedColor: 'ring-gray-400' },
    { name: 'Green', bgColor: 'bg-green-500', selectedColor: 'ring-gray-400' },
  ],
  sizes: [
   
    { name: 'Small', inStock: true },
    { name: 'Medium', inStock: true },
    { name: 'Large', inStock: true },
   
  ],
 
 
};


const reviews = {
  average: 4,
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>Great Quality</p>
      `,
      date: 'July 16, 2021',
      datetime: '2021-07-16',
      author: 'John bing',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    {
      id: 2,
      rating: 3,
      content: `
        <p>Superb!.</p>
      `,
      date: 'July 12, 2021',
      datetime: '2021-07-12',
      author: 'Hector Gibbons',
      avatarSrc:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    
    // More reviews...
  ],
}
const faqs = [
  {
    question: 'Can I customize my style or size',
    answer:
      'Sure! you can customize your style and size',
  },
  {
    question: 'Can it be refund and exchange',
    answer:
      "Yes. We have 7 days refund and exchange policy",
  },
  // More FAQs...
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <main className="mx-auto px-4 pt-14 sm:px-6  sm:pt-16 lg:max-w-7xl lg:px-8">
      {/* Product */}
      <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
        <div className="lg:col-span-4 lg:row-end-1">
          <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100 h-[50%]">
            <img src={selectedImage.imageSrc} alt={selectedImage.imageAlt} className="object-cover object-center  " />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {product.images.map((image) => (
              <button
                key={image.id}
                className={`aspect-h-3 aspect-w-4 rounded-lg overflow-hidden focus:outline-none ${
                  selectedImage.id === image.id ? 'ring-2 ring-indigo-500' : ''
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.imageSrc} alt={image.imageAlt} className="object-cover object-center" />
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
          <div className="flex flex-col-reverse">
            <div className="mt-4">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
              <h2 id="information-heading" className="sr-only">
                Product information
              </h2>
            </div>

            <div>
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                      'h-5 w-5 flex-shrink-0'
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{reviews.average} out of 5 stars</p>
            </div>
          </div>
              {/* Color picker */}
              <div>
              <div className="mt-6">
            <p className="text-xl font-semibold text-gray-900">{product.price}</p>
          </div>
                <h2 className="text-sm font-medium text-gray-900 mt-8">Color</h2>

                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
                  <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedColor,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.bgColor,
                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Size picker */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-900">Size</h2>
                  
                </div>

                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-2">
                  <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        className={({ active, checked }) =>
                          classNames(
                            
                            active ? 'ring-2 ring-indigo-500 ring-offset-2' : '',
                            checked
                              ? 'border-transparent bg-indigo-600 text-white hover:bg-indigo-700'
                              : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50',
                            'flex items-center cursor-pointer justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1'
                          )
                        }
                       
                      >
                        <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>


          <p className="mt-6 text-gray-500">{product.description}</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Buy {product.price}
            </button>
           
          </div>

         

        
          <div className=" mt-16 w-full max-w-5xl lg:col-span-4 lg:mt-0 lg:max-w-none">
        <Tab.Group as="div">
          <div className="border-b border-gray-200">
            <Tab.List className="-mb-px flex space-x-8">
              <Tab
                className={({ selected }) =>
                  classNames(
                    selected
                      ? 'border-indigo-600 text-indigo-600'
                      : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
                    'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                  )
                }
              >
                Customer Reviews
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    selected
                      ? 'border-indigo-600 text-indigo-600'
                      : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
                    'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                  )
                }
              >
                FAQ
              </Tab>
             
            </Tab.List>
          </div>
          <Tab.Panels as={Fragment}>
            <Tab.Panel className="-mb-10">
              <h3 className="sr-only">Customer Reviews</h3>

              {reviews.featured.map((review) => (
                <div key={review.id} className="flex space-x-4 text-sm text-gray-500">
                  <div className="flex-none py-10">
                    <img src={review.avatarSrc} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                  </div>
                  <div className={classNames('flex-1 py-10')}>
                    <h3 className="font-medium text-gray-900">{review.author}</h3>
                    <p>
                      <time dateTime={review.datetime}>{review.date}</time>
                    </p>

                    <div className="mt-4 flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                            'h-5 w-5 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{review.rating} out of 5 stars</p>

                    <div
                      className="prose prose-sm mt-4 max-w-none text-gray-500"
                      dangerouslySetInnerHTML={{ __html: review.content }}
                    />
                  </div>
                </div>
              ))}
            </Tab.Panel>

            <Tab.Panel className="text-sm text-gray-500">
              <h3 className="sr-only">Frequently Asked Questions</h3>

              <dl>
                {faqs.map((faq) => (
                  <Fragment key={faq.question}>
                    <dt className="mt-10 font-medium text-gray-900">{faq.question}</dt>
                    <dd className="prose prose-sm mt-2 max-w-none text-gray-500">
                      <p>{faq.answer}</p>
                    </dd>
                  </Fragment>
                ))}
              </dl>
            </Tab.Panel>

           
          </Tab.Panels>
        </Tab.Group>
      </div>
        </div>
      </div>

  
    </main>
  );
}
