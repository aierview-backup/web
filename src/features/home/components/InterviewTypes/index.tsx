import Card from "@/shared/ui/components/card";
import WhiteboardIcon from "@/shared/ui/icons/whiteboard.svg";
import styles from "./InterviewTypes.module.css";

export default function InterviewTypes() {
  return (
    <section id="InterviewTypes" className={styles.interviewTypes}>
      <h1>Interview Types</h1>
      <p>
        Explore different formats of technical interviews used in the industry.
        Practice with challenges tailored to your level, area of expertise, and
        technology and be ready for every stage of the hiring process.
      </p>
      <div className={styles.cards}>
        <Card
          icon={<WhiteboardIcon />}
          title="Whiteboard"
          desc={`
            Challenges focused on logic, code structure, and problem-solving.
            Respond by explaining your reasoning and demonstrate your technical
            skills no actual coding required.
          `}
        />
        <Card
          icon={<WhiteboardIcon />}
          title="Whiteboard"
          desc={`
            Challenges focused on logic, code structure, and problem-solving.
            Respond by explaining your reasoning and demonstrate your technical
            skills no actual coding required.
          `}
        />
        <Card
          icon={<WhiteboardIcon />}
          title="Whiteboard"
          desc={`
            Challenges focused on logic, code structure, and problem-solving.
            Respond by explaining your reasoning and demonstrate your technical
            skills no actual coding required.
          `}
        />
      </div>
    </section>
  );
}
