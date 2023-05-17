const Footer = () => {
  return (
    <div className="w-full bg-teal-50 text-lg">
      <div className="container py-8 px-12 mx-auto sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2023{" "}
          <a
            href="https://mkmonir.netlify.app"
            target="_blank"
            className="hover:underline"
          >
            MkMonir
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a
            href="https://www.facebook.com/mkm0n1r/"
            target="_blank"
            className="text-teal-500 hover:text-teal-900"
          >
            <i className="fa-brands fa-facebook"></i>
            <span className="sr-only">Facebook page</span>
          </a>
          <a
            href="https://www.github.com/MkMonir/"
            target="_blank"
            className="text-teal-500 hover:text-teal-900"
          >
            <i className="fa-brands fa-github"></i>
            <span className="sr-only">Github page</span>
          </a>
          <a
            href="https://twitter.com/MkMonir_"
            target="_blank"
            className="text-teal-500 hover:text-teal-900"
          >
            <i className="fa-brands fa-twitter"></i>
            <span className="sr-only">Twitter page</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
