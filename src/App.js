import React from 'react';
import './App.css';

function Yofun() {
  let e = Silnia(5);
  let f = SilniaReq(5);
  let g = Fibbonacci(8);
  let h = ReverseString('Reverse');
  let fp = ifFakePalindrom('KAJAKI', 'EPUD');
  let p = ifPalindrom('KAJAK');
  let r = isPalindrom2('KAJAK');
  let u = ReverseStringOneLinePalindrom('jokoj');
  const o = howManyChars('mandarynka', 'g');
  const dziel = dzielniki(128).join(',');
  const max1 = maxSmart([2, 34, 119, 33, 44, 22]);
  const max2 = maxSmart([111, 33, 44, 22]);
  const max3 = maxSmart([111, 33, 44, 4444]);
  const tree = choinkaSPniaczkiem(6);
  const missingNum = whatIsMissingOrdered([1, 2, 3, 4, 5, 6, 7, 8, 10]);
  const missingNum1 = whatIsMissingUnordered([6, 5, 3, 8, 7, 4, 2, 1, 10]);
  const tree2 = new Choinka('+', true);
  tree2.generate(6);
  const tree3 = new Choinka('+', true);
  tree3.generate(10);
  tree3.generate(15);

  const parkMall = new Parking([8, 2, 5, 8]);
  parkMall.park(0, 'a44');
  parkMall.park(0, 'b34');
  parkMall.park(0, 'c34');
  let parkedCar = parkMall.showFloor(0).join(', ');
  parkMall.leave('b34');
  let parkedCar1 = parkMall.showFloor(0).join(', ');
  parkMall.park(1, 'd44');
  parkMall.park(1, 'e34');
  parkMall.park(1, 'f34');
  let parkedCar2 = parkMall.showFloor(1).join(', ');
  return (
    <div>
      <p>{e}</p>
      <p>{f}</p>
      <p>{g}</p>
      <p>{h}</p>
      <p>ifFakePalindrom:{fp ? 'true' : 'false'}</p>
      <p>ifPalindrom:{p ? 'true' : 'false'}</p>
      <p>isPalindrom2:{r ? 'true' : 'false'}</p>
      <p>ReverseStringOneLinePalindrom:{u ? 'true' : 'false'}</p>
      <p>howManyChars:{o}</p>
      <p>dzielniki:{dziel}</p>
      <p>max: {max1}, {max2}, {max3}</p>
      <p>{tree}</p>
      <p>number missing:{missingNum}</p>
      <p>number missing:{missingNum1}</p>
      <p>{parkedCar}</p>
      <p>{parkedCar1}</p>
      <p>{parkedCar2}</p>
      <p>free places: {parkMall.freePlaces()}</p>
      <YoClass text='tetete' />
    </div>
  );
}

class Car {
  constructor(brand, model, carReg) {
    this.brand = brand;
    this.model = model;
    this.carReg = carReg;
    this.distance = 0;
  }
  setDistance(d) {
    this.distance += d;
  }
  getDistance() {
    return this.distance;
  }
}
class Parking {
  constructor(allPlaces) {
    this.allPlaces = allPlaces;
    this.floo = [];
    for (let i = 0; i < this.allPlaces.length; i++) {
      this.floo[i] = [];
    }
  }

  freePlaces() {
    let freePlaces = [];
    for (let i = 0; i < this.allPlaces.length; i++) {
      freePlaces.push(this.freePlacesAtFloor(i));
    }
    return freePlaces;
  }
  freePlacesAtFloor(floorInd) {
    return (this.allPlaces[floorInd] - this.floo[floorInd].length);
  }
  park(floorInd, carReg) {
    if (this.freePlacesAtFloor(floorInd) === 0) {
      console.log(`sorry, this floor is full, you can not park ${carReg} on ${floorInd} floor`);
      return false;
    } else {
      this.floo[floorInd].push(carReg);
      return true;
    }
  }

  leave(carReg) {
    let firstInd;
    let secondInd;
    for (let i = 0; i < this.allPlaces.length; i++) {
      let j = this.floo[i].indexOf(carReg);
      if (j !== -1) { firstInd = i; secondInd = j }
    }
    this.floo[firstInd].splice(secondInd, 1);
  }

  showFloor(floorInd) {
    return [...this.floo[floorInd]];
  }
}

class Choinka {
  constructor(sign, pniaczek) {
    this.sign = sign;
    this.pniaczek = pniaczek;
  }

  generate(height) {
    let choinka = [];
    for (let i = 0; i < height; i++) {
      choinka[i] = this.generateRow(i, height);
    }
    if (this.pniaczek) { choinka[height] = choinka[0] }
    console.log(choinka.map(r => r.join('')).join('\n'));
  }
  generateRow(index, height) {
    let branch = [];
    for (let j = 1; j <= (height - index - 1); j++) {
      branch.push(' ');
    }
    for (let j = 1; j < (2 * (index + 1)); j++) {
      branch.push(this.sign);
    }
    for (let j = 1; j <= (height - index - 1); j++) {
      branch.push(' ');
    }
    return branch;
  }

}

function whatIsMissingOrdered(a) {
  if (a[0] !== 1) { return 1 }
  for (let i = 1; i < a.length; i++) {
    if (a[i] !== (a[i - 1] + 1)) { return (a[i - 1] + 1) };
  }
  return 'nothing';
}

function whatIsMissingUnordered(a) {
  for (let i = 1; i <= a.length; i++) {
    if (!(a.some((b) => b === i))) { return i }
  }

  return 'nothing';
}

function choinkaSPniaczkiem(height) {
  let row = [];
  for (let i = 0; i < height; i++) {
    row[i] = [];
    for (let j = 1; j <= (height - i - 1); j++) {
      row[i].push(' ');
    }
    for (let j = 1; j < (2 * (i + 1)); j++) {
      row[i].push('#');
    }
    for (let j = 1; j <= (height - i - 1); j++) {
      row[i].push(' ');
    }
  }
  row[row.length] = row[0];
  console.log(row.map(r => r.join('')).join('\n'));
  return row.map(r => r.join('')).join('\n');
}

function maxSmart(k) {
  let max = k[0];
  for (let i = 1; i < k.length; i++) {
    if (max < k[i]) { max = k[i]; }
  }
  return max;
}
function dzielniki(num) {
  let dzielniki = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) { dzielniki.push(i); }
  };
  return dzielniki;
}

function howManyChars(text, c) {
  return text.split('').filter(char => char === c).length;
}

function ReverseString(t) {
  let arrT = t.split('');
  let newT = '';
  while (arrT.length > 0) {
    newT += arrT.pop();
  };
  return newT;
}

function ReverseStringOneLinePalindrom(t) {
  return t === t.split('').reverse().join('');
}

function ifFakePalindrom(a, b) {
  let text1 = a.split('');
  let text2 = b.split('');
  let index = text1.length - 1;
  if (text1.length !== text2.length) { return false; }

  for (let i = index; i >= 0; i--) {
    if (text1[i] !== text2[index - i]) {
      return false;
    }
  }
  return true;
}

function ifPalindrom(a) {
  let text1 = a.split('');
  for (let i = 0; i < text1.length; i++) {
    if (text1[i] !== text1[text1.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function isPalindrom2(a) {
  return a === ReverseString(a);
}
function Fibbonacci(num) {
  return num <= 1 ? num : Fibbonacci(num - 1) + Fibbonacci(num - 2);
}

function Silnia(num) {
  let j = 1;
  for (let i = 1; i <= num; i++) {
    j *= i;
  }
  return j;
}

function SilniaReq(num) {
  return num <= 1 ? 1 : num * SilniaReq(num - 1);
}
class YoClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Asia' }

  }
  componentDidMount() {
    console.log(`mounted ${this.props.text}`);
  }
  render() {
    return <p>returned</p>;
  }
}

function App() {
  return (
    <div className="App">
      <Yofun />
    </div>
  );
}

export default App;
