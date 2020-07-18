import Iterator from './Iterator'
import WordsCollection  from './WordsCollection'

class AlphabeticalOrderIterator implements Iterator<string> {

  private collection: WordsCollection
  private position: number = 0

  constructor(collection: WordsCollection) {
    this.collection = collection
  }

  public current(): string {
    return this.collection.getItem(this.position)
  }

  public key(): number {
    return this.position
  }

  public next(): string {
    const item = this.collection.getItem(this.position)
    this.position++
    return item
  }

  public valid(): boolean {
    return this.position < this.collection.getCount()
  }
}

export default AlphabeticalOrderIterator