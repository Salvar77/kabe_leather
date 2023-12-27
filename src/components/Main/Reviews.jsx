import Slider from "react-slick";
import Link from "next/link";
import classes from "./Reviews.module.scss";
import Image from "next/image";
import picture1 from "../../assets/image/furniture_640.jpg";
import picture2 from "../../assets/image/furniture_640.jpg";
import picture3 from "../../assets/image/furniture_640.jpg";

const reviewsData = [
  {
    id: "review1",
    image: picture1,
    description: "Super	",
    title: "Albert Kowalski",
  },
  {
    id: "review2",
    image: picture2,
    description: "The best of",
    title: "Krystian Nowak",
  },
  {
    id: "review3",
    image: picture3,
    description: "Najlepsza obsługa, 10/10",
    title: "Marzena Nowicka",
  },
];

const Review = ({ imgSrc, alt, text, name }) => {
  return (
    <div className={classes.reviews__box}>
      <div className={classes.reviews__boxImg}>
        <Image src={imgSrc} alt={alt} />
      </div>
      <div className={classes.reviews__boxInfo}>
        <div className={classes.reviews__boxQuote}>
          <i className="fas fa-quote-right"></i>
        </div>
        <p className={classes.reviews__boxText}>{text}</p>
        <p>
          <strong className={classes.reviews__strong}>{name}</strong>
        </p>
      </div>
    </div>
  );
};

export default function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={classes.reviews}>
      <Slider {...settings}>
        {reviewsData.map((review) => (
          <Review
            key={review.id}
            imgSrc={review.image}
            alt={review.title}
            text={review.description}
            name={review.title}
          />
        ))}
      </Slider>
      <div className={classes.linkWrapper}>
        <Link href={`/Reviews/${reviewsData[1].id}`}>
          <button className={classes.reviews__btn}>
            Zobacz wszystkie opinie
          </button>
        </Link>
      </div>
    </div>
  );
}
