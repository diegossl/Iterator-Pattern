import ConcreteAggregate from './src/ConcreteAggregate'
import Iterator from './src/Iterator'

const aggregate: ConcreteAggregate = new ConcreteAggregate()
aggregate.add({ message: 'one' })
aggregate.add({ message: 'two' })
aggregate.add({ message: 'three' })
aggregate.add({ message: 'four' })
aggregate.add({ message: 'five' })

console.log(aggregate.count)

const iterator: Iterator = aggregate.createIterator()
// while (iterator.hasNext) {
//   const item: object | undefined = iterator.getCurrent()
//   console.log(item)
// }