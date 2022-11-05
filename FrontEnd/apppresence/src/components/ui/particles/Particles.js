import React, { Fragment } from "react";

import { StyledParticles } from "./particlesStyles";

const primaryParams = {
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
        value_area: 100
      }
    },
    line_linked: {
      enable: true,
      distance: 90,
      opacity: 0.5
    },
    move: {
      direction: "right",
      random: false,
      straight: true,
      speed: 0.1,
      bounce: false,
      out_mode: "out"
    },
    size: {
      value: 1.75,
      random: true
    },
    opacity: {
      value: 2,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.05
      }
    }
  },
  interactivity: {

    modes: {
      push: {
        particles_nb: 1
      },
      grab: {
        distance: 75,
        line_linked: {
          opacity: 1
        }
      }
    }
  },
  retina_detect: true
};

const secondaryParams = {
  particles: {
    number: {
      value: 75,
      density: {
        enable: true,
        value_area: 100
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      direction: "right",
      random: false,
      straight: true,
      speed: 0.2,
      bounce: false,
      out_mode: "out"
    },
    size: {
      value: 1.25,
      random: true
    },
    opacity: {
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.15
      }
    }
  },
  retina_detect: true
};

export const Particles = React.memo(() => (
  <Fragment >
    <StyledParticles  params={primaryParams} />
    <StyledParticles  params={secondaryParams} secondary={1} />
  </Fragment>
));
