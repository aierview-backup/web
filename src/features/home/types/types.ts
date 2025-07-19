export type TypeCardIcon = {
  icon: string;
  altText: string;
};

export type TypeCardProps = {
  title: string;
  mainIcon: string;
  altText: string;
  type: string;
  desc: string;
  icons: TypeCardIcon[];
};
