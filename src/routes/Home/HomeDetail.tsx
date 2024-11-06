import { FC } from "react";
import "./HomeDetail.css";

export const HomeDetail: FC = () => {
  const text =
    "Hello there and welcome to my portfolio! I'm a software engineer with 10 years of experience building full-stack applications, most recently using Javascript, React, Express and all the fun libraries the Javascript community can come up with.";

  // {text.split(" ").map((char: string) => {
  //   return <span className="HomeDetail__char">{char}</span>;
  // })}

  return (
    <div className="HomeDetail__container">
      <h2 className="HomeDetail__header">Phil Walker Portfolio</h2>
      <div className="HomeDetail__text">
        <p>
          Hello there and welcome to my portfolio! I'm a software engineer with
          10 years of experience building full-stack applications, most recently
          using Javascript, React, Express and all the fun libraries the
          Javascript community can come up with.
        </p>
        <p>
          I've worked in shipping and logistics, electronic healh records
          management, education, hotel reservatios, car rentals, and attraction
          ticketing, and more.
        </p>
        <p>
          I want to help you build your next project, whatever it may be, on
          whatever platform you want to target.{" "}
          <a href="mailto: impwalker77@pm.me">Email me</a> and let's build
          something great together!
        </p>
      </div>
    </div>
  );
};

export default HomeDetail;
