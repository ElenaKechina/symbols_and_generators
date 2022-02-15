import Team from './team';

const char = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char1 = {
  name: 'Арбалетчик',
  type: 'Bowman',
  health: 60,
  level: 1,
  attack: 40,
  defence: 10,
};

const char2 = {
  name: 'Снайпер',
  type: 'Bowman',
  health: 70,
  level: 1,
  attack: 80,
  defence: 10,
};

const enemys = new Team();
enemys.add(char);
enemys.add(char1);
enemys.add(char2);

console.log('enemys: ', enemys.team);

for (const enemy of enemys) {
  console.log('enemy-->', enemy);
}
