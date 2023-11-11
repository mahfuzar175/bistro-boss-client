import { Parallax } from 'react-parallax';
const Cover = ({img, title, description}) => {
  return (
    <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
        <div
      className="hero h-[450px]"
      >
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md hero-overlay bg-opacity-50 p-6">
          <h1 className="mb-5 text-5xl font-bold uppercase font-serif">{title}</h1>
          <p className="mb-5 uppercase font-serif">
            {description}
          </p>
        </div>
      </div>
    </div>
    </Parallax>

    
  );
};

export default Cover;
