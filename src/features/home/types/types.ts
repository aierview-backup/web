export type TypeCardIcon = {
  icon: string;
  type: string;
  altText: string;
};

export type TypeCardProps = {
  title: string;
  mainIcon: string;
  altText: string;
  desc: string;
  icons: TypeCardIcon[];
};
