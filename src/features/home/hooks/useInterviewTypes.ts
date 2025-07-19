import { useEffect, useState } from "react";
import HomeService from "@/features/home/services/impl/home.service";
import { TypeCardProps } from "@/features/home/types/types";

export function useInterviewTypes() {
  const [interviewTypes, setInterviewTypes] = useState<TypeCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const service = new HomeService();
      const data = await service.getInterviewTypes();
      setInterviewTypes(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { interviewTypes, loading };
}
