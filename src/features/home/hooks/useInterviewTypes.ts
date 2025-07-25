import HomeService from "@/features/home/services/impl/home.service";
import {InterviewType} from "@/features/home/types/types";
import {useEffect, useState} from "react";

export function useInterviewTypes() {
    const [interviewTypes, setInterviewTypes] = useState<InterviewType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const controller = new AbortController(); // para cancelar requisições se o componente desmontar
        const service = new HomeService();

        const fetchInterviewTypes = async () => {
            try {
                const data = await service.getInterviewTypes();
                if (!controller.signal.aborted) {
                    setInterviewTypes(data);
                }
            } catch (err) {
                if (!controller.signal.aborted) {
                    setError(err as Error);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false);
                }
            }
        };

        fetchInterviewTypes();

        return () => controller.abort();
    }, []);

    return {interviewTypes, isLoading, error};
}
