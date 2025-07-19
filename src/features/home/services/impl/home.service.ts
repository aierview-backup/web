import IHome from "@/features/home/services/contract/home";
import { TypeCardIcon, TypeCardProps } from "@/features/home/types/types";

export default class HomeService implements IHome {
  constructor() {}

  async getInterviewTypes(): Promise<TypeCardProps[]> {
    return this.buildInterviewTypes();
  }

  private buildInterviewTypes(): TypeCardProps[] {
    const frontendIcons: TypeCardIcon[] = [
      {
        icon: "angular",
        type: "frontend",
        altText: "Anlgular js icon",
      },
      {
        icon: "css",
        type: "frontend",
        altText: "Css icon",
      },
      {
        icon: "html",
        type: "frontend",
        altText: "Html icon",
      },
      {
        icon: "javascript",
        type: "frontend",
        altText: "Javascript icon",
      },
      {
        icon: "react",
        type: "frontend",
        altText: "Reactjs icon",
      },
      {
        icon: "vue",
        type: "frontend",
        altText: "Vuejs icon",
      },
    ];

    const backedendIcons: TypeCardIcon[] = [
      {
        icon: "java",
        altText: "Java icon",
      },
      {
        icon: "nestjs",
        altText: "Nestjs icon",
      },
      {
        icon: "php",
        altText: "Php icon",
      },
      {
        icon: "postgresql",
        altText: "Postgresql icon",
      },
      {
        icon: "python",
        altText: "Python icon",
      },
      {
        icon: "typescript",
        altText: "Typescript icon",
      },
    ];

    const mobileIcons: TypeCardIcon[] = [
      {
        icon: "android",
        altText: "Android icon",
      },
      {
        icon: "dart",
        altText: "Dart icon",
      },
      {
        icon: "firebase",
        altText: "Firebase icon",
      },
      {
        icon: "flutter",
        altText: "Fluter icon",
      },
      {
        icon: "kotlin",
        altText: "Kotlin icon",
      },
      {
        icon: "react",
        altText: "React native icon",
      },
    ];

    const fullstackIcons: TypeCardIcon[] = [
      {
        icon: "dotnetcore",
        altText: "Dotnet core icon",
      },
      {
        icon: "express",
        altText: "Express icon",
      },
      {
        icon: "fastapi",
        altText: "Fast api icon",
      },
      {
        icon: "firebase",
        altText: "Farebase  icon",
      },
      {
        icon: "nextjs",
        altText: "Nextjs icon",
      },

      {
        icon: "spring",
        altText: "Spring icon",
      },
    ];

    return [
      {
        title: "Frontend",
        mainIcon: "frontend-icon",
        altText: "Fontend card icon",
        type: "frontend",
        desc: ` Lorem ipsum dolor sit amet consectetur. Tortor tellus 
            consectetur et dictum pharetra. Sed turpis ipsum risus eu et. 
            Imperdiet et donec vel posuere dictum mi tortor lectus. is adipiscing ultrices turpis.`,
        icons: frontendIcons,
      },
      {
        title: "Backend",
        mainIcon: "backend-icon",
        altText: "Backend card icon",
        type: "backend",
        desc: ` Lorem ipsum dolor sit amet consectetur. Tortor tellus 
            consectetur et dictum pharetra. Sed turpis ipsum risus eu et. 
            Imperdiet et donec vel posuere dictum mi tortor lectus. is adipiscing ultrices turpis.`,
        icons: backedendIcons,
      },
      {
        title: "Mobile",
        mainIcon: "mobile-icon",
        altText: "Mobile card icon",
        type: "mobile",
        desc: ` Lorem ipsum dolor sit amet consectetur. Tortor tellus 
            consectetur et dictum pharetra. Sed turpis ipsum risus eu et. 
            Imperdiet et donec vel posuere dictum mi tortor lectus. is adipiscing ultrices turpis.`,
        icons: mobileIcons,
      },
      {
        title: "Fullstack",
        mainIcon: "fullstack-icon",
        altText: "Fullstack card icon",
        type: "fullstack",
        desc: ` Lorem ipsum dolor sit amet consectetur. Tortor tellus 
            consectetur et dictum pharetra. Sed turpis ipsum risus eu et. 
            Imperdiet et donec vel posuere dictum mi tortor lectus. is adipiscing ultrices turpis.`,
        icons: fullstackIcons,
      },
    ];
  }
}
