import Iterator from './Iterator'
import IAggregator from './IAggregator'
import AlphabeticalOrderIterator from './AlphabeticalOrderIterator'

class WordsCollection implements IAggregator {
  private items: string[] = []

  public getItem(index: number): string {
    return this.items[index]
  }

  public getCount(): number {
    return this.items.length
  }

  public addItem(item: string): void {
    this.items.push(item)
  }

  public getIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this)
  }
}

export default WordsCollection 