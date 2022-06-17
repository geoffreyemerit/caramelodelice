export default interface IPage {
  title: string;
  subTitle: string;
  image1: string;
  image2?: string;
  image3?: string;
  backgroundImg?: string;
  createDate?: Date;
  website?: string;
  idUser?: number;
  idSupplier?: number;
  idAddress?: number;
}
