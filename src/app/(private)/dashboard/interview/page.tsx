import CodeReviewIcon from "@/shared/ui/icons/code-review.svg";
import Codechallenge from "@/shared/ui/icons/codechallenge.svg";
import WhiteboardIcon from "@/shared/ui/icons/whiteboard.svg";

import Card from "@/features/dashboard/interview/Card";
import styles from "./interview.module.css";

export default function Interview() {
  return (
    <div className={styles.content}>
      <div className={styles.cards}>
        <Card
          icon={<WhiteboardIcon />}
          title="Whiteboard"
          percent={50}
          pendig={100}
          complete={50}
          total={100}
        />
        <Card
          icon={<CodeReviewIcon />}
          title="Code Review"
          percent={70}
          pendig={30}
          complete={70}
          total={100}
        />
        <Card
          icon={<Codechallenge />}
          title="Code Challenge"
          percent={30}
          pendig={70}
          complete={30}
          total={100}
        />
      </div>
      <div className={styles.listContent}></div>
    </div>
  );
}
