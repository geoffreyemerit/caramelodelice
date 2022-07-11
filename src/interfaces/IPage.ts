export default interface IPage {
  // map(arg0: (dwich: any, index: any) => JSX.Element): import('react').ReactNode;
  title: string;
  subTitle: string;
  description: string;
  image1: string;
  image2?: string;
  image3?: string;
  backgroundImg?: string;
  createdDate?: Date;
  website?: string;
  idUser?: number;
  idSupplier?: number;
  idAddress?: number;
  idPageType: number;
}
