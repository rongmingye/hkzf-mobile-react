interface IHouseItem {
  src: string, 
  title: string, 
  desc: string, 
  tags: string[], 
  price: number, 
  onClick(): void, 
  style: object,
}