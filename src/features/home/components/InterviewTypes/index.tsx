import Card from "@/shared/ui/components/card";
import CodeReview from "@/shared/ui/icons/code-review.svg";
import CodeChallenge from "@/shared/ui/icons/codechallenge.svg";
import WhiteboardIcon from "@/shared/ui/icons/whiteboard.svg";

import styles from "./InterviewTypes.module.css";

export default function InterviewTypes() {
  return (
    <section id="interviewTypes" className={styles.interviewTypes}>
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
          icon={<CodeReview />}
          title="Code Review"
          desc={`
            Analyze code snippets, identify issues, 
            and suggest improvements. Show your mastery 
            of best practices, readability, and software quality.
          `}
        />
        <Card
          icon={<CodeChallenge />}
          title="Code Challenge"
          desc={`
              Solve real programming challenges based 
              on your chosen language and skill level.
              Get instant analysis of your solution with 
              technical feedback and improvement suggestions.
          `}
        />
      </div>
    </section>
  );
}
