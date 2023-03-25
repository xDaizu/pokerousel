const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

const COLOR_PRIMARY = '#077BBC'
const COLOR_SECONDARY = '#021B27'
const COLOR_SURFACE = '#FAFDFF'

const COLOR_BUG_TYPE_DEFAULT = '#A8B820'
const COLOR_BUG_TYPE_DARK = '#6D7815'
const COLOR_BUG_TYPE_LIGHT = '#C6D16E'

const COLOR_DARK_TYPE_DEFAULT = '#705848'
const COLOR_DARK_TYPE_DARK = '#49392F'
const COLOR_DARK_TYPE_LIGHT = '#A29288'

const COLOR_DRAGON_TYPE_DEFAULT = '#7038F8'
const COLOR_DRAGON_TYPE_DARK = '#4924A1'
const COLOR_DRAGON_TYPE_LIGHT = '#A27DFA'

const COLOR_ELECTRIC_TYPE_DEFAULT = '#F8D030'
const COLOR_ELECTRIC_TYPE_DARK = '#A1871F'
const COLOR_ELECTRIC_TYPE_LIGHT = '#FAE078'

const COLOR_FAIRY_TYPE_DEFAULT = '#EE99AC'
const COLOR_FAIRY_TYPE_DARK = '#9B6470'
const COLOR_FAIRY_TYPE_LIGHT = '#F4BDC9'

const COLOR_FIGHTING_TYPE_DEFAULT = '#C03028'
const COLOR_FIGHTING_TYPE_DARK = '#7D1F1A'
const COLOR_FIGHTING_TYPE_LIGHT = '#D67873'

const COLOR_FIRE_TYPE_DEFAULT = '#F08030'
const COLOR_FIRE_TYPE_DARK = '#9C531F'
const COLOR_FIRE_TYPE_LIGHT = '#F5AC78'

const COLOR_FLYING_TYPE_DEFAULT = '#A890F0'
const COLOR_FLYING_TYPE_DARK = '#6D5E9C'
const COLOR_FLYING_TYPE_LIGHT = '#C6B7F5'

const COLOR_GHOST_TYPE_DEFAULT = '#705898'
const COLOR_GHOST_TYPE_DARK = '#493963'
const COLOR_GHOST_TYPE_LIGHT = '#A292BC'

const COLOR_GRASS_TYPE_DEFAULT = '#78C850'
const COLOR_GRASS_TYPE_DARK = '#4E8234'
const COLOR_GRASS_TYPE_LIGHT = '#A7DB8D'

const COLOR_GROUND_TYPE_DEFAULT = '#E0C068'
const COLOR_GROUND_TYPE_DARK = '#927D44'
const COLOR_GROUND_TYPE_LIGHT = '#EBD69D'

const COLOR_ICE_TYPE_DEFAULT = '#98D8D8'
const COLOR_ICE_TYPE_DARK = '#638D8D'
const COLOR_ICE_TYPE_LIGHT = '#BCE6E6'

const COLOR_NORMAL_TYPE_DEFAULT = '#A8A878'
const COLOR_NORMAL_TYPE_DARK = '#6D6D4E'
const COLOR_NORMAL_TYPE_LIGHT = '#C6C6A7'

const COLOR_POISON_TYPE_DEFAULT = '#A040A0'
const COLOR_POISON_TYPE_DARK = '#682A68'
const COLOR_POISON_TYPE_LIGHT = '#C183C1'

const COLOR_PSYCHIC_TYPE_DEFAULT = '#F85888'
const COLOR_PSYCHIC_TYPE_DARK = '#A13959'
const COLOR_PSYCHIC_TYPE_LIGHT = '#FA92B2'

const COLOR_ROCK_TYPE_DEFAULT = '#B8A038'
const COLOR_ROCK_TYPE_DARK = '#786824'
const COLOR_ROCK_TYPE_LIGHT = '#D1C17D'

const COLOR_STEEL_TYPE_DEFAULT = '#B8B8D0'
const COLOR_STEEL_TYPE_DARK = '#787887'
const COLOR_STEEL_TYPE_LIGHT = '#D1D1E0'

const COLOR_WATER_TYPE_DEFAULT = '#6890F0'
const COLOR_WATER_TYPE_DARK = '#445E9C'
const COLOR_WATER_TYPE_LIGHT = '#9DB7F5'

module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function sentenceCase({ addUtilities }) {
      addUtilities({
        '.sentence-case': {
          textTransform: 'lowercase',
        },
        '.sentence-case::first-letter': {
          textTransform: 'uppercase',
        },
      })
    }),
    plugin(elevationShadowPlugin),
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: COLOR_PRIMARY,
        },
        'secondary': {
          DEFAULT: COLOR_SECONDARY,
        },
        'surface': {
          DEFAULT: COLOR_SURFACE,
        },
        'type-bug': {
          DEFAULT: COLOR_BUG_TYPE_DEFAULT,
          light: COLOR_BUG_TYPE_LIGHT,
          dark: COLOR_BUG_TYPE_DARK,
        },
        'type-dragon': {
          DEFAULT: COLOR_DRAGON_TYPE_DEFAULT,
          light: COLOR_DRAGON_TYPE_LIGHT,
          dark: COLOR_DRAGON_TYPE_DARK,
        },
        'type-dark': {
          DEFAULT: COLOR_DARK_TYPE_DEFAULT,
          light: COLOR_DARK_TYPE_LIGHT,
          dark: COLOR_DARK_TYPE_DARK,
        },
        'type-electric': {
          DEFAULT: COLOR_ELECTRIC_TYPE_DEFAULT,
          light: COLOR_ELECTRIC_TYPE_LIGHT,
          dark: COLOR_ELECTRIC_TYPE_DARK,
        },
        'type-fairy': {
          DEFAULT: COLOR_FAIRY_TYPE_DEFAULT,
          light: COLOR_FAIRY_TYPE_LIGHT,
          dark: COLOR_FAIRY_TYPE_DARK,
        },
        'type-fighting': {
          DEFAULT: COLOR_FIGHTING_TYPE_DEFAULT,
          light: COLOR_FIGHTING_TYPE_LIGHT,
          dark: COLOR_FIGHTING_TYPE_DARK,
        },
        'type-fire': {
          DEFAULT: COLOR_FIRE_TYPE_DEFAULT,
          light: COLOR_FIRE_TYPE_LIGHT,
          dark: COLOR_FIRE_TYPE_DARK,
        },
        'type-flying': {
          DEFAULT: COLOR_FLYING_TYPE_DEFAULT,
          light: COLOR_FLYING_TYPE_LIGHT,
          dark: COLOR_FLYING_TYPE_DARK,
        },
        'type-ghost': {
          DEFAULT: COLOR_GHOST_TYPE_DEFAULT,
          light: COLOR_GHOST_TYPE_LIGHT,
          dark: COLOR_GHOST_TYPE_DARK,
        },
        'type-grass': {
          DEFAULT: COLOR_GRASS_TYPE_DEFAULT,
          light: COLOR_GRASS_TYPE_LIGHT,
          dark: COLOR_GRASS_TYPE_DARK,
        },
        'type-ground': {
          DEFAULT: COLOR_GROUND_TYPE_DEFAULT,
          light: COLOR_GROUND_TYPE_LIGHT,
          dark: COLOR_GROUND_TYPE_DARK,
        },
        'type-ice': {
          DEFAULT: COLOR_ICE_TYPE_DEFAULT,
          light: COLOR_ICE_TYPE_LIGHT,
          dark: COLOR_ICE_TYPE_DARK,
        },
        'type-normal': {
          DEFAULT: COLOR_NORMAL_TYPE_DEFAULT,
          light: COLOR_NORMAL_TYPE_LIGHT,
          dark: COLOR_NORMAL_TYPE_DARK,
        },
        'type-poison': {
          DEFAULT: COLOR_POISON_TYPE_DEFAULT,
          light: COLOR_POISON_TYPE_LIGHT,
          dark: COLOR_POISON_TYPE_DARK,
        },
        'type-psychic': {
          DEFAULT: COLOR_PSYCHIC_TYPE_DEFAULT,
          light: COLOR_PSYCHIC_TYPE_LIGHT,
          dark: COLOR_PSYCHIC_TYPE_DARK,
        },
        'type-rock': {
          DEFAULT: COLOR_ROCK_TYPE_DEFAULT,
          light: COLOR_ROCK_TYPE_LIGHT,
          dark: COLOR_ROCK_TYPE_DARK,
        },
        'type-steel': {
          DEFAULT: COLOR_STEEL_TYPE_DEFAULT,
          light: COLOR_STEEL_TYPE_LIGHT,
          dark: COLOR_STEEL_TYPE_DARK,
        },
        'type-water': {
          DEFAULT: COLOR_WATER_TYPE_DEFAULT,
          light: COLOR_WATER_TYPE_LIGHT,
          dark: COLOR_WATER_TYPE_DARK,
        },
      },
      fontFamily: {
        display: [
          '"Montserrat Alternates"',
          ...defaultTheme.fontFamily.sans,
          '"Noto Sans Symbols 2"',
        ],
        retro: ['"Pokemon GB"', ...defaultTheme.fontFamily.mono],
        mono: [
          '"Fira Mono"',
          ...defaultTheme.fontFamily.mono,
          '"Noto Sans Symbols 2"',
        ],
        sans: [
          'Montserrat',
          ...defaultTheme.fontFamily.sans,
          '"Noto Sans Symbols 2"',
        ],
      },
      maxHeight: {
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '80v': '80vh',
        '90v': '90vh',
      },
      maxWidth: {
        '10v': '10vw',
        '20v': '20vw',
        '30v': '30vw',
        '40v': '40vw',
        '50v': '50vw',
        '60v': '60vw',
        '70v': '70vw',
        '80v': '80vw',
        '90v': '90vw',
      },
      outline: {
        primary: [`2px solid ${COLOR_PRIMARY}`, '1px'],
      },
    },
  },
}

function elevationShadowPlugin({ addBase }) {
  const elevationValues = [
    {
      ambient: '0px 0px 0px 0px',
      elevation: 0,
      penumbra: '0px 0px 0px 0px',
      umbra: '0px 0px 0px 0px',
    },
    {
      ambient: '0px 1px 3px 0px',
      elevation: 1,
      penumbra: '0px 1px 1px 0px',
      umbra: '0px 2px 1px -1px',
    },
    {
      ambient: '0px 1px 5px 0px',
      elevation: 2,
      penumbra: '0px 2px 2px 0px',
      umbra: '0px 3px 1px -2px',
    },
    {
      ambient: '0px 1px 8px 0px',
      elevation: 3,
      penumbra: '0px 3px 4px 0px',
      umbra: '0px 3px 3px -2px',
    },
    {
      ambient: '0px 1px 10px 0px',
      elevation: 4,
      penumbra: '0px 4px 5px 0px',
      umbra: '0px 2px 4px -1px',
    },
    {
      ambient: '0px 1px 14px 0px',
      elevation: 5,
      penumbra: '0px 5px 8px 0px',
      umbra: '0px 3px 5px -1px',
    },
    {
      ambient: '0px 1px 18px 0px',
      elevation: 6,
      penumbra: '0px 6px 10px 0px',
      umbra: '0px 3px 5px -1px',
    },
    {
      ambient: '0px 2px 16px 1px',
      elevation: 7,
      penumbra: '0px 7px 10px 1px',
      umbra: '0px 4px 5px -2px',
    },
    {
      ambient: '0px 3px 14px 2px',
      elevation: 8,
      penumbra: '0px 8px 10px 1px',
      umbra: '0px 5px 5px -3px',
    },
    {
      ambient: '0px 3px 16px 2px',
      elevation: 9,
      penumbra: '0px 9px 12px 1px',
      umbra: '0px 5px 6px -3px',
    },
    {
      ambient: '0px 4px 18px 3px',
      elevation: 10,
      penumbra: '0px 10px 14px 1px',
      umbra: '0px 6px 6px -3px',
    },
    {
      ambient: '0px 4px 20px 3px',
      elevation: 11,
      penumbra: '0px 11px 15px 1px',
      umbra: '0px 6px 7px -4px',
    },
    {
      ambient: '0px 5px 22px 4px',
      elevation: 12,
      penumbra: '0px 12px 17px 2px',
      umbra: '0px 7px 8px -4px',
    },
    {
      ambient: '0px 5px 24px 4px',
      elevation: 13,
      penumbra: '0px 13px 19px 2px',
      umbra: '0px 7px 8px -4px',
    },
    {
      ambient: '0px 5px 26px 4px',
      elevation: 14,
      penumbra: '0px 14px 21px 2px',
      umbra: '0px 7px 9px -4px',
    },
    {
      ambient: '0px 6px 28px 5px',
      elevation: 15,
      penumbra: '0px 15px 22px 2px',
      umbra: '0px 8px 9px -5px',
    },
    {
      ambient: '0px 6px 30px 5px',
      elevation: 16,
      penumbra: '0px 16px 24px 2px',
      umbra: '0px 8px 10px -5px',
    },
    {
      ambient: '0px 6px 32px 5px',
      elevation: 17,
      penumbra: '0px 17px 26px 2px',
      umbra: '0px 8px 11px -5px',
    },
    {
      ambient: '0px 7px 34px 6px',
      elevation: 18,
      penumbra: '0px 18px 28px 2px',
      umbra: '0px 9px 11px -5px',
    },
    {
      ambient: '0px 7px 36px 6px',
      elevation: 19,
      penumbra: '0px 19px 29px 2px',
      umbra: '0px 9px 12px -6px',
    },
    {
      ambient: '0px 8px 38px 7px',
      elevation: 20,
      penumbra: '0px 20px 31px 3px',
      umbra: '0px 10px 13px -6px',
    },
    {
      ambient: '0px 8px 40px 7px',
      elevation: 21,
      penumbra: '0px 21px 33px 3px',
      umbra: '0px 10px 13px -6px',
    },
    {
      ambient: '0px 8px 42px 7px',
      elevation: 22,
      penumbra: '0px 22px 35px 3px',
      umbra: '0px 10px 14px -6px',
    },
    {
      ambient: '0px 9px 44px 8px',
      elevation: 23,
      penumbra: '0px 23px 36px 3px',
      umbra: '0px 11px 14px -7px',
    },
    {
      ambient: '0px 9px 46px 8px',
      elevation: 24,
      penumbra: '0px 24px 38px 3px',
      umbra: '0px 11px 15px -7px',
    },
  ]

  const elevationOpacities = {
    ambient: 0.12,
    penumbra: 0.14,
    umbra: 0.2,
  }

  const shadowColor = [0, 0, 0]

  const elevationStyles = {}
  elevationValues.forEach(({ ambient, elevation, penumbra, umbra }) => {
    elevationStyles[`.elevation-dp${elevation}`] = {
      boxShadow: `${umbra} rgba(${shadowColor.join(',')}, ${
        elevationOpacities.umbra
      }), ${penumbra} rgba(${shadowColor.join(',')}, ${
        elevationOpacities.penumbra
      }), ${ambient} rgba(${shadowColor.join(',')}, ${
        elevationOpacities.ambient
      })`,
    }
  }, {})

  addBase(elevationStyles)
}
