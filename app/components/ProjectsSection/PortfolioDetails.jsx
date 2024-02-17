import React from "react";
import styles from "./styles.module.scss";
import { Close } from "@/app/assets/icons";
import Slider from "react-slick";
import Image from "next/image";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: styles.slider,
};
const PortfolioDetails = ({
  id,
  name,
  description,
  close,
  imagesLength,
  technologies,
  url,
}) => {
  return (
    <div className={styles.portfolioDetails} onClick={close}>
      <div className="container" onClick={(e) => e.stopPropagation()}>
        <button onClick={close}>
          <Close />
        </button>

        <Slider {...settings}>
          {id !== "tecnovate" && (
            <Image
              src={`/assets/projects/${id}/main.png`}
              alt="project-img"
              width={900}
              height={400}
            />
          )}
          {Array.from({ length: imagesLength }, (_, index) => {
            return (
              <Image
                key={index}
                src={`/assets/projects/${id}/${index + 1}.png`}
                alt="project-img"
                width={900}
                height={400}
              />
            );
          })}
        </Slider>
        <h3>{name}</h3>
        <p>{description}</p>
        <ul>
          <li>
            <span>Technologies used :</span>
            <span>{technologies.join(" , ")}</span>
          </li>
          <li>
            <span>live website :</span>
            <a href={url} target="_blank">
              {url.slice(url.indexOf("//") + 2)}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PortfolioDetails;
