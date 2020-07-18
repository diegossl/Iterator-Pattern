import Iterator from './Iterator'
import ConcreteAggregate from './ConcreteAggregate'

class ConcreteIterator implements Iterator {
  
  private aggregate: ConcreteAggregate
  private index: number

  constructor(aggregate: ConcreteAggregate) {
    this.aggregate = aggregate
    this.index = -1
  }
  getCurrent (): object | undefined {
    if (this.index < this.aggregate.count()) {
      return this.aggregate.getItem(this.index)
    }
    return undefined
  }
  hasNext (): boolean {
    this.index++
    return this.index < this.aggregate.count()
  }
}

export default ConcreteIterator