import Iterator from './Iterator'

export default interface IAggregate {
  createIterator(): Iterator
}