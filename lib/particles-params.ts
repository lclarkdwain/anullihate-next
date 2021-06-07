import { RecursivePartial } from 'tsparticles/dist/Types/RecursivePartial'
import {
  ClickMode,
  HoverMode,
  InteractivityDetect,
  MoveDirection,
  OutMode,
  ShapeType,
} from 'tsparticles/dist/Enums'
import type { IOptions } from 'tsparticles/dist/Options/Interfaces/IOptions'
import {
  InlineArrangement as PolygonMaskInlineArrangement,
  IPolygonMaskOptions,
  MoveType as PolygonMaskMoveType,
  Type as PolygonMaskType,
} from 'tsparticles/dist/Plugins/PolygonMask/PolygonMaskPlugin'
import { IAbsorberOptions } from 'tsparticles/dist/Plugins/Absorbers/AbsorbersPlugin'
import { IEmitterOptions } from 'tsparticles/dist/Plugins/Emitters/EmittersPlugin'

export const simple: RecursivePartial<
  IOptions & IPolygonMaskOptions & IAbsorberOptions & IEmitterOptions
> = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        area: 1200,
      },
    },
    size: {
      value: 2,
    },
    color: {
      value: '#000000',
    },
    shape: {
      type: ShapeType.circle,
      polygon: {
        sides: 5,
      },
      image: {
        src: '',
        width: 100,
        height: 100,
      },
    },
    links: {
      color: '#000000',
    },
    move: {
      speed: 1,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: [HoverMode.bubble, HoverMode.grab],
      },
    },
    modes: {
      grab: {
        distance: 200,
        links: {
          opacity: 0.2,
        },
      },
      bubble: {
        size: 20,
        distance: 200,
      },
    },
  },
}

export const polygonMaskDeer = {
  fps_limit: 28,
  particles: {
    collisions: {
      enable: false,
    },
    number: {
      value: 200,
      density: {
        enable: false,
      },
    },
    color: '#000000',
    line_linked: {
      color: '#000000',
      enable: true,
      distance: 50,
      opacity: 0.4,
    },
    move: {
      speed: 1,
    },
    opacity: {
      anim: {
        enable: true,
        opacity_min: 0.05,
        speed: 1,
        sync: false,
      },
      value: 0.4,
    },
  },
  polygon: {
    enable: true,
    scale: 1,
    type: 'inline',
    move: {
      radius: 10,
    },
    url: '/deer.svg',
    inline: {
      arrangement: 'equidistant',
    },
    draw: {
      enable: true,
      stroke: {
        // color: 'rgba(255, 255, 255, .2)',
        color: '#000000',
      },
    },
  },
  retina_detect: false,
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'bubble',
      },
    },
    modes: {
      bubble: {
        size: 6,
        distance: 40,
      },
    },
  },
}
