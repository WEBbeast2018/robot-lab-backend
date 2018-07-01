const ROBOTS = [
  {
    id: 1,
    age: 15,
    name: 'Dave',
    type: 'droid',
    parts: [{
      partId: 101,
      condition: 35
    }]
  },
  {
    id: 2,
    age: 16,
    name: 'Dave2',
    type: 'android',
    parts: [{
      partId: 104,
      condition: 90
    }, {
      partId: 101,
      condition: 90
    }]
  },
  {
    id: 3,
    age: 17,
    name: 'Dave3',
    type: 'droid',
    parts: [{
      partId: 102,
      condition: 23
    }
    ]
  },
  {
    id: 4,
    age: 18,
    name: 'Dave4',
    type: 'droid',
    parts: [
      {
        partId: 103,
        condition: 99
      },
      {
        partId: 102,
        condition: 76
      },
      {
        partId: 105,
        condition: 87
      }]
  }
];


const PARTS = [
  {
    cpu: 'i5',
    engine: 'GPU',
    id: 101,
    name: 'Lidar',
    type: 'Sensors'
  },
  {
    cpu: 'Core 2 Duo',
    engine: 'GPU',
    id: 102,
    name: 'Cytron 13A',
    type: 'Cameras'
  },
  {
    cpu: 'Core M',
    engine: 'Volta',
    id: 103,
    name: 'LIDAR-Lite 3',
    type: 'Control Systems'
  },
  {
    cpu: 'Merom-L',
    engine: 'Quadro',
    id: 104,
    name: 'Lidar',
    type: 'hydraulics'
  },
  {
    cpu: 'Penryn',
    engine: 'Tesla',
    id: 105,
    name: 'Lynxmotion',
    type: 'Pneumatics'
  }
];


module.exports = {
	parts: PARTS,
	robots: ROBOTS
};