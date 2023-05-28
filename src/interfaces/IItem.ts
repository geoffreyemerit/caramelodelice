export default interface IItem {
  price: string;
  id: number;
  title: string;
  subTitle: string;
  subTitle2?: string;
  description: string;
  image1: string;
  image2?: string;
  available: boolean;
}
