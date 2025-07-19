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
        type: "backend",
        altText: "Java icon",
      },
      {
        icon: "nestjs",
        type: "backend",
        altText: "Nestjs icon",
      },
      {
        icon: "php",
        type: "backend",
        altText: "Php icon",
      },
      {
        icon: "postgresql",
        type: "backend",
        altText: "Postgresql icon",
      },
      {
        icon: "python",
        type: "backend",
        altText: "Python icon",
      },
      {
        icon: "typescript",
        type: "backend",
        altText: "Typescript icon",
      },
    ];

    const mobileIcons: TypeCardIcon[] = [
      {
        icon: "android",
        type: "mobile",
        altText: "Android icon",
      },
      {
        icon: "dart",
        type: "mobile",
        altText: "Dart icon",
      },
      {
        icon: "firebase",
        type: "mobile",
        altText: "Firebase icon",
      },
      {
        icon: "flutter",
        type: "mobile",
        altText: "Fluter icon",
      },
      {
        icon: "kotlin",
        type: "mobile",
        altText: "Kotlin icon",
      },
      {
        icon: "react",
        type: "mobile",
        altText: "React native icon",
      },
    ];

    const fullstackIcons: TypeCardIcon[] = [
      {
        icon: "dotnetcore",
        type: "fullstack",
        altText: "Dotnet core icon",
      },
      {
        icon: "express",
        type: "fullstack",
        altText: "Express icon",
      },
      {
        icon: "fastapi",
        type: "fullstack",
        altText: "Fast api icon",
      },
      {
        icon: "firebase",
        type: "fullstack",
        altText: "Farebase  icon",
      },
      {
        icon: "nextjs",
        type: "fullstack",
        altText: "Nextjs icon",
      },

      {
        icon: "spring",
        type: "fullstack",
        altText: "Spring icon",
      },
    ];

    return [
      {
        title: "Frontend",
        mainIcon: "frontend-icon",
        altText: "Fontend card icon",
        desc: ` Lorem ipsum dolor sit amet consectetur. Tortor tellus 
            consectetur et dictum pharetra. Sed turpis ipsum risus eu et. 
            Imperdiet et donec vel posuere dictum mi tortor lectus. is adipiscing ultrices turpis.`,
        icons: frontendIcons,
      },
      {
        title: "Backend",
        mainIcon: "backend-icon",
        altText: "Backend card icon",
        desc: ` Lorem ipsum dolor sit amet consectetur. Tortor tellus 
            consectetur et dictum pharetra. Sed turpis ipsum risus eu et. 
            Imperdiet et donec vel posuere dictum mi tortor lectus. is adipiscing ultrices turpis.`,
        icons: backedendIcons,
      },
      {
        title: "Mobile",
        mainIcon: "mobile-icon",
        altText: "Mobile card icon",
        desc: ` Lorem ipsum dolor sit amet consectetur. Tortor tellus 
            consectetur et dictum pharetra. Sed turpis ipsum risus eu et. 
            Imperdiet et donec vel posuere dictum mi tortor lectus. is adipiscing ultrices turpis.`,
        icons: mobileIcons,
      },
      {
        title: "Fullstack",
        mainIcon: "fullstack-icon",
        altText: "Fullstack card icon",
        desc: ` Lorem ipsum dolor sit amet consectetur. Tortor tellus 
            consectetur et dictum pharetra. Sed turpis ipsum risus eu et. 
            Imperdiet et donec vel posuere dictum mi tortor lectus. is adipiscing ultrices turpis.`,
        icons: fullstackIcons,
      },
    ];
  }
}
