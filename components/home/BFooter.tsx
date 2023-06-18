import Link from 'next/link';

type Props = {};

const BFooter = (_props: Props) => {
  const _mapLocation = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div>
      <footer className="relative bg-primary mt-4 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Contact Us</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Delhi Pollution Control Committee <br />
                4th and 5th Floor, ISBT Building, <br />
                Kashmere Gate, Delhi-06 <br />
                delhisupersite@gmail.com <br />
              </h5>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Links
                  </span>

                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/about"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/realtime-aqi"
                      >
                        Real-time AQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        AQ Forecast
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-6/12 px-4 ml-auto">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56011.18826777558!2d77.229979!3d28.668722000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x49d30cf732df1dd3!2sDPCC!5e0!3m2!1sen!2sin!4v1663067408348!5m2!1sen!2sin"
                    width="300"
                    height="150"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © All rights reserved | {new Date().getFullYear()}{' '}
                Delhi Pollution Control Committee.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BFooter;
