"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import PortfolioDetails from "./PortfolioDetails";
const PortfolioItem = ({
  id,
  name,
  description,
  imagesLength,
  technologies,
  url,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleShow = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div className={styles.portfolioItem}>
      <Image
        src={`/assets/projects/${id}/main.png`}
        alt="main-img"
        width={800}
        height={450}
        onClick={toggleShow}
      />
      <button onClick={toggleShow}>{name}</button>
      {showDetails && (
        <PortfolioDetails
          close={toggleShow}
          id={id}
          name={name}
          description={description}
          imagesLength={imagesLength}
          technologies={technologies}
          url={url}
        />
      )}
    </div>
  );
};

export default PortfolioItem;
