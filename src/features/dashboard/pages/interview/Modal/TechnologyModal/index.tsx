import {
  technologySchema,
  TechnologySchemaFormData,
} from "@/features/dashboard/validations/technology/technology.validation";
import { useWhiteboardStore } from "@/shared/store/whiteboardStore";
import Button from "@/shared/ui/components/Button";
import Modal from "@/shared/ui/components/Modal";
import Select from "@/shared/ui/components/Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styles from "./technology.module.css";

const roleOptions = [
  { label: "Frontend", value: "frontend" },
  { label: "Mobile", value: "mobile" },
  { label: "Fullstack", value: "fullstack" },
];

const programmingLanguages = [
  { label: "Java", value: "java" },
  { label: "Javascript", value: "javascript" },
  { label: "Dart", value: "dart" },
];

const levels = [
  { label: "Junior", value: "junior" },
  { label: "Mid Level", value: "midlevel" },
  { label: "Senior", value: "senior" },
];

type TechnologyModalType = {
  interviewType: string;
  onClose: () => void;
};

export default function TechnologyModal(props: TechnologyModalType) {
  const router = useRouter();
  const { begin } = useWhiteboardStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TechnologySchemaFormData>({
    resolver: zodResolver(technologySchema),
  });

  const onSubmit = async (data: TechnologySchemaFormData) => {
    const result = await begin({
      level: data.level,
      role: data.role,
      technology: data.programingLanguage,
    });

    if (result) router.push("/interview/whiteboard");
  };

  return (
    <Modal className={styles.modal} onClose={props.onClose}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1>{props.interviewType} mode activated</h1>
        <p>
          Please provide the specialization, programming language, and seniority
          level to begin the simulation.
        </p>
        <div className={styles.fields}>
          <Select
            id="role"
            name="role"
            label="Slect a Role"
            placeholder="Choose your role"
            options={roleOptions}
            register={register("role")}
            message={errors.role?.message}
          />

          <Select
            id="programingLanguage"
            name="programingLanguage"
            label="Select a Programing Language"
            placeholder="Choose your a programing language"
            options={programmingLanguages}
            register={register("programingLanguage")}
            message={errors.programingLanguage?.message}
          />

          <Select
            id="level"
            name="level"
            label="Slect a Level"
            placeholder="Choose your a Level"
            options={levels}
            register={register("level")}
            message={errors.level?.message}
          />
        </div>
        <span className={styles.action}>
          <Button value="Next" disabled={isSubmitting} />
        </span>
      </form>
    </Modal>
  );
}
