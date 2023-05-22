export default interface IItem {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  image1: string;
  image2?: string;
  available: boolean;
}
