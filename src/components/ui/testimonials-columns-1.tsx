"use client";
import React from "react";
import { motion } from "motion/react";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={`testimonials-column-wrapper ${props.className || ""}`}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="testimonials-motion-div"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="testimonial-card" key={i}>
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, starIdx) => (
                      <span key={starIdx} className="star">★</span>
                    ))}
                  </div>
                  <div className="testimonial-text body-md italic">"{text}"</div>
                  <div className="testimonial-author">
                    <img
                      width={48}
                      height={48}
                      src={image}
                      alt={name}
                      className="testimonial-avatar"
                    />
                    <div className="testimonial-author-info">
                      <div className="testimonial-name">{name}</div>
                      <div className="testimonial-role body-sm">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

