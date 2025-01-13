
export type Badge = {
  shortname: string
  name: { english: string }
  sprite: string
  region: string
}

export function getBadgesFromKanto(): Badge[] {
  let boulder = <Badge>{
    shortname: 'boulder',
    name: { english: 'Boulder' },
    sprite: 'kanto/boulder.png',
    region: 'kanto'
  }
  let cascade = <Badge>{
    shortname: 'cascade',
    name: { english: 'Cascade' },
    sprite: 'kanto/cascade.png',
    region: 'kanto'
  }
  let thunder = <Badge>{
    shortname: 'thunder',
    name: { english: 'Thunder' },
    sprite: 'kanto/thunder.png',
    region: 'kanto'
  }
  let rainbow = <Badge>{
    shortname: 'rainbow',
    name: { english: 'Rainbow' },
    sprite: 'kanto/rainbow.png',
    region: 'kanto'
  }
  let soul = <Badge>{
    shortname: 'soul',
    name: { english: 'Soul' },
    sprite: 'kanto/soul.png',
    region: 'kanto'
  }
  let marsh = <Badge>{
    shortname: 'marsh',
    name: { english: 'Marsh' },
    sprite: 'kanto/marsh.png',
    region: 'kanto'
  }
  let volcano = <Badge>{
    shortname: 'volcano',
    name: { english: 'Volcano' },
    sprite: 'kanto/volcano.png',
    region: 'kanto'
  }
  let earth = <Badge>{
    shortname: 'earth',
    name: { english: 'Earth' },
    sprite: 'kanto/earth.png',
    region: 'kanto'
  }
  let badges = [boulder, cascade, thunder, rainbow, soul, marsh, volcano, earth]
  return badges;
}
