export default interface Iterator {
  getCurrent(): object | undefined
  hasNext(): boolean
}