import { useEffect, useRef, useState } from "react";
import "./styles.css";

function Carousel({ items, renderItem }) {
  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxScrollLeft, setMaxScrollLeft] = useState(0);

  useEffect(() => {
    setMaxScrollLeft(
      containerRef.current?.scrollWidth - containerRef.current?.clientWidth
    );
    setScrollLeft(0);
    containerRef.current?.scrollTo({
      left: 0,
      top: 0,
    });
  }, [items]);

  function clickLeft() {
    containerRef.current?.scrollTo({
      left: containerRef.current?.scrollLeft - 200,
      top: 0,
      behavior: "smooth",
    });
    setScrollLeft(containerRef.current?.scrollLeft - 200);
    setMaxScrollLeft(
      containerRef.current?.scrollWidth - containerRef.current?.clientWidth
    );
  }

  function clickRight() {
    containerRef.current?.scrollTo({
      left: containerRef.current?.scrollLeft + 200,
      top: 0,
      behavior: "smooth",
    });
    setScrollLeft(containerRef.current?.scrollLeft + 200);
    setMaxScrollLeft(
      containerRef.current?.scrollWidth - containerRef.current?.clientWidth
    );
  }

  return (
    <div className="carousel">
      <article ref={containerRef} className="flex-container">
        {items.map((item) => renderItem(item))}
      </article>

      {scrollLeft > 0 && (
        <button
          onClick={() => clickLeft()}
          className="carouselBtn"
          id="btn-left"
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
      )}
      {scrollLeft <= maxScrollLeft && (
        <button
          onClick={() => clickRight()}
          className="carouselBtn"
          id="btn-right"
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      )}
    </div>
  );
}

export default Carousel;
