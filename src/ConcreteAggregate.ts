import IAggregate from './IAggregate'
import Iterator from './Iterator'
import ConcreteIterator from './ConcreteIterator'

class ConcreteAggregate  implements IAggregate {

  private items: object[]

  constructor () {
    this.items = []
  }

  createIterator (): Iterator {
    return new ConcreteIterator(this)
  }

  add (object: object): void {
    this.items.push(object)
  }

  getItem (index: number): object {
    return this.items[index]
  }

  count (): number {
    return this.items.length
  }

}

export default ConcreteAggregate