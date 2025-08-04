// ХОМ воРК 2 - в рамках ооп создать структуру сущности, class Point (x,y, name) должен появиться абстрактный клас фигура, клас фигура содержит масив поинтов (методы) периметры, площадь, рисунок.
// 4 угольник -  трапеция, прямоугольник ромб (квадрат), 3 угольник (виды 3 угольников несколько), круг

//Update hom work - (ФАБРИКА) Новая специальная функция которая принимает любое колво параметров и возвращает после себя фигруру или нуллю

class Point {
  constructor(x, y){
    this.x = x
    this.y = y
  }
}

class Figure {
  static type = 'figure'
//Points should be array.
  constructor(point){
    this.a = point.a
    this.b = point.b
    this.c = point.c
    this.d = point.d
  }
  //Add methods draw, this method should be available for all child like "Drawing ${figure.name}"
  //Add method for calculating perimetr.

}

class Circle extends Figure {
  static type = 'circle'
  constructor(point, radius){
    super(point)
    this.radius = radius
  }
//Ovveride method perimetr according figure for each child class.
  get area(){
    return perimetr()
  }

  perimeter() {
    return 2*Math.PI*this.radius
  }
}

class Rectangular extends Figure {

}

class Isosceles extends Rectangular {

}

class Equilateral extends Rectangular {

}

class Right extends Rectangular {

}

class Rectangle extends Figure {

}

class Square extends Rectangle {

}

class Rhombus extends Rectangle {

}

let a = new Point(5, 5)
let b = new Point(10, 10)
let c = new Point(20, 10)
let d = new Point(20, 5)

const point = [a, b, c, d]

// function figureWarloc(...args): Figure | null {
//   if (args.length > 0) {
//     return new Figure();
//   } else {
//     return null;
//   }
// }
